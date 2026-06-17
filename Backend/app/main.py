from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pydantic import BaseModel
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_URL")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class DetectRequest(BaseModel):
    title: str
    content: str
    reasoning: bool

@app.post("/api/detect")
async def detect(request: DetectRequest):
    
    return {
        "title": request.title + " test", 
        "content": request.content + " test", 
        "reasoning": request.reasoning
        }

