import os

import requests
from openai import OpenAI


class OpenRouterClient:
    def __init__(self, api_key):
        self.api_key = api_key
        # Tailscale Funnel URL (HTTPS - Tailscale handles SSL termination)
        # self.base_url = "https://oc-micro.tail92c7a.ts.net/api/v1"
        # For local testing without Tailscale, use: "http://localhost:9000/api/v1"
        self.base_url = "http://localhost:9000/api/v1"
        # Direct OpenRouter: "https://openrouter.ai/api/v1"
        self.client = OpenAI(
            base_url=self.base_url,
            api_key=api_key,
        )

    def get_available_models(self):
        """Fetches the list of available models from OpenRouter."""
        try:
            response = requests.get(
                f"{self.base_url}/models",
                headers={"Authorization": f"Bearer {self.api_key}"},
            )
            response.raise_for_status()
            data = response.json()
            # Return the full list of model objects
            return data["data"]
        except Exception as e:
            # Silently return empty list on error
            return []

    def chat_completion(self, model, messages):
        """Sends a chat completion request to the LLM."""
        try:
            completion = self.client.chat.completions.create(
                model=model, messages=messages
            )
            
            # Check if completion is actually a completion object
            if isinstance(completion, str):
                # If it's HTML, provide a more helpful error message
                if completion.strip().startswith('<!DOCTYPE') or completion.strip().startswith('<html'):
                    return {"error": f"Proxy returned HTML instead of JSON. This usually means:\n1. The proxy server is not running\n2. Tailscale Funnel is showing an error page\n3. The proxy URL is incorrect\n\nPlease check that the proxy at '{self.base_url}' is running and accessible."}
                return {"error": f"API returned string instead of completion object: {completion[:200]}..."}
            
            if not hasattr(completion, 'choices'):
                return {"error": f"Completion object missing 'choices' attribute. Type: {type(completion)}, Value: {str(completion)[:200]}..."}
            
            if not completion.choices or len(completion.choices) == 0:
                return {"error": "Completion object has no choices"}
            
            content = completion.choices[0].message.content
            # usage might be None for some providers/models
            usage = completion.usage
            usage_data = {
                "prompt_tokens": usage.prompt_tokens if usage else 0,
                "completion_tokens": usage.completion_tokens if usage else 0,
                "total_tokens": usage.total_tokens if usage else 0,
            }
            return {"content": content, "usage": usage_data}
        except Exception as e:
            error_msg = str(e)
            error_type = type(e).__name__
            
            # Check if error has response/body attributes that might contain HTML
            error_body = None
            if hasattr(e, 'body'):
                error_body = str(e.body) if e.body else None
            elif hasattr(e, 'response'):
                resp = e.response
                if hasattr(resp, 'text'):
                    error_body = resp.text
                elif hasattr(resp, 'content'):
                    error_body = str(resp.content)
            
            # Check if error body contains HTML
            if error_body and ('<!DOCTYPE' in error_body or '<html' in error_body):
                return {"error": f"Proxy returned HTML instead of JSON. This usually means:\n1. The proxy server is not running\n2. Tailscale Funnel is showing an error page\n3. The proxy URL is incorrect\n\nPlease check that the proxy at '{self.base_url}' is running and accessible."}
            
            # Check if the error message itself contains HTML
            if '<!DOCTYPE' in error_msg or '<html' in error_msg:
                return {"error": f"Proxy returned HTML instead of JSON. This usually means:\n1. The proxy server is not running\n2. Tailscale Funnel is showing an error page\n3. The proxy URL is incorrect\n\nPlease check that the proxy at '{self.base_url}' is running and accessible."}
            
            # Provide more context for connection errors
            if 'connection' in error_type.lower() or 'connect' in error_msg.lower():
                return {"error": f"Connection Error ({error_type}): Could not connect to proxy at '{self.base_url}'. Please verify the proxy is running and accessible. Error: {error_msg}"}
            
            return {"error": f"{error_type}: {error_msg}"}

    def translate(self, text, target_lang, model, source_lang="Detect Language"):
        """Translates text to the target language."""
        if source_lang and source_lang != "Detect Language":
            prompt = f"You are a professional translator. Translate the following text from {source_lang} into {target_lang}. Only provide the translation, no introductory or concluding remarks."
        else:
            prompt = f"You are a professional translator. Translate the following text into {target_lang}. Only provide the translation, no introductory or concluding remarks."

        messages = [
            {"role": "system", "content": prompt},
            {"role": "user", "content": text},
        ]
        return self.chat_completion(model, messages)

    def rewrite(self, text, style, model):
        """Rewrites text in the specified style."""
        style_prompts = {
            "Check Spelling & Grammar": "Correct the spelling and grammar of the following text. Maintain the original meaning.",
            "Improve Clarity": "Rewrite the following text to improve its clarity and flow.",
            "Make Formal": "Rewrite the following text to make it more formal and professional.",
            "Make Informal": "Rewrite the following text to make it more casual and informal.",
            "Shorten": "Condense the following text, keeping only the essential information.",
            "Expand": "Expand on the following text, adding more detail and context.",
            "Make Technical": "Rewrite the following text using more technical terminology appropriate for the context.",
        }

        prompt = style_prompts.get(style, "Rewrite the following text.")
        messages = [
            {
                "role": "system",
                "content": f"{prompt} Only provide the rewritten text, no introductory or concluding remarks.",
            },
            {"role": "user", "content": text},
        ]
        return self.chat_completion(model, messages)
