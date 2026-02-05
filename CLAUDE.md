# Todo App - Hackathon II (Claude Code Instructions)

## Project Overview
This is a spec-driven Todo application evolving from a CLI tool to a cloud-native AI chatbot.

## Tech Stack (Phase I)
- Python 3.13+
- `uv` for dependency management

## Key Commands
- Run CLI App: `python -m src.main`
- Run Tests: `uv run test_logic.py`

## SDD Guidelines
1. Always check `specs/` for requirements before implementing.
2. Follow the patterns in `src/todo_manager.py` for business logic.
3. Update `specs/` if user requirements change.

## Project Structure
- `src/`: Core source code
  - `models.py`: Data models
  - `todo_manager.py`: Business logic
  - `main.py`: Interactive CLI loop
- `specs/`: Specifications and plans
- `history/`: Prompt history and ADRs
