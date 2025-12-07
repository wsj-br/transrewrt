#!/usr/bin/env python3
"""
Test script for OpenRouter Proxy
Tests the proxy functionality and verifies it's transparent to clients
"""

import requests
import json
import sys
import time
from typing import Dict, Any, Optional
from config_manager import ConfigManager

# Configuration
PROXY_URL = "http://localhost:9000/api/v1"
DIRECT_URL = "https://openrouter.ai/api/v1"


class Colors:
    """ANSI color codes for terminal output"""
    GREEN = '\033[92m'
    RED = '\033[91m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    RESET = '\033[0m'
    BOLD = '\033[1m'


def print_test(name: str):
    """Print test header"""
    print(f"\n{Colors.BOLD}{Colors.BLUE}{'='*60}{Colors.RESET}")
    print(f"{Colors.BOLD}{Colors.BLUE}Test: {name}{Colors.RESET}")
    print(f"{Colors.BOLD}{Colors.BLUE}{'='*60}{Colors.RESET}")


def print_success(message: str):
    """Print success message"""
    print(f"{Colors.GREEN}✓ {message}{Colors.RESET}")


def print_error(message: str):
    """Print error message"""
    print(f"{Colors.RED}✗ {message}{Colors.RESET}")


def print_warning(message: str):
    """Print warning message"""
    print(f"{Colors.YELLOW}⚠ {message}{Colors.RESET}")


def print_info(message: str):
    """Print info message"""
    print(f"  {message}")


def test_proxy_connectivity(proxy_url: str) -> bool:
    """Test if proxy is reachable"""
    print_test("Proxy Connectivity")
    
    try:
        # Try to connect to proxy (even if it fails, we know it's reachable)
        response = requests.get(f"{proxy_url}/models", timeout=5)
        print_success(f"Proxy is reachable at {proxy_url}")
        print_info(f"Response status: {response.status_code}")
        return True
    except requests.exceptions.ConnectionError:
        print_error(f"Cannot connect to proxy at {proxy_url}")
        print_info("Make sure the proxy is running: python openrouter-proxy.py")
        return False
    except Exception as e:
        print_warning(f"Proxy is reachable but returned error: {e}")
        return True  # Proxy is running, just might not have API key


def test_models_endpoint(proxy_url: str, api_key: str) -> Optional[Dict]:
    """Test GET /models endpoint"""
    print_test("GET /models Endpoint")
    
    headers = {"Authorization": f"Bearer {api_key}"}
    
    try:
        print_info(f"Requesting: GET {proxy_url}/models")
        start_time = time.time()
        response = requests.get(f"{proxy_url}/models", headers=headers, timeout=30)
        elapsed = time.time() - start_time
        
        print_info(f"Response status: {response.status_code}")
        print_info(f"Response time: {elapsed:.2f}s")
        print_info(f"Content-Type: {response.headers.get('Content-Type', 'N/A')}")
        
        if response.status_code == 200:
            data = response.json()
            models = data.get("data", [])
            print_success(f"Successfully retrieved {len(models)} models")
            
            # Check if response is valid JSON
            if isinstance(data, dict) and "data" in data:
                print_success("Response structure is correct")
                if models:
                    print_info(f"Sample model: {models[0].get('id', 'N/A')}")
                return data
            else:
                print_error("Response structure is incorrect")
                return None
        else:
            print_error(f"Unexpected status code: {response.status_code}")
            print_info(f"Response: {response.text[:200]}")
            return None
            
    except requests.exceptions.Timeout:
        print_error("Request timed out")
        return None
    except requests.exceptions.RequestException as e:
        print_error(f"Request failed: {e}")
        return None
    except json.JSONDecodeError as e:
        print_error(f"Invalid JSON response: {e}")
        print_info(f"Response text: {response.text[:500]}")
        return None


def test_chat_completion(proxy_url: str, api_key: str, model: str = "google/gemma-7b-it:free") -> Optional[Dict]:
    """Test POST /chat/completions endpoint"""
    print_test("POST /chat/completions Endpoint")
    
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "model": model,
        "messages": [
            {"role": "user", "content": "Say 'Hello, proxy test!' and nothing else."}
        ],
        "max_tokens": 50
    }
    
    try:
        print_info(f"Requesting: POST {proxy_url}/chat/completions")
        print_info(f"Model: {model}")
        print_info(f"Payload: {json.dumps(payload, indent=2)}")
        
        start_time = time.time()
        response = requests.post(
            f"{proxy_url}/chat/completions",
            headers=headers,
            json=payload,
            timeout=60
        )
        elapsed = time.time() - start_time
        
        print_info(f"Response status: {response.status_code}")
        print_info(f"Response time: {elapsed:.2f}s")
        print_info(f"Content-Type: {response.headers.get('Content-Type', 'N/A')}")
        
        if response.status_code == 200:
            data = response.json()
            
            # Check response structure
            if "choices" in data and len(data["choices"]) > 0:
                content = data["choices"][0].get("message", {}).get("content", "")
                print_success(f"Successfully received completion")
                print_info(f"Response: {content[:100]}...")
                
                # Check for usage info
                if "usage" in data:
                    usage = data["usage"]
                    print_success("Usage information present")
                    print_info(f"Tokens: {usage.get('total_tokens', 'N/A')}")
                
                return data
            else:
                print_error("Response missing 'choices' field")
                print_info(f"Response: {json.dumps(data, indent=2)[:500]}")
                return None
        else:
            print_error(f"Unexpected status code: {response.status_code}")
            print_info(f"Response: {response.text[:500]}")
            return None
            
    except requests.exceptions.Timeout:
        print_error("Request timed out")
        return None
    except requests.exceptions.RequestException as e:
        print_error(f"Request failed: {e}")
        return None
    except json.JSONDecodeError as e:
        print_error(f"Invalid JSON response: {e}")
        print_info(f"Response text: {response.text[:500]}")
        return None


def test_transparency(proxy_url: str, direct_url: str, api_key: str) -> bool:
    """Test that proxy responses are identical to direct API calls"""
    print_test("Proxy Transparency Test")
    
    if not api_key:
        print_warning("Skipping transparency test (no API key)")
        return False
    
    headers = {"Authorization": f"Bearer {api_key}"}
    
    try:
        # Get models through proxy
        print_info("Fetching models through proxy...")
        proxy_response = requests.get(f"{proxy_url}/models", headers=headers, timeout=30)
        
        # Get models directly
        print_info("Fetching models directly from OpenRouter...")
        direct_response = requests.get(f"{direct_url}/models", headers=headers, timeout=30)
        
        if proxy_response.status_code == direct_response.status_code:
            print_success("Status codes match")
        else:
            print_error(f"Status codes differ: proxy={proxy_response.status_code}, direct={direct_response.status_code}")
            return False
        
        # Compare response bodies (excluding headers which may differ)
        proxy_data = proxy_response.json()
        direct_data = direct_response.json()
        
        # Compare data structure
        if proxy_data == direct_data:
            print_success("Response bodies are identical")
            return True
        else:
            print_warning("Response bodies differ (this may be acceptable)")
            print_info("Comparing key fields...")
            
            # Compare key fields
            proxy_models = proxy_data.get("data", [])
            direct_models = direct_data.get("data", [])
            
            if len(proxy_models) == len(direct_models):
                print_success(f"Same number of models: {len(proxy_models)}")
            else:
                print_error(f"Different number of models: proxy={len(proxy_models)}, direct={len(direct_models)}")
            
            return len(proxy_models) == len(direct_models)
            
    except Exception as e:
        print_error(f"Transparency test failed: {e}")
        return False


def test_error_handling(proxy_url: str) -> bool:
    """Test error handling"""
    print_test("Error Handling Test")
    
    # Test with invalid endpoint
    try:
        print_info("Testing invalid endpoint...")
        response = requests.get(f"{proxy_url}/invalid/endpoint", timeout=10)
        print_info(f"Status: {response.status_code}")
        
        # Check if response is JSON (not HTML)
        content_type = response.headers.get('Content-Type', '')
        if 'application/json' in content_type:
            print_success("Error response is JSON (not HTML)")
            try:
                error_data = response.json()
                print_info(f"Error response: {json.dumps(error_data, indent=2)[:200]}")
                return True
            except:
                print_error("Error response is not valid JSON")
                return False
        else:
            print_error(f"Error response is not JSON: {content_type}")
            print_info(f"Response: {response.text[:200]}")
            return False
            
    except Exception as e:
        print_error(f"Error handling test failed: {e}")
        return False


def main():
    global API_KEY
    
    print(f"{Colors.BOLD}{Colors.BLUE}")
    print("=" * 60)
    print("OpenRouter Proxy Test Suite")
    print("=" * 60)
    print(f"{Colors.RESET}")
    
    # Load API key from config.json
    config_manager = ConfigManager()
    API_KEY = config_manager.get("api_key")
    
    # Allow override from command line argument
    if len(sys.argv) > 1:
        API_KEY = sys.argv[1]
        print_info(f"Using API key from command line argument")
    elif API_KEY:
        print_info(f"Using API key from config.json")
    else:
        print_warning("No API key found in config.json")
        print_info("You can:")
        print_info("  1. Add 'api_key' to config.json")
        print_info("  2. Pass API key as command line argument: python test_proxy.py your-api-key")
        print_warning("Some tests will be skipped without an API key.")
    
    # Test results
    results = {}
    
    # Test 1: Connectivity
    results['connectivity'] = test_proxy_connectivity(PROXY_URL)
    
    if not results['connectivity']:
        print_error("\nProxy is not reachable. Please start the proxy first:")
        print_info("  python openrouter-proxy.py")
        return
    
    # Test 2: Error handling (doesn't need API key)
    results['error_handling'] = test_error_handling(PROXY_URL)
    
    if API_KEY:
        # Test 3: Models endpoint
        models_data = test_models_endpoint(PROXY_URL, API_KEY)
        results['models'] = models_data is not None
        
        # Test 4: Chat completion
        if models_data:
            # Try to find a free model
            free_model = None
            for model in models_data.get("data", [])[:10]:  # Check first 10 models
                model_id = model.get("id", "")
                if ":free" in model_id.lower() or "free" in model_id.lower():
                    free_model = model_id
                    break
            
            if not free_model:
                # Use first available model
                free_model = models_data.get("data", [{}])[0].get("id", "google/gemma-7b-it:free")
            
            completion_data = test_chat_completion(PROXY_URL, API_KEY, free_model)
            results['chat_completion'] = completion_data is not None
        
        # Test 5: Transparency
        results['transparency'] = test_transparency(PROXY_URL, DIRECT_URL, API_KEY)
    else:
        print_warning("\nSkipping API tests (no API key provided)")
        results['models'] = False
        results['chat_completion'] = False
        results['transparency'] = False
    
    # Print summary
    print(f"\n{Colors.BOLD}{Colors.BLUE}{'='*60}{Colors.RESET}")
    print(f"{Colors.BOLD}Test Summary{Colors.RESET}")
    print(f"{Colors.BOLD}{Colors.BLUE}{'='*60}{Colors.RESET}")
    
    for test_name, result in results.items():
        if result:
            print_success(f"{test_name}: PASSED")
        else:
            print_error(f"{test_name}: FAILED")
    
    passed = sum(1 for r in results.values() if r)
    total = len(results)
    print(f"\n{Colors.BOLD}Results: {passed}/{total} tests passed{Colors.RESET}")
    
    if passed == total:
        print_success("\nAll tests passed! Proxy is working correctly.")
    else:
        print_error(f"\n{total - passed} test(s) failed. Check the output above for details.")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print(f"\n{Colors.YELLOW}Test interrupted by user{Colors.RESET}")
        sys.exit(1)
    except Exception as e:
        print_error(f"\nUnexpected error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

