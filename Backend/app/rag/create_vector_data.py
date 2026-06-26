from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import PyPDFLoader

data = PyPDFLoader("app/resources/Thesis.pdf").load()

splitter = RecursiveCharacterTextSplitter(chunk_size = 800, chunk_overlap = 200)

splits = splitter.split_documents(data)

embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

vectorstore = Chroma.from_documents(splits, embeddings, persist_directory="app/resources/vectorstore", collection_name="thesis")