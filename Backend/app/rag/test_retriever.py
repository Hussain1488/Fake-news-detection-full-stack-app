from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings


embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

vector_store = Chroma(
    collection_name="fake_news_collection",
    embedding_function=embeddings,
    persist_directory="app/resources/chroma_db"
)

retriever = vector_store.as_retriever(
  search_kwargs={"k": 3}
)


docs = retriever.invoke("What is fake news?")


for i, doc in enumerate(docs):
    print(f"Document {i+1}:\n{doc.page_content}\n")