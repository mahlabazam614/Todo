from mcp.server.fastmcp import FastMCP
from sqlmodel import Session, select
from ..database import engine
from ..models import Task
from typing import List

mcp = FastMCP("Todo Assistant")

@mcp.tool()
def add_task(user_id: str, title: str, description: str = "") -> str:
    """Add a new task for a specific user."""
    with Session(engine) as session:
        task = Task(user_id=user_id, title=title, description=description)
        session.add(task)
        session.commit()
        session.refresh(task)
        return f"Task '{title}' added with ID {task.id}."

@mcp.tool()
def list_tasks(user_id: str) -> str:
    """List all tasks for a specific user."""
    with Session(engine) as session:
        statement = select(Task).where(Task.user_id == user_id)
        results = session.exec(statement).all()
        if not results:
            return "No tasks found."
        return "\n".join([f"- [{ 'x' if t.is_completed else ' ' }] {t.id}: {t.title}" for t in results])

@mcp.tool()
def complete_task(user_id: str, task_id: int) -> str:
    """Mark a task as completed."""
    with Session(engine) as session:
        task = session.get(Task, task_id)
        if not task or task.user_id != user_id:
            return f"Error: Task {task_id} not found."
        task.is_completed = True
        session.add(task)
        session.commit()
        return f"Task {task_id} marked as complete."
