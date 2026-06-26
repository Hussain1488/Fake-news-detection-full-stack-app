from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings


def test_retriever():
  embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

  vector_store = Chroma(
      collection_name="thesis",
      embedding_function=embeddings,
      persist_directory="app/resources/vectorstore"
  )

  retriever = vector_store.as_retriever(
    search_kwargs={"k": 3}
  )


  docs = retriever.invoke("who is the author of this thesis?")


  for i, doc in enumerate(docs):
      print(f"Document {i+1}:\n{doc.page_content}\n")

test_retriever()