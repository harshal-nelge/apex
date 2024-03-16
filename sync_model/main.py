from flask import Flask, request, jsonify
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
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

    sorted_similarities = sorted(similarities, reverse=True)
    second_highest_score = sorted_similarities[0] if len(sorted_similarities) > 0 else 0

    if second_highest_score == 0:
        return "No similar project description found.", 0
    
    second_highest_index = similarities.tolist().index(second_highest_score)
    second_most_similar_string = database_string[second_highest_index]

    similarity_percentage = round(second_highest_score * 100, 2)

    return second_most_similar_string, similarity_percentage

@app.route("/nlp-model", methods=["POST"])
def run_nlp_model():
    data = request.json
    new_string = data.get("new_string", "")
    database_string = data.get("database_string", [])

    if not isinstance(new_string, str) or not isinstance(database_string, list):
        return jsonify({"error": "Invalid input data format."}), 400

    if len(database_string) == 0:
        return jsonify({"error": "Empty database string."}), 400

    most_similar_string, similarity_percentage = similar_description(new_string, database_string)

    return jsonify({"similar_project_description": most_similar_string, "similarity_percentage": similarity_percentage})

if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=4000)
