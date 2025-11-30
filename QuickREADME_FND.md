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
User → Frontend → Flask API → Preprocess → TF-IDF → SVM → Output → UI Display
```

---

## 📌 Model Description

### 📂 Dataset: WELFake
- 72,134 samples  
- 35,028 real  
- 37,106 fake  

### 🔧 Preprocessing:
- Remove duplicates  
- Lowercase  
- Remove punctuation, URLs, numbers  
- Tokenization  
- Stopword removal  

### 📊 Feature Extraction:
- TF-IDF vectorization  
- max_features limit  

### 🤖 Models Trained:
- Logistic Regression  
- Naïve Bayes  
- SVM ⭐ (Best performer)  
- Random Forest  
- Gradient Boosting  
- XGBoost  
- LightGBM  

### 🏆 Best Model: **SVM (~97% accuracy)**

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

---

## 📌 Pros & Cons

### ✔ Pros
- High accuracy  
- Lightweight  
- Explainable (TF-IDF)  
- Fast predictions  
- Easy to deploy  

### ❌ Cons
- Cannot actually fact-check  
- Limited context understanding  
- Text-only (no images/videos)  
- Sensitive to very short inputs  
- Model may miss new fake patterns  

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

## 📁 Project Members
- Ayush Limbu  
- Bibek Kumar Borah  
- Devajani Sonowal  
- Ashim Basumatary  
- Santonu Nath  

---

## 📜 License
This project is developed for academic purposes by the CSE 7th Semester team.

