from fastapi import FastAPI
from pydantic import BaseModel
import logging

app = FastAPI(title="Todo Analytics Service")
logger = logging.getLogger("uvicorn")

class CloudEvent(BaseModel):
    data: dict
    id: str
    source: str
    type: str

@app.post("/events/task-created")
async def handle_task_created(event: CloudEvent):
    task_title = event.data.get("title")
    logger.info(f"📊 ANALYTICS: New task created - '{task_title}'")
    return {"status": "event processed"}

@app.get("/health")
def health():
    return {"status": "healthy"}
