from langchain_core.documents import Document
from langchain_chroma import Chroma
from langchain_text_splitters import RecursiveCharacterTextSplitter
# from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_huggingface import HuggingFaceEmbeddings
# LangChain and Hugging Face now maintain a separate package for this integration.

with open("app/resources/fake_news_basics.txt", "r", encoding="utf-8") as text_file:
    text = text_file.read()

documents = Document(page_content=text, metadata={"source": "fake_news_basics.txt"})

splitter = RecursiveCharacterTextSplitter(
    chunk_size=50,
    chunk_overlap=10,
)

chunks = splitter.split_documents([documents])

embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

vector_store = Chroma.from_documents(
    documents=chunks,
    embedding=embeddings,
    collection_name="fake_news_collection",
    persist_directory="app/resources/chroma_db"
)

print("chunks stored in vector store:", len(chunks))