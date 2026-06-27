from app.rag.retriever import Retriever



retriever = Retriever(k=3)

def test_retriever():
  query = "what are the impacts of fake news on society?"

  results = retriever.retrieve(query)

  assert results is not None, "Retriever should return results"

  assert isinstance(results, list), "Results should be a list"

  assert len(results) <= 3, "Shoult return at most k = 3 results"

  if len(results) > 0:
    assert hasattr(results[0], 'page_content'), "Retriver should return page content"
    print(f"Found {len(results)} relevent documents")
    print(f' First result: {results[0].page_content[:100]}...')

def test_retriever_empty_query():
  
  results = retriever.retrieve("")

  assert results is not None

if __name__ == '__main__':
  test_retriever()
  test_retriever_empty_query()

  print("All set")