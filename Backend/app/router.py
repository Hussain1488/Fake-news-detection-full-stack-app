from .schemas import DetectRequest, ChatQueryRequest
from fastapi import APIRouter

from .service import detect as detect_service
router = APIRouter()

@router.post("/api/detect")
async def detect(request: DetectRequest):
    return detect_service(request)
    # return {"message": "Hello, World!"}

@router.post("/api/question")
async def user_query(request:  ChatQueryRequest)

