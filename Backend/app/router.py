from .schemas import DetectRequest, ChatQueryRequest
from fastapi import APIRouter

from .service import detect as detect_service, chat
router = APIRouter()

@router.post("/api/detect")
async def detect(request: DetectRequest):
    return detect_service(request)
    # return {"message": "Hello, World!"}

@router.post("api/chat")
async def chat(request: ChatQueryRequest):
    answer = chat(request.query)

    return answer

