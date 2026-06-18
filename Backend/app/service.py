from .preprocessing import main as preprocessing_main
from .predictor import Predictor
from .schemas import DetectRequest


def detect(request: DetectRequest):
    cleaned_dataset = preprocessing_main(
        request.title,
        request.content
    )

    predictor = Predictor()

    result = predictor.predict(
        title=cleaned_dataset["title"].iloc[0],
        content=cleaned_dataset["text"].iloc[0],
    )

    return {
        "prediction": result
    }