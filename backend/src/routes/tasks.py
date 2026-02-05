from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session, select
from typing import List, Optional
from ..models import Task, User
from ..database import get_session
from ..auth import verify_token

router = APIRouter(prefix="/tasks", tags=["tasks"])

@router.get("/", response_model=List[Task])
def read_tasks(
    session: Session = Depends(get_session),
    user_id: str = Depends(verify_token)
):
    tasks = session.exec(select(Task).where(Task.user_id == user_id)).all()
    return tasks

from ..dapr_utils import publish_event

@router.post("/", response_model=Task)
def create_task(
    task: Task,
    session: Session = Depends(get_session),
    user_id: str = Depends(verify_token)
):
    task.user_id = user_id
    session.add(task)
    session.commit()
    session.refresh(task)
    
    # Phase V: Publish event
    publish_event("task-created", {"id": task.id, "title": task.title, "user_id": user_id})
    
    return task

@router.put("/{task_id}", response_model=Task)
def update_task(
    task_id: int,
    task_update: Task,
    session: Session = Depends(get_session),
    user_id: str = Depends(verify_token)
):
    db_task = session.get(Task, task_id)
    if not db_task or db_task.user_id != user_id:
        raise HTTPException(status_code=404, detail="Task not found")
    
    task_data = task_update.dict(exclude_unset=True)
    for key, value in task_data.items():
        if key != "id" and key != "user_id":
            setattr(db_task, key, value)
    
    session.add(db_task)
    session.commit()
    session.refresh(db_task)
    return db_task

@router.delete("/{task_id}")
def delete_task(
    task_id: int,
    session: Session = Depends(get_session),
    user_id: str = Depends(verify_token)
):
    db_task = session.get(Task, task_id)
    if not db_task or db_task.user_id != user_id:
        raise HTTPException(status_code=404, detail="Task not found")
    
    session.delete(db_task)
    session.commit()
    return {"ok": True}

@router.patch("/{task_id}/complete", response_model=Task)
def toggle_complete(
    task_id: int,
    session: Session = Depends(get_session),
    user_id: str = Depends(verify_token)
):
    db_task = session.get(Task, task_id)
    if not db_task or db_task.user_id != user_id:
        raise HTTPException(status_code=404, detail="Task not found")
    
    db_task.is_completed = not db_task.is_completed
    session.add(db_task)
    session.commit()
    session.refresh(db_task)
    return db_task
