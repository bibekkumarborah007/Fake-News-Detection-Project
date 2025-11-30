from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

TFIDF_PATH = "tfidf.pkl"
MODEL_PATH = "model.pkl"

app = Flask(__name__)
CORS(app)

# load
with open(TFIDF_PATH, "rb") as f:
    tfidf = pickle.load(f)
with open(MODEL_PATH, "rb") as f:
    model = pickle.load(f)

@app.route("/health")
def health():
    return jsonify({"status": "ok"})

@app.route("/predict", methods=["POST"])
def predict():
    j = request.get_json(force=True, silent=True) or {}
    text = (j.get("text") or "").strip()
    if len(text) < 5:
        return jsonify({"error": "text too short"}), 400

    X = tfidf.transform([text])
    pred = model.predict(X)[0]
    # normalize label quickly
    label = "Real" if str(pred).lower().startswith("real") or int(pred) == 0 else "Fake"

    # simple confidence if available
    conf = 1.0
    if hasattr(model, "predict_proba"):
        conf = max(model.predict_proba(X)[0]).item()
    return jsonify({"label": label, "confidence": float(conf)})

if __name__ == "__main__":
    # For production / Render, bind to 0.0.0.0
    app.run(host="0.0.0.0", port=5000, debug=True)
    

