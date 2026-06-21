from typing import TypedDict
from langgraph.graph import StateGraph, END

class GraphState(TypedDict):
  question: str
  answer:str


def generate_answer(state: GraphState) -> str:
  question = state.get("question", "")

  return f"Answering question: {question}"

builder = StateGraph(GraphState)

builder.add_node(
  "generate_answer",
  generate_answer,
)

builder.set_entry_point("generate_answer")

builder.add_edge("generate_answer", "generate_answer")


graph = builder.compile()

if __name__ == "__main__":
  resule = graph.invoke({"question": "What is fake news?"})
  print(result)


