import os
from openai import OpenAI
import requests

class OpenRouterClient:
    def __init__(self, api_key):
        self.api_key = api_key
        self.client = OpenAI(
            base_url="https://openrouter.ai/api/v1",
            api_key=api_key,
        )

    def get_available_models(self):
        """Fetches the list of available models from OpenRouter."""
        try:
            response = requests.get(
                "https://openrouter.ai/api/v1/models",
                headers={"Authorization": f"Bearer {self.api_key}"}
            )
            response.raise_for_status()
            data = response.json()
            # Return the full list of model objects
            return data["data"]
        except Exception as e:
            print(f"Error fetching models: {e}")
            return []

    def chat_completion(self, model, messages):
        """Sends a chat completion request to the LLM."""
        try:
            completion = self.client.chat.completions.create(
                model=model,
                messages=messages
            )
            content = completion.choices[0].message.content
            # usage might be None for some providers/models
            usage = completion.usage
            usage_data = {
                "prompt_tokens": usage.prompt_tokens if usage else 0,
                "completion_tokens": usage.completion_tokens if usage else 0,
                "total_tokens": usage.total_tokens if usage else 0
            }
            return {
                "content": content,
                "usage": usage_data
            }
        except Exception as e:
            return {"error": str(e)}

    def translate(self, text, target_lang, model, source_lang="Detect Language"):
        """Translates text to the target language."""
        if source_lang and source_lang != "Detect Language":
            prompt = f"You are a professional translator. Translate the following text from {source_lang} into {target_lang}. Only provide the translation, no introductory or concluding remarks."
        else:
            prompt = f"You are a professional translator. Translate the following text into {target_lang}. Only provide the translation, no introductory or concluding remarks."

        messages = [
            {"role": "system", "content": prompt},
            {"role": "user", "content": text}
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
            "Make Technical": "Rewrite the following text using more technical terminology appropriate for the context."
        }
        
        prompt = style_prompts.get(style, "Rewrite the following text.")
        messages = [
            {"role": "system", "content": f"{prompt} Only provide the rewritten text, no introductory or concluding remarks."},
            {"role": "user", "content": text}
        ]
        return self.chat_completion(model, messages)
