from pydantic import BaseModel

class DetectRequest(BaseModel):
    title: str
    content: str
    reasoning: bool

class ChatQueryRequest(BaseModel):
    query: str
    