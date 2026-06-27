from typing import TypedDict
from langchain_core.documents import Document
from langchain_google_genai import ChatGoogleGenerativeAI
from langgraph.graph import StateGraph, END
from .retriever import Retriever
from dotenv import load_dotenv

load_dotenv()


retriever_instance = None
llm = None



class InitialState(TypedDict):
    question: str
    document: list[Document]
    loop_limit: int
    answer: str


def get_retriever():
    global retriever_instance
    if retriever_instance is None:
        try:

            retriever_instance = Retriever(k=3)
        except Exception:
            retriever_instance = None
    return retriever_instance
    
def get_llm():
    global llm
    if llm is None:
        try:
            llm = ChatGoogleGenerativeAI(
                model="gemini-2.5-flash",
                temperature=0,
            )
        except Exception as exc:
            raise RuntimeError(
                "Unable to initialize ChatGoogleGenerativeAI. "
                "Check your Google GenAI credentials and environment."
            ) from exc
    return llm
    



def document_retriever(State: InitialState) -> list[Document]:
    question = State["question"]
    retriever = get_retriever()

    documents = retriever.retrieve(question)

    return documents


def generate_answer(State: InitialState) -> str:
    question = State["question"]
    documents = State["document"]

    doc_context = "\n".join(doc.page_content for doc in documents)

    prompt = f"""
    Answer the following question based on the provided Documents: {doc_context}, Question: {question} 
"""
    llm = get_llm()
    answer = llm.invoke(prompt)

    return {"answer": answer}



workflow = StateGraph(InitialState)

workflow.add_node("retriever", document_retriever)
workflow.add_node("generate", generate_answer)

workflow.set_entry_point("retriever")

workflow.add_edge("retriever", "generate")
workflow.add_edge("generate", END)

graph = workflow.compile()

def run_graph(question: str) -> str:
    result = graph.invoke({"question": question})

    print(f"resutl: {result['answer'].content}")
    return result['answer'].content

