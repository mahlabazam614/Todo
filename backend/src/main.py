from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import create_db_and_tables
# from .routes import tasks, chat
from .routes import tasks

app = FastAPI(title="Evolution of Todo API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    create_db_and_tables()

app.include_router(tasks.router, prefix="/api")
# app.include_router(chat.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to the Todo API (Phase II)"}
