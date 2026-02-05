from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from ..chat.agent import get_todo_agent
from ..auth import verify_token

router = APIRouter(prefix="/chat", tags=["chat"])

class ChatRequest(BaseModel):
    message: str

@router.post("/")
async def chat_with_assistant(
    request: ChatRequest,
    user_id: str = Depends(verify_token)
):
    agent = get_todo_agent()
    # In a real app, we'd pass history here
    # For now, we simulate the agent run with user context
    response = await agent.run(request.message, context={"user_id": user_id})
    return {"reply": response.content}
