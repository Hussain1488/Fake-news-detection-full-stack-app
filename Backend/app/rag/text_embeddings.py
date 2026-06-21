from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

model = SentenceTransformer(
    "sentence-transformers/all-MiniLM-L6-v2"
)

sentence1 = "Fake news detection identifies misinformation."
sentence2 = "Fake news detection finds false information."
sentence3 = "Cats enjoy drinking milk."

emb1 = model.encode(sentence1)
emb2 = model.encode(sentence2)
emb3 = model.encode(sentence3)

print(
    cosine_similarity(
        [emb1],
        [emb2]
    )
)

print(
    cosine_similarity(
        [emb1],
        [emb3]
    )
)