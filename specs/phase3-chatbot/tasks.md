# Tasks: Phase III - AI Todo Chatbot

**Input**: Design documents from `/specs/phase3-chatbot/`
**Prerequisites**: Phase II implementation (Database & Core Logic)

## Phase 1: Setup
- [ ] T001 Install `openai-agents` and `mcp-sdk-python` in `backend/`
- [ ] T002 Configure OpenAI API Key in `.env`
- [ ] T003 Setup database migrations for `Conversation` and `Message` models

---

## Phase 2: MCP Server (Tools)
- [ ] T004 Implement MCP Server in `backend/src/mcp/server.py`
- [ ] T005 Expose `add_task` as an MCP tool
- [ ] T006 Expose `list_tasks` as an MCP tool
- [ ] T007 Expose `update_task` / `delete_task` / `complete_task` as tools
- [ ] T008 [P] Test MCP tools independently

---

## Phase 3: AI Agent logic
- [ ] T009 Implement OpenAI Agent setup in `backend/src/chat/agent.py`
- [ ] T010 Bind MCP tools to the OpenAI Agent
- [ ] T011 Create stateless `/api/chat` endpoint in `backend/src/routes/chat.py`
- [ ] T012 Implement conversation history loading and saving in chat endpoint

---

## Phase 4: Frontend UI (ChatKit)
- [ ] T013 Setup OpenAI ChatKit in `frontend/`
- [ ] T014 Create Chat interace component at `frontend/app/chat/page.tsx`
- [ ] T015 Integrate ChatKit with backend `/api/chat`

---

## Phase 5: Polish & AI Personality
- [ ] T016 Refine system prompt for friendly "Todo Assistant" persona
- [ ] T017 Handle AI error cases (e.g. task not found) gracefully
- [ ] T018 Verify multi-turn conversations persist context
