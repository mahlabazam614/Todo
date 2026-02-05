from src.todo_manager import TodoManager

def test_todo_manager():
    manager = TodoManager()
    
    # Test Add
    t1 = manager.add_task("Test Task", "Desc")
    assert t1.id == 1
    assert t1.title == "Test Task"
    assert len(manager.get_all_tasks()) == 1
    print("✓ Add Task test passed")

    # Test List
    tasks = manager.get_all_tasks()
    assert tasks[0].id == 1
    print("✓ List Tasks test passed")

    # Test Update
    manager.update_task(1, title="New Title")
    assert manager.get_task_by_id(1).title == "New Title"
    print("✓ Update Task test passed")

    # Test Complete
    manager.mark_complete(1)
    assert manager.get_task_by_id(1).is_completed is True
    print("✓ Complete Task test passed")

    # Test Delete
    manager.delete_task(1)
    assert len(manager.get_all_tasks()) == 0
    print("✓ Delete Task test passed")

if __name__ == "__main__":
    test_todo_manager()
    print("\nAll logic tests passed!")
