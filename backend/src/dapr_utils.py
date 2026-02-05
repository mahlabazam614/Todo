import requests
import os

DAPR_URL = os.getenv("DAPR_URL", "http://localhost:3500/v1.0")

def publish_event(topic: str, data: dict):
    """Publishes an event via Dapr PubSub."""
    try:
        url = f"{DAPR_URL}/publish/task-pubsub/{topic}"
        requests.post(url, json=data, timeout=2)
    except Exception as e:
        print(f"Failed to publish event: {e}")
