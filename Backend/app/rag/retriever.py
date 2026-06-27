from langchain_huggingface import HuggingFaceEmbeddings
from langchain_chroma import Chroma


class Retriever:
  def __init__(self, k: int = 3):
    self.embedding = HuggingFaceEmbeddings(
      model_name="sentence-transformers/all-MiniLM-L6-v2"
    )

    self.vector_store = Chroma(
      collection_name="thesis",
      embedding_function=self.embedding,
      persist_directory="app/resources/vectorstore"
    )

    self.retriever = self.vector_store.as_retriever(
      search_kwargs={"k": k}
    )

  def retrieve(self, query: str) -> dict:
    documents = self.retriever.invoke(query)

    return {
      "document": documents
    }


