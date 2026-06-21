from langchain_text_splitters import RecursiveCharacterTextSplitter  
from .load_files import load_files_from_dir

text = load_files_from_dir()

splitter = RecursiveCharacterTextSplitter(
    chunk_size=30,
    chunk_overlap=6,
)

chunks = splitter.split_text(text)

for i,chunk in enumerate(chunks):
    print(f"Chunk {i+1}:\n{chunk}\n")