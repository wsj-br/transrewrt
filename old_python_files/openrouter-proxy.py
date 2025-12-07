#!/usr/bin/env python3
"""
OpenRouter API Proxy
A simple HTTP proxy that forwards requests to OpenRouter API
Designed to work with Tailscale Funnel
"""

from http.server import HTTPServer, BaseHTTPRequestHandler
import urllib.request
import urllib.error
import sys
import os
import logging
import json
from socketserver import ThreadingMixIn

# Configure logging
# Allow DEBUG level via environment variable
log_level = logging.DEBUG if os.environ.get('PROXY_DEBUG', '').lower() in ('1', 'true', 'yes') else logging.INFO
logging.basicConfig(
    level=log_level,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

class ThreadedHTTPServer(ThreadingMixIn, HTTPServer):
    """Handle requests in a separate thread."""
    daemon_threads = True
    allow_reuse_address = True

class ProxyHandler(BaseHTTPRequestHandler):
    """HTTP request handler that proxies to OpenRouter API"""
    
    # Target API endpoint
    TARGET_HOST = "openrouter.ai"
    TARGET_SCHEME = "https"
    
    # Headers to exclude from forwarding
    HOP_BY_HOP_HEADERS = {
        'connection', 'keep-alive', 'proxy-authenticate',
        'proxy-authorization', 'te', 'trailers', 'transfer-encoding',
        'upgrade', 'host'
    }
    
    def do_GET(self):
        """Handle GET requests"""
        self.proxy_request()
    
    def do_POST(self):
        """Handle POST requests"""
        self.proxy_request()
    
    def do_PUT(self):
        """Handle PUT requests"""
        self.proxy_request()
    
    def do_DELETE(self):
        """Handle DELETE requests"""
        self.proxy_request()
    
    def do_PATCH(self):
        """Handle PATCH requests"""
        self.proxy_request()
    
    def do_OPTIONS(self):
        """Handle OPTIONS requests"""
        self.proxy_request()
    
    def send_json_error(self, code, message):
        """Send a JSON error response instead of HTML"""
        error_response = {
            "error": {
                "message": message,
                "type": "proxy_error",
                "code": code
            }
        }
        error_json = json.dumps(error_response).encode('utf-8')
        
        self.send_response(code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(error_json)))
        self.end_headers()
        self.wfile.write(error_json)
    
    def proxy_request(self):
        """
        Main proxy logic: forward request to OpenRouter and stream response back
        """
        client_ip = self.client_address[0]
        try:
            # Construct target URL
            url = f"{self.TARGET_SCHEME}://{self.TARGET_HOST}{self.path}"
            logger.info(f"[{client_ip}] {self.command} {self.path}")
            logger.debug(f"[{client_ip}] Target URL: {url}")
            
            # Log incoming headers (excluding sensitive ones)
            sensitive_headers = {'authorization', 'cookie', 'x-api-key'}
            incoming_headers = {k: v for k, v in self.headers.items() 
                              if k.lower() not in sensitive_headers}
            logger.debug(f"[{client_ip}] Incoming headers: {incoming_headers}")
            
            # Read request body if present
            content_length = self.headers.get('Content-Length')
            body = None
            if content_length:
                try:
                    body_len = int(content_length)
                    logger.debug(f"[{client_ip}] Reading request body: {body_len} bytes")
                    body = self.rfile.read(body_len)
                    logger.debug(f"[{client_ip}] Read {len(body)} bytes from request body")
                except Exception as e:
                    logger.error(f"[{client_ip}] Error reading request body: {e}")
                    self.send_json_error(400, "Bad Request: Could not read body")
                    return
            
            # Create forwarding request
            req = urllib.request.Request(url, data=body, method=self.command)
            
            # Forward headers (excluding hop-by-hop headers)
            forwarded_headers = []
            for key, value in self.headers.items():
                if key.lower() not in self.HOP_BY_HOP_HEADERS:
                    req.add_header(key, value)
                    forwarded_headers.append(key)
            
            # Always set Host header to target
            req.add_header('Host', self.TARGET_HOST)
            logger.debug(f"[{client_ip}] Forwarding {len(forwarded_headers)} headers to upstream")
            
            # Make request with streaming support
            try:
                logger.debug(f"[{client_ip}] Sending request to upstream: {url}")
                response = urllib.request.urlopen(req, timeout=300)
                logger.info(f"[{client_ip}] Upstream response: {response.status} {response.reason}")
                
                # Log response headers
                response_headers = {k: v for k, v in response.headers.items() 
                                  if k.lower() not in sensitive_headers}
                logger.debug(f"[{client_ip}] Upstream response headers: {response_headers}")
                
                # Send response status
                self.send_response(response.status)
                
                # Forward response headers (excluding hop-by-hop)
                forwarded_response_headers = []
                for key, value in response.headers.items():
                    if key.lower() not in self.HOP_BY_HOP_HEADERS:
                        self.send_header(key, value)
                        forwarded_response_headers.append(key)
                
                # Add CORS headers to allow cross-origin requests
                self.send_header('Access-Control-Allow-Origin', '*')
                self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
                self.send_header('Access-Control-Allow-Headers', '*')
                
                self.end_headers()
                logger.debug(f"[{client_ip}] Forwarded {len(forwarded_response_headers)} response headers to client")
                
                # Stream response body in chunks for better performance
                # This is crucial for streaming API responses
                chunk_size = 8192
                total_bytes = 0
                while True:
                    chunk = response.read(chunk_size)
                    if not chunk:
                        break
                    try:
                        self.wfile.write(chunk)
                        self.wfile.flush()  # Important for streaming
                        total_bytes += len(chunk)
                    except BrokenPipeError:
                        logger.warning(f"[{client_ip}] Client disconnected during streaming")
                        break
                
                logger.info(f"[{client_ip}] {self.command} {self.path} - {response.status} ({total_bytes} bytes)")
                
            except urllib.error.HTTPError as e:
                # Forward HTTP errors from upstream
                logger.warning(f"[{client_ip}] Upstream HTTP error: {e.code} {e.reason}")
                
                # Read error body
                error_body = e.read()
                content_type = e.headers.get('Content-Type', '').lower()
                logger.debug(f"[{client_ip}] Upstream error Content-Type: {content_type}")
                logger.debug(f"[{client_ip}] Upstream error body: {error_body[:500]}...")
                
                # Check if upstream returned HTML - if so, convert to JSON for transparency
                if 'text/html' in content_type or (error_body and (b'<!DOCTYPE' in error_body[:100] or b'<html' in error_body[:100])):
                    logger.info(f"[{client_ip}] Converting HTML error response to JSON")
                    # Convert HTML error to JSON format
                    error_response = {
                        "error": {
                            "message": f"Upstream returned HTML error page: {e.reason}",
                            "type": "upstream_error",
                            "code": e.code,
                            "upstream_status": e.code
                        }
                    }
                    error_json = json.dumps(error_response).encode('utf-8')
                    
                    self.send_response(e.code)
                    self.send_header('Content-Type', 'application/json')
                    self.send_header('Content-Length', str(len(error_json)))
                    self.end_headers()
                    self.wfile.write(error_json)
                    logger.warning(f"[{client_ip}] {self.command} {self.path} - {e.code} (converted HTML to JSON)")
                else:
                    # Forward error as-is if it's already JSON or other non-HTML format
                    self.send_response(e.code)
                    for key, value in e.headers.items():
                        if key.lower() not in self.HOP_BY_HOP_HEADERS:
                            self.send_header(key, value)
                    self.end_headers()
                    
                    # Forward error body
                    self.wfile.write(error_body)
                    logger.warning(f"[{client_ip}] {self.command} {self.path} - {e.code} (forwarded error body)")
                
            except urllib.error.URLError as e:
                logger.error(f"[{client_ip}] URL Error connecting to upstream: {e.reason}")
                logger.error(f"[{client_ip}] Failed URL: {url}")
                self.send_json_error(502, f"Bad Gateway: {e.reason}")
                
            except Exception as e:
                logger.error(f"[{client_ip}] Unexpected error during proxying: {e}", exc_info=True)
                self.send_json_error(502, f"Bad Gateway: {str(e)}")
                
        except Exception as e:
            logger.error(f"[{client_ip}] Error handling request: {e}", exc_info=True)
            try:
                self.send_json_error(500, f"Internal Server Error: {str(e)}")
            except:
                pass  # Connection might be broken
    
    def log_message(self, format, *args):
        """Override default logging to use our logger"""
        # Suppress default HTTP server logs, we're using our own
        pass

def main():
    """Start the proxy server"""
    host = 'localhost'
    port = 9000
    
    # Allow port override via command line
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            logger.error("Invalid port number")
            sys.exit(1)
    
    server_address = (host, port)
    httpd = None
    
    try:
        httpd = ThreadedHTTPServer(server_address, ProxyHandler)
        logger.info(f"OpenRouter API Proxy started on {host}:{port}")
        logger.info(f"Forwarding requests to https://{ProxyHandler.TARGET_HOST}")
        logger.info("Press Ctrl+C to stop")
        httpd.serve_forever()
    except KeyboardInterrupt:
        logger.info("\nShutting down proxy server...")
        if httpd:
            httpd.shutdown()
        sys.exit(0)
    except Exception as e:
        logger.error(f"Failed to start server: {e}")
        if httpd:
            httpd.shutdown()
        sys.exit(1)

if __name__ == '__main__':
    main()



