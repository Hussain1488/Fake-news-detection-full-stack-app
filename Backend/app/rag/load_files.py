
def load_files_from_dir() -> str:
  file = "app/resources/fake_news_basics.txt"

  with open(file, "r", encoding="utf-8") as f:
    return f.read()
  
if __name__ == "__main__":
  print(load_files_from_dir())  