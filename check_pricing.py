from api_client import OpenRouterClient
from config_manager import ConfigManager
import json

cm = ConfigManager()
api_key = cm.get("api_key")

if api_key:
    client = OpenRouterClient(api_key)
    # We need to access the raw response or modify get_available_models to return full objects
    # Let's just use requests directly here to see the structure
    import requests
    response = requests.get(
        "https://openrouter.ai/api/v1/models",
        headers={"Authorization": f"Bearer {api_key}"}
    )
    if response.status_code == 200:
        data = response.json()["data"]
        if data:
            print(json.dumps(data[0], indent=4))
        else:
            print("No models found.")
    else:
        print(f"Error: {response.status_code}")
else:
    print("No API key found in config.")
