from api_client import OpenRouterClient
from config_manager import ConfigManager
import time

# Mock config manager
cm = ConfigManager()
api_key = cm.get("api_key")

if api_key:
    client = OpenRouterClient(api_key)
    print("Testing Translation with Usage Stats...")
    
    start = time.time()
    # Use a cheap/free model for testing
    model = "google/gemma-7b-it:free" 
    
    # We need to make sure this model is in cached_models to test pricing lookup
    # But for this script we can just fetch it or assume it's there.
    # Let's fetch models first to populate cache if needed
    models = client.get_available_models()
    cm.set("cached_models", models)
    
    try:
        response = client.translate("Hello world", "Spanish", model)
        end = time.time()
        duration = end - start
        
        if isinstance(response, dict):
            print("SUCCESS: Response is a dict.")
            if "error" in response:
                print(f"API Error: {response['error']}")
            elif "content" in response:
                content = response["content"]
                usage = response["usage"]
                print(f"Content: {content}")
                print(f"Usage: {usage}")
                
                # Calculate Cost Logic Verification
                prompt_tokens = usage.get("prompt_tokens", 0)
                completion_tokens = usage.get("completion_tokens", 0)
                
                cost = 0.0
                # Find model pricing
                model_data = next((m for m in models if m.get("id") == model), None)
                if model_data and "pricing" in model_data:
                    p = model_data["pricing"]
                    p_rate = float(p.get("prompt", 0))
                    c_rate = float(p.get("completion", 0))
                    cost = (prompt_tokens * p_rate) + (completion_tokens * c_rate)
                    print(f"Calculated Cost: ${cost:.8f}")
                else:
                    print("WARNING: Model pricing not found.")
                    
                tps = completion_tokens / duration
                print(f"TPS: {tps:.2f}")
            else:
                print(f"Unknown response format: {response}")
            
        else:
            print("FAILURE: Response is not a dict.")
            print(response)
            
    except Exception as e:
        print(f"Error: {e}")
else:
    print("No API Key configured.")
