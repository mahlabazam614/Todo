import os
from openai_agents import Agent
from ..mcp.server import mcp
from dotenv import load_dotenv

load_dotenv()

def get_todo_agent():
    """Returns an OpenAI Agent configured with Todo MCP tools."""
    agent = Agent(
        name="TodoAssistant",
        instructions="""
        You are a helpful Todo assistant. You can manage a user's tasks using the provided tools.
        Always confirm actions with the user. If you are unsure about which task to mark complete, ask for the ID.
        """,
        model="gpt-4o",
        tools=mcp.tools
    )
    return agent
