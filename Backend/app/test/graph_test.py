from app.rag.graph import run_graph

def test_graph():

  result = run_graph("tell me about fake news impacts please")

  assert result is not None, "should return llm generated answer!"
  assert type(result) == str, "Generated response must be str"

  print(f'Result: {result}')

# graph_test()