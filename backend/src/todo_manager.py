from typing import List, Optional
from .models import Task

class TodoManager:
    def __init__(self):
        self.tasks: List[Task] = []
        self._next_id = 1

    def add_task(self, title: str, description: Optional[str] = "") -> Task:
        task = Task(id=self._next_id, title=title, description=description)
        self.tasks.append(task)
        self._next_id += 1
        return task

    def get_all_tasks(self) -> List[Task]:
        return self.tasks

    def get_task_by_id(self, task_id: int) -> Optional[Task]:
        for task in self.tasks:
            if task.id == task_id:
                return task
        return None

    def mark_complete(self, task_id: int) -> bool:
        task = self.get_task_by_id(task_id)
        if task:
            task.is_completed = True
            return True
        return False

    def update_task(self, task_id: int, title: Optional[str] = None, description: Optional[str] = None) -> bool:
        task = self.get_task_by_id(task_id)
        if task:
            if title is not None:
                task.title = title
            if description is not None:
                task.description = description
            return True
        return False

    def delete_task(self, task_id: int) -> bool:
        task = self.get_task_by_id(task_id)
        if task:
            self.tasks.remove(task)
            return True
        return False
