# Fake-News-Detection-Project
7th Semester Group Project
# Fake News Detection System (FND)
## Software Requirements Specification (SRS)
### Version 1.0

## 📌 Introduction

### 🎯 Purpose
The Fake News Detection System (FND) is designed to classify news headlines or short articles as **Real** or **Fake** using:
- **TF-IDF feature extraction**
- **Support Vector Machine (SVM) classifier**
- **Flask backend API**
- **React + Tailwind frontend**

It aims to support real-time detection and provide a user-friendly interface.

---

## 📌 Scope
The system provides:
- Real-time fake news detection  
- Pattern-based analysis using TF-IDF  
- High-accuracy SVM classification  
- Web interface for user interaction  
- Backend API for prediction  
- Confidence scoring  

---

## 📌 Definitions
| Term | Meaning |
|------|---------|
| TF-IDF | Text vectorization method based on word importance |
| SVM | Final ML classifier used for prediction |
| Real/Fake | Binary classes in WELFake dataset |
| model.pkl | Trained SVM model |
| tfidf.pkl | Saved TF-IDF vectorizer |
| FND | Fake News Detection System |

---

## 📌 Overall Description

### 🧩 Product Perspective
The system consists of:
- **ML Model** trained on WELFake dataset (72,134 samples)  
- **Flask Backend** for prediction  
- **React Frontend** for UI  
- **Web-based deployment** on cloud services

### ⭐ Key Features
- TF-IDF Powered Text Check  
- Pattern-based Fake News Scan  
- High-Accuracy SVM Detection  
- Smart Credibility Scoring  
- Clean real-time UI  

### 🧑‍💻 Target Users
- Students  
- Researchers  
- General public  
- Developers  

---

## 📌 System Requirements

### ✅ Functional Requirements
- User input for text  
- `POST /predict` API call  
- Preprocessing (lowercase, punctuation removal, tokenization, stopwords)  
- TF-IDF vectorization  
- SVM classification  
- JSON output with label + confidence  
- UI display with color-coded results  
- Rolling animation phrases  
- Error handling  

### ⚙ Non-Functional Requirements
- Fast (< 1 sec prediction)  
- Accuracy ≥ 95%  
- Works on all modern browsers  
- Secure, sanitized input  

---

## 📌 System Architecture

```
User → Frontend → Flask API → Preprocess → TF-IDF → SVM → JSON Output → UI Display
```

---

## 📌 Model Description

=======
=======

# 📰 Fake News Detection System (FND)
### **TF-IDF + SVM | Machine Learning + NLP | Flask API + React UI**

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Python](https://img.shields.io/badge/Python-3.10-blue)
![React](https://img.shields.io/badge/Frontend-React-blue)
![Flask](https://img.shields.io/badge/Backend-Flask-orange)
![License](https://img.shields.io/badge/License-Academic-lightgrey)

## 🚀 Overview
The **Fake News Detection System (FND)** is an end-to-end Machine Learning + NLP web application that classifies news text as **Real** or **Fake** using:
- TF-IDF vectorization
- SVM classifier
- Flask backend API
- React + Tailwind frontend

It is trained on **72,134 news articles** and delivers **~97% accuracy**.

---

## 📌 Features
- Real-time Fake/Real detection  
- TF-IDF text feature extraction  
- SVM model (best performer)  
- Flask REST API  
- Modern React + Tailwind UI  
- Fast prediction (<1 sec)  
- Confidence-based results  

---

## 🏗 Architecture
User → React Frontend → Flask API → Preprocessing → TF-IDF → SVM → JSON Output → UI Display

---

(Fake News Detection Project Upload)
=======
>>>>>>> 57d96afbd7a562b1276f6caf1da3d81a31146800
## 📂 Dataset (WELFake)
- Total Samples: 72,134  
- Real: 35,028  
- Fake: 37,106  
- Balanced dataset  
- Sources: Kaggle, McIntire, BuzzFeed, Reuters

=======
---
(Fake News Detection Project Upload)
=======
---

## 🧹 Preprocessing Pipeline
1. Remove duplicates  
2. Merge title + text  
3. Lowercase conversion  
4. Remove punctuation, URLs, numbers  
5. Tokenization  
6. Stopword removal  
7. Lemmatization  
<<<<<<< HEAD
<<<<<<< HEAD
8. Cleaned text saved as `content_clean` 

### 📊 Feature Extraction:
- TF-IDF vectorization  
- max_features limit  
=======
8. Cleaned text saved as `content_clean`  

---
>>>>>>> 57d96af (Fake News Detection Project Upload)
=======
8. Cleaned text saved as `content_clean`  

---

## 🤖 Model Details
Trained models:
- Logistic Regression  
- Naive Bayes  
- Random Forest  
- Gradient Boosting  
- XGBoost  
- LightGBM  
- **SVM (Best: ~97% accuracy)**

### 🏆 Best Model: **SVM (~97% accuracy)**

=======
=======

### Saved Files
- `model.pkl` – SVM classifier  
- `tfidf.pkl` – TF-IDF vectorizer  

---

## 📌 Implementation Summary

### 🔙 Backend (Flask)
- Loads `model.pkl` + `tfidf.pkl`  
- Endpoint: `/predict`  
- Steps: preprocess → vectorize → classify → return JSON  

### 🎨 Frontend (React + Tailwind)
- Text input  
- Rolling phrase animation  
- Prediction card  
- Calls backend with fetch API  

### ☁ Deployment
- Frontend: Vercel / Netlify  
- Backend: Render / Railway
VITE_API_URL="https://your-backend-url.com"

---
=======
=======

## 🔙 Backend (Flask API)

### Endpoint
POST /predict

### Request:
```
{
  "text": "Example news article..."
}
```

### Response:
```
{
  "label": "Fake",
  "confidence": 0.94
}
```

Backend workflow:
- Load model + vectorizer  
- Preprocess text  
- Vectorize input  
- Predict via SVM  
- Return JSON  

---

## 🎨 Frontend (React + Tailwind)
Features:
- Clean UI  
- Input field for news text  
- Prediction card  
- Loading animation  
- Color-coded Real/Fake output  
- Fully responsive  

Run:
```
npm install
npm run dev
```

---

## 🚀 Deployment
Frontend → Vercel / Netlify  
Backend → Render / Railway / AWS EC2  

Set environment variable:
```
VITE_API_URL="https://your-backend-url.com"
```

---

(Fake News Detection Project Upload)
=======
## 📁 Project Structure
```
FND/
│── backend/
│   ├── app.py
│   ├── model.pkl
│   ├── tfidf.pkl
│   ├── requirements.txt
│
│── frontend/
│   ├── Assets/
│   ├── src/
│   ├── public/
│   ├── package.json
│
│── node_modules/
│── howToStart/
│── README.md
```
=======
(Fake News Detection Project Upload)
=======
---

## 🛠 Installation

### Backend:
```
cd backend
pip install -r requirements.txt
python app.py
```

### Frontend:
```
cd frontend
npm install
npm run dev
```

---

## 📌 Pros & Cons

### ✔ Pros
- High accuracy  
- Lightweight  
- Explainable (TF-IDF)  
- Fast predictions  
- Easy to deploy  

### ❌ Cons
- System detects patterns, not factual truth
- Cannot actually fact-check
- Limited context understanding  
- Text-only (no images/videos)  
- Sensitive to very short inputs  
- Model may miss new fake patterns
- TF-IDF does not understand deep context   

---

## 📌 Future Enhancements
- Integrate **BERT, RoBERTa, or GPT**  
- Multi-modal fake detection (images + text)  
- Browser extensions  
- Real-time streaming API  
- Explainability using SHAP/LIME  

---

## 📌 Conclusion
The Fake News Detection System (FND) effectively uses **TF-IDF pattern analysis** and **SVM-powered classification** to detect real vs fake news with high accuracy. It is lightweight, reliable, and scalable, forming a solid base for future AI-driven misinformation detection systems.

---

## 👥 Team
(Fake News Detection Project Upload)
=======
- Ayush Limbu  
- Bibek Kumar Borah  
- Devajani Sonowal  
- Ashim Basumatary  
- Santonu Nath  

---

## 📜 License
Academic Project – Dhemaji Engineering College (CSE 7th Semester, 2025)
