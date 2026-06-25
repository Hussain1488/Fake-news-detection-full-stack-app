from typing import TypedDict
from langgraph_code.document import Document
from langchain_google_genai import ChatGoogleGenerativeAI

retriever = Chroma(
    embedding_function,
    persist_directory="app/resources/chroma_db",
    
)

llm = ChatGoogleGenerativeAI(
  model="gemini-2.5-flash",
  temperature=0,
)

class InicialState(TypedDict):
    question: str
    document: list[Document]
    loop_limit: int
    answer: str



def document_retriever(State: InicialState) -> list[Document]:
    question = State["question"]

    documents = retriever.invoke(question)

    return documents


def generate_answer(State: InicialState) -> str:
    question = State["question"]
    documents = State["document"]

    answer = llm.invoke(question, documents)

    return answer