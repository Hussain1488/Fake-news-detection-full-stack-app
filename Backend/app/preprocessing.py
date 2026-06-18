import pandas as pd
import nltk
# nltk.download('stopwords')
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
import re

class Preprocessing:

  def __init__(self, dataset):
    self.dataset = dataset

  def stop_word_removal(self):

    stop_words = set(stopwords.words('english'))



    self.dataset["text"] = self.dataset["text"].astype(object)
    self.dataset["title"] = self.dataset["title"].astype(object)

    for i, item in self.dataset.iterrows():
      filtered_text = [token.lower() for token in item['text'].split() if token.lower() not in stop_words]
      filtered_title = [token.lower() for token in item['title'].split() if token.lower() not in stop_words]
      self.dataset.at[i, 'text'] = filtered_text
      self.dataset.at[i, 'title'] = filtered_title

    print(self.dataset)

    return self.dataset

  def stemming(self, dataset):
    stemmer = PorterStemmer()
    dataset['text'] = dataset['text'].astype(object)
    dataset['title'] = dataset['title'].astype(object)

    print(dataset)
    dataset['text'] = dataset['text'].apply(lambda tokens: [stemmer.stem(token) for token in tokens])
    dataset['title'] = dataset['title'].apply(lambda tokens: [stemmer.stem(token) for token in tokens])


    return dataset

  def title_one_hot(self, dataset):
    one_hot = pd.get_dummies(dataset['subject'], prefix='subject', dtype=int, drop_first=True)
    dataset = pd.concat([dataset, one_hot], axis=1)
    return dataset

  def main(self):
      dataset = self.stop_word_removal()
      dataset = self.stemming(dataset)

      dataset["title"] = dataset["title"].apply(lambda tokens: " ".join(tokens))
      dataset["text"] = dataset["text"].apply(lambda tokens: " ".join(tokens))

      return dataset


def clean_dates(text):
    if not isinstance(text, str):  # if NaN or float → make it empty
        return ""
    text = re.sub(r'\b\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b', ' ', text)
    text = re.sub(r'\b\d{4}[/-]\d{1,2}[/-]\d{1,2}\b', ' ', text)
    text = re.sub(r'\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2},?\s*\d{2,4}\b',
                  ' ', text, flags=re.IGNORECASE)
    text = re.sub(r'\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{4}\b',
                  ' ', text, flags=re.IGNORECASE)
    text = re.sub(r'\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\b',
                  ' ', text, flags=re.IGNORECASE)
    text = re.sub(r'\b(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*\s*\d{1,2}\b', ' ', text, flags=re.IGNORECASE)
    text = re.sub(r'\b(?:yesterday|today|tomorrow|tonight|morning|evening|afternoon|'
                  r'monday|tuesday|wednesday|thursday|friday|saturday|sunday|'
                  r'last|next|this)\s*(?:day|week|month|year)?\b',
                  ' ', text, flags=re.IGNORECASE)
    text = re.sub(r'\s+', ' ', text).strip()
    return text


def clean_dataset_dates(dataset, text_col='text', title_col='title'):
    dataset[text_col] = dataset[text_col].apply(clean_dates)
    dataset[title_col] = dataset[title_col].apply(clean_dates)
    return dataset


def main(title, content):
    dataset = pd.DataFrame([{"title": title, "text": content}])
    dataset = clean_dataset_dates(dataset)
    preprocessor = Preprocessing(dataset)
    cleaned_dataset = preprocessor.main()
    return cleaned_dataset