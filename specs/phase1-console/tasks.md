# Tasks: Phase I - Todo CLI Core

**Input**: Design documents from `/specs/phase1-console/`
**Prerequisites**: plan.md, spec.md

## Phase 1: Setup
- [ ] T001 Initialize Python project with `uv init`
- [ ] T002 Configure `pyproject.toml` for dependencies (none required but standard setup)

---

## Phase 2: Foundational
- [ ] T003 Create `src/models.py` with `Task` data class
- [ ] T004 Create `src/todo_manager.py` skeleton

---

## Phase 3: User Story 1 - Add a Task (Priority: P1)
**Goal**: Allow users to add tasks to memory
**Independent Test**: `add "Title"` returns success

- [ ] T005 [US1] Implement `add_task` in `src/todo_manager.py`
- [ ] T006 [US1] Implement `add` command in `src/main.py`

---

## Phase 4: User Story 2 - View Task List (Priority: P1)
**Goal**: Display all tasks
**Independent Test**: `list` shows all added tasks

- [ ] T007 [US2] Implement `get_all_tasks` in `src/todo_manager.py`
- [ ] T008 [US2] Implement `list` command in `src/main.py`

---

## Phase 5: User Story 3 - Mark as Complete (Priority: P2)
**Goal**: Toggle completion status
**Independent Test**: `complete 1` marks task 1 as done

- [ ] T009 [US3] Implement `mark_complete` in `src/todo_manager.py`
- [ ] T010 [US3] Implement `complete` command in `src/main.py`

---

## Phase 6: User Story 4 - Update Task (Priority: P2)
**Goal**: Modify existing tasks
**Independent Test**: `update 1 --title "New"` changes title

- [ ] T011 [US4] Implement `update_task` in `src/todo_manager.py`
- [ ] T012 [US4] Implement `update` command in `src/main.py`

---

## Phase 7: User Story 5 - Delete Task (Priority: P2)
**Goal**: Remove tasks
**Independent Test**: `delete 1` removes task 1

- [ ] T013 [US5] Implement `delete_task` in `src/todo_manager.py`
- [ ] T014 [US5] Implement `delete` command in `src/main.py`

---

## Phase 8: Polish & Cleanup
- [ ] T015 Add help messages to CLI commands
- [ ] T016 Ensure proper error handling for missing IDs
- [ ] T017 Final manual verification walkthrough
