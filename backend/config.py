import os

# Host and port
HOST = os.getenv("APP_HOST", "0.0.0.0")
PORT = int(os.getenv("APP_PORT", 5001))

# Label mapping for numeric model outputs (change if your model uses other encoding)
LABEL_MAP = {1: "Real", 0: "Fake"}

# Minimum accepted length for the 'text' field
MIN_TEXT_LENGTH = 5

# If your model.predict returns label strings like "real"/"fake", set True
MODEL_RETURNS_LABEL_STR = False
