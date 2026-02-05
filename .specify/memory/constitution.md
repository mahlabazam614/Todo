# Evolution of Todo - Hackathon II Constitution

## Core Principles

### I. Spec-Driven Development (SDD)
No code is allowed to be written until the specification is complete and approved. Every implementation step must map back to an explicit requirement in `spec.md` and a task in `tasks.md`.

### II. Intentional Evolution
The project must follow the defined 5-phase progression: CLI -> Full-Stack Web -> AI Chatbot -> Local K8s -> Cloud Native AI. Each phase must be fully verified before moving to the next.

### III. Python Excellence
Phase I utilizes Python 3.13+. We follow PEP 8 and clean code principles. Business logic must be independent of the interface (CLI/Web).

### IV. Agentic Dev Stack
We strictly use the Agentic Dev Stack: Specify → Plan → Tasks → Implement. No manual coding is permitted. Verification must be documented in `walkthrough.md`.

### V. User-Centric Design
Even for a CLI application, the user experience must be prioritized. Commands should be intuitive, and output should be clear and helpful.

## Development Workflow

### SDD Loop
1. **Specify**: Define WHAT in `specs/<phase>/spec.md`.
2. **Plan**: Define HOW in `specs/<phase>/plan.md`.
3. **Tasks**: Break into atomic units in `specs/<phase>/tasks.md`.
4. **Implement**: Execute code from tasks.
5. **Verify**: Test and document in `walkthrough.md`.

## Governance
This constitution is the supreme law of the project. Any deviation from these principles requires a recorded Architectural Decision Record (ADR) and justification.

**Version**: 1.0.0 | **Ratified**: 2026-02-05 | **Last Amended**: 2026-02-05
