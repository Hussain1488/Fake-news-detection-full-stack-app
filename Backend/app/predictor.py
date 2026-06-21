import json
import joblib
import torch
import torch.nn as nn
from scipy.sparse import hstack


class FakeNewsClassifier(nn.Module):
    def __init__(self, input_dim, hidden1=128, hidden2=128, dropout=0.6):
        super().__init__()
        self.fc1 = nn.Linear(input_dim, hidden1)
        self.drop1 = nn.Dropout(dropout)
        self.fc2 = nn.Linear(hidden1, hidden2)
        self.drop2 = nn.Dropout(dropout)
        self.fc3 = nn.Linear(hidden2, 1)
        self.sigmoid = nn.Sigmoid()

    def forward(self, x):
        x = torch.relu(self.fc1(x))
        x = self.drop1(x)
        x = torch.relu(self.fc2(x))
        x = self.drop2(x)
        return self.sigmoid(self.fc3(x))


class Predictor:
    def __init__(self):
        with open("app/resources/config.json", "r") as f:
            config = json.load(f)

        self.model = FakeNewsClassifier(**config)

        state_dict = torch.load(
            "app/resources/fakenews_model.pth",
            map_location="cpu"
        )

        self.model.load_state_dict(state_dict)
        self.model.eval()

        self.title_tfidf = joblib.load("app/resources/tfidf_title.pkl")
        self.text_tfidf = joblib.load("app/resources/tfidf_text.pkl")

    def tokenize(self, title: str, content: str):
        title_tfidf = self.title_tfidf.transform([title])
        text_tfidf = self.text_tfidf.transform([content])

        return hstack([text_tfidf, title_tfidf])

    def predict(self, title: str, content: str):
        data = self.tokenize(title, content)

        data = torch.tensor(
            data.toarray(),
            dtype=torch.float32
        )

        with torch.no_grad():
            output = self.model(data)

        probability = output.item()
        prediction = 1 if probability >= 0.5 else 0

        return {
            "label": True if prediction == 1 else False,
            "probability": probability
        }