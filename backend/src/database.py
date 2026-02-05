import os
from dotenv import load_dotenv
from sqlmodel import create_engine, Session, SQLModel

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    # Fallback to sqlite for development if Neon URL not provided
    DATABASE_URL = "sqlite:///./todo.db"

engine = create_engine(DATABASE_URL, echo=True)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session
