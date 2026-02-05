# Implementation Plan: Phase III - AI Todo Chatbot

**Branch**: `phase3-ai-chatbot` | **Date**: 2026-02-05 | **Spec**: [specs/phase3-chatbot/spec.md](file:///c:/Users/mahla/Desktop/hackathon%20giaic/specs/phase3-chatbot/spec.md)
**Input**: Feature specification from `/specs/phase3-chatbot/spec.md`

## Summary
Implement a conversational interface for managing todos. The core intelligence will be powered by the OpenAI Agents SDK, which will use an MCP Server as its interface to the task database.

## Technical Context
**Language/Version**: Python 3.13+ (Backend), TypeScript / Next.js (Frontend)  
**Primary Dependencies**: 
- Backend: `openai-agents`, `mcp-sdk-python`, `sqlmodel`, `fastapi`
- Frontend: `openai-chatkit`, `next`
**AI Framework**: OpenAI Agents SDK
**Protocol**: Model Context Protocol (MCP)

## Project Structure

```text
backend/
├── src/
│   ├── chat/
│   │   ├── agent.py         # OpenAI Agent setup
│   │   └── router.py        # /api/chat endpoint
│   ├── mcp/
│   │   ├── server.py        # MCP Server with task tools
│   │   └── registry.py      # Tool definitions
│   └── ...
```

## MCP Tools (Task Ops)
1. `add_task(title, description)`
2. `list_tasks(status)`
3. `complete_task(task_id)`
4. `delete_task(task_id)`
5. `update_task(task_id, title, description)`

## Stateless Chat Flow
1. Client sends message + `conversation_id`.
2. Backend retrieves history for `conversation_id` from DB.
3. Backend initializes Agent with history and MCP Tools.
4. Agent runs, possibly calling tools.
5. Tool outputs are used by the Agent to formulate a reply.
6. Backend stores the User message and Assistant response in the DB.
7. Backend returns the reply to the Client.
