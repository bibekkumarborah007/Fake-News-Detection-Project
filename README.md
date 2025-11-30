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

## 📂 Dataset (WELFake)
- Total Samples: 72,134  
- Real: 35,028  
- Fake: 37,106  
- Balanced dataset  
- Sources: Kaggle, McIntire, BuzzFeed, Reuters  

---

## 🧹 Preprocessing Pipeline
1. Remove duplicates  
2. Merge title + text  
3. Lowercase conversion  
4. Remove punctuation, URLs, numbers  
5. Tokenization  
6. Stopword removal  
7. Lemmatization  
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

### Saved Files
- `model.pkl` – SVM classifier  
- `tfidf.pkl` – TF-IDF vectorizer  

---

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

## ⚠ Limitations
- System detects patterns, not factual truth  
- Text-only detection  
- May misclassify vague or very short text  
- TF-IDF does not understand deep context  

---

## 🔮 Future Enhancements
- BERT / RoBERTa / DistilBERT  
- Image + text multimodal detection  
- Chrome extension  
- Real-time stream detection  
- SHAP / LIME explainability  

---

## 👥 Team
- Ayush Limbu  
- Bibek Kumar Borah  
- Devajani Sonowal  
- Ashim Basumatary  
- Santonu Nath  

---

## 📜 License
Academic Project – Dhemaji Engineering College (CSE 7th Semester, 2025)
