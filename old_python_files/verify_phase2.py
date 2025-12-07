from api_client import OpenRouterClient
from config_manager import ConfigManager
import json

cm = ConfigManager()
api_key = cm.get("api_key")

if api_key:
    client = OpenRouterClient(api_key)
    print("Fetching models...")
    models = client.get_available_models()
    
    if models and isinstance(models[0], dict):
        print(f"SUCCESS: Fetched {len(models)} models.")
        print(f"First model: {models[0]['name']} ({models[0]['id']})")
        if "pricing" in models[0]:
            print(f"Pricing found: {models[0]['pricing']}")
        else:
            print("WARNING: Pricing not found in first model.")
    else:
        print("FAILURE: Models not fetched or not in dict format.")
        print(f"Type: {type(models)}")
        if models: print(f"First item type: {type(models[0])}")
else:
    print("No API Key configured.")
