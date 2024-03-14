from flask import Flask, request, jsonify
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer
import spacy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


nlp = spacy.load("en_core_web_sm")

def keywords(text):
    doc = nlp(text)
    return " ".join([token.lemma_ for token in doc if not token.is_stop and not token.is_punct and not token.is_space and not token.text.lower() in nlp.Defaults.stop_words])

def similar_description(new_string, database_string):
    new_prostring = keywords(new_string)
    database_prostring = [keywords(text) for text in database_string]

    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform([new_prostring] + database_prostring)

    similarities = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:]).flatten()

    most_similar_index = similarities.argmax()
    most_similar_string = database_string[most_similar_index]

    return most_similar_string

@app.route("/nlp-model", methods=["POST"])
def run_nlp_model():
    data = request.json
    new_string = data["new_string"]

    database_string = ("Efficient underground pipelining and ground digging services utilizing advanced trenchless methods. Our team employs techniques such as horizontal directional drilling to install pipelines with precision and minimal surface disruption",
                       "footpath enhancement services, including fencing installation and coloring for improved aesthetics and safety. Our skilled team utilizes advanced techniques, including ground excavation when necessary, to install durable fencing and apply vibrant coloring with precision and minimal disruption",
                       "Expert electrical installation services for bridges, ensuring safe and reliable power supply. Our skilled team utilizes advanced techniques and high-quality materials to implement electrical infrastructure with precision and durability",
                       "erosion control and slope stabilization services for construction sites and landscapes. Using erosion control methods such as retaining walls and vegetation, our team mitigates soil erosion and preserves natural landscapes.")

    most_similar_string = similar_description(new_string, database_string)

    return jsonify({"similar_project_description": most_similar_string})

if __name__ == "__main__":
    app.run(debug=True)
