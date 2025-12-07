from api_client import OpenRouterClient
from config_manager import ConfigManager
import sys

# Mock config for testing if file doesn't exist or is empty
TEST_API_KEY = "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"

def test_api():
    print("Testing OpenRouter API Connection...")
    client = OpenRouterClient(TEST_API_KEY)
    
    print("1. Fetching Models...")
    models = client.get_available_models()
    if models:
        print(f"SUCCESS: Fetched {len(models)} models.")
        print(f"Sample models: {models[:3]}")
    else:
        print("FAILURE: Could not fetch models.")
        return

    print("\n2. Testing Translation (using google/gemma-7b-it:free if available, else first available)...")
    # Try to find a free or cheap model for testing
    test_model = "google/gemma-7b-it:free"
    if test_model not in models:
        test_model = models[0]
    
    print(f"Using model: {test_model}")
    
    translation = client.translate("Hello world", "Spanish", test_model)
    print(f"Input: Hello world")
    print(f"Output: {translation}")
    
    if "Hola" in translation or "mundo" in translation:
        print("SUCCESS: Translation seems correct.")
    else:
        print("WARNING: Translation might be incorrect or API returned error.")

if __name__ == "__main__":
    test_api()
