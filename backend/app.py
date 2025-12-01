# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import pickle
# import os

# TFIDF_PATH = "tfidf.pkl"
# MODEL_PATH = "model.pkl"

# app = Flask(__name__)
# # allow only your Vercel frontend domain (more secure)
# CORS(app, origins="https://fake-news-detection-project-4ypcc1xvc.vercel.app")

# # load model files (must be in same backend folder)
# if not os.path.exists(TFIDF_PATH) or not os.path.exists(MODEL_PATH):
#     app.logger.warning("Model files not found: %s %s", TFIDF_PATH, MODEL_PATH)

# with open(TFIDF_PATH, "rb") as f:
#     tfidf = pickle.load(f)
# with open(MODEL_PATH, "rb") as f:
#     model = pickle.load(f)

# @app.route("/health", methods=["GET"])
# def health():
#     return jsonify({"status": "ok"})

# @app.route("/predict", methods=["POST"])
# def predict():
#     j = request.get_json(force=True, silent=True) or {}
#     text = (j.get("text") or "").strip()
#     if len(text) < 5:
#         return jsonify({"error": "text too short"}), 400

#     X = tfidf.transform([text])
#     pred = model.predict(X)[0]
#     label = "Real" if str(pred).lower().startswith("real") or int(pred) == 0 else "Fake"

#     conf = 1.0
#     if hasattr(model, "predict_proba"):
#         conf = max(model.predict_proba(X)[0]).item()

#     return jsonify({"label": label, "confidence": float(conf)})

# if __name__ == "__main__":
#     # Render expects to bind to 0.0.0.0
#     app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)), debug=False)

from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import os
import argparse

TFIDF_PATH = "tfidf.pkl"
MODEL_PATH = "model.pkl"

app = Flask(__name__)

# For deployment allow only your frontend domain.
# For local testing add localhost (example: "http://localhost:3000").
# During development you can use origins="*" but avoid that in production.
CORS(app, origins=["https://fake-news-detection-project-4ypcc1xvc.vercel.app",
                   "http://localhost:3000",
                   "http://127.0.0.1:3000"])

tfidf = None
model = None

# load model files safely
def load_models():
    global tfidf, model
    if not (os.path.exists(TFIDF_PATH) and os.path.exists(MODEL_PATH)):
        app.logger.warning("Model files not found: %s %s", TFIDF_PATH, MODEL_PATH)
        return False

    try:
        with open(TFIDF_PATH, "rb") as f:
            tfidf = pickle.load(f)
        with open(MODEL_PATH, "rb") as f:
            model = pickle.load(f)
    except Exception as e:
        app.logger.exception("Failed to load model files: %s", e)
        tfidf = None
        model = None
        return False

    return True

@app.route("/health", methods=["GET"])
def health():
    ok = (tfidf is not None and model is not None)
    return jsonify({"status": "ok" if ok else "model_missing"})

@app.route("/predict", methods=["POST"])
def predict():
    if tfidf is None or model is None:
        return jsonify({"error": "model not loaded"}), 500

    j = request.get_json(force=True, silent=True) or {}
    text = (j.get("text") or "").strip()
    if len(text) < 5:
        return jsonify({"error": "text too short"}), 400

    try:
        X = tfidf.transform([text])
        pred = model.predict(X)[0]
        # robust label detection (handles numeric or string labels)
        try:
            pred_int = int(pred)
        except Exception:
            pred_int = None

        label = None
        if isinstance(pred, str):
            label = "Real" if pred.lower().startswith("real") or pred.lower().startswith("0") else "Fake"
        elif pred_int is not None:
            label = "Real" if pred_int == 0 else "Fake"
        else:
            label = str(pred)

        conf = 1.0
        if hasattr(model, "predict_proba"):
            conf = max(model.predict_proba(X)[0]).item()

        return jsonify({"label": label, "confidence": float(conf)})
    except Exception as e:
        app.logger.exception("Prediction failed: %s", e)
        return jsonify({"error": "prediction_failed", "detail": str(e)}), 500

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--host", required=True)
    parser.add_argument("--port", required=True)
    args = parser.parse_args()

    # load models before running the app
    load_models()

    app.run(
        host=args.host,
        port=int(args.port),
        debug=False
    )
