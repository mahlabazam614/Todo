# Todo Evolution - Phase I (CLI)

This is Phase I of the "Evolution of Todo" Hackathon project. It is a command-line interface application built with Python.

## Features
- Interactive CLI loop
- In-memory task storage
- Full CRUD operations (Add, View, Update, Delete)
- Completion status tracking

## Requirements
- Python 3.13+
- `uv` (optional, for environment management)

## Setup & Usage

### Using uv (Recommended)
1. Install `uv` if you haven't already.
2. Run the application:
   ```bash
   uv run python -m src.main
   ```

### Using standard Python
1. Ensure you have Python 3.13+ installed.
2. Run the application:
   ```bash
   python -m src.main
   ```

## Development
- **Core Logic**: `src/todo_manager.py`
- **CLI Interface**: `src/main.py`
- **Tests**: `uv run test_logic.py`

## SDD Artifacts
- **Constitution**: `.specify/memory/constitution.md`
- **Specifications**: `specs/phase1-console/spec.md`
- **Implementation Plan**: `specs/phase1-console/plan.md`
- **Tasks**: `specs/phase1-console/tasks.md`
