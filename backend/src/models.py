from datetime import datetime
from typing import Optional
from sqlmodel import Field, SQLModel, Relationship

class User(SQLModel, table=True):
    id: str = Field(primary_key=True)
    email: str = Field(unique=True, index=True)
    name: Optional[str] = None
    tasks: list["Task"] = Relationship(back_populates="user")

class Task(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: str = Field(foreign_key="user.id", index=True)
    title: str = Field(max_length=200)
    description: Optional[str] = None
    is_completed: bool = Field(default=False)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    
    user: User = Relationship(back_populates="tasks")
