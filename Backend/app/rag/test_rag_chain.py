from langchain_huggingface import HuggingFaceEmbeddings
from langchain_chroma import Chroma
from dotenv import load_dotenv
import os
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate

load_dotenv()

embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

vector_store = Chroma(
  embedding_function=embeddings,
  persist_directory="app/resources/chroma_db",
  collection_name="fake_news_collection",

)

retriever = vector_store.as_retriever(
  search_kwargs={"k": 2}
)

llm = ChatGoogleGenerativeAI(
  model="gemini-2.5-flash",
  temperature=0,
)

prompt = ChatPromptTemplate.from_template("""
You are a helpful assistant for a fake news detection project.

Answer the user's question using ONLY the context below.
If the context is not enough, say:
"I don't have enough information in the provided sources."

Context:
{context}

Question:
{question}

Answer:
""")

def ask_rag(question: str) -> str:
  
  docs = retriever.invoke(question)
  print("Retrieved documents:", docs)
  context = "\n\n".join([doc.page_content for doc in docs])

  message = prompt.format_messages(context=context, question=question)

  response = llm.invoke(message)


  return response


if __name__ == "__main__":
    answer = ask_rag("tell me about fake news detection?")
    print(answer)