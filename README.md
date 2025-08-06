# 🧩 Fullstack Task-Based Project – Animated UI & Document Viewer

This project was built as part of a two-part technical assessment to demonstrate frontend interactivity, backend integration, and document data handling using a modern web stack.

## 📌 Project Overview

### 🟢 Part 1: Animated Frontend UI
- Recreated a sample homepage with a circular layout.
- Implemented animated arrows:
  - Left to right motion
  - Clockwise rotation along a central circle

### 🔵 Part 2: Document Viewer (Frontend + Backend)
- Simulated a document AI system that extracts key-value pairs from documents.
- Developed a UI to display extracted data in a table format.
- Clicking any row shows all key-value details clearly.
- Backend APIs handle storing and retrieving the data from a database.

---

## ✨ Features

- 🚀 Smooth SVG-based arrow animations in part-1
- 📄 Recrated given UI to display structured document data
- 🔄 Backend integration for data persistence and dynamic retrieval
- 👆 Click-to-view details for each document entry

---

## 🛠️ Tech Stack

### 🔷 Frontend
- **React.js** – For user interface
- **Tailwind CSS** – For layout and styling

### 🔷 Backend
- **Express.js (Node.js)** – REST API to handle data flow between frontend and database

### 🔷 Database
- **MongoDB** – NoSQL database for storing document key-value data

---

```
### Folder Structure

AAROGYAID/
│
├── client/                      # Frontend (React + Vite)
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/              # Static assets (images, etc.)
│   │   ├── components/          # Reusable UI components
│   │   ├── pages/               # Page-level components
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── vercel.json              # Vercel deployment config
│   └── vite.config.js
│
├── server/                      # Backend (Node.js + Express)
│   ├── config/                  # DB connection and config
│   ├── controllers/             # Route logic handlers
│   ├── models/                  # Mongoose models
│   ├── routes/                  # API route definitions
│   ├── .gitignore
│   ├── index.js                 # Entry point for server
│   ├── package.json
│   └── package-lock.json
|___ README.md
```


---

## 🚀 Getting Started

### Prerequisites
```bash
# Node.js v14+
node -v

# MongoDB
mongod --version
```

### Installation

1. Clone the repository
```bash
git clone https://github.com/nithinvarma411/AarogyaID_task.git
cd AarogyaID_task
```

2. Install dependencies
```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

3. Environment Setup
```bash
# Client (.env)
VITE_SERVER_URL=http://localhost:5000/

# Server (.env)
MONGO_URI=your_mongo_uri
PORT=5000
ORIGIN=http://localhost:5173
```

### Running the Application

```bash
# Start Frontend (from client directory)
cd client
npm run dev

# Start Node.js Backend (from server directory)
cd server
npm run dev
```

## 📡 API Documentation for part-2

### Authentication Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/document/add` | Add data from Document AI | 
| GET | `/api/document/get` | Get document data |
| GET | `/api/document/calculate` | Get total number of documents |
| GET | `/api/document/lastupdated` | Get last updated document's date&time |

## 🌐 Deployment Architecture

### Frontend Deployment (Vercel)
- **Platform**: Vercel Static Site
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Domain**: https://aarogyaid-task.vercel.app/
- **Features**: Automatic deployments, Global CDN, Edge caching

### Backend Deployment (Render)
- **Platform**: Render Web Service
- **Runtime**: Node.js 18.x
- **Start Command**: `npm start`
- **Domain**: https://aarogyaid-task.onrender.com
- **Features**: Persistent server, Auto deploy from GitHub, Free tier (may cause cold starts), Health checks

### Database (MongoDB Atlas)
- **Provider**: MongoDB Atlas Cloud
- **Tier**: M0 (Free Tier)
- **Region**: Multi-region replication
- **Features**: Automatic backups, Security monitoring

### 🌐 Frontend Deployed Link
**Live Site**: [aarogyaid-task.vercel.app](https://aarogyaid-task.vercel.app/)

### 🌐 Backend Deployed Link
[https://aarogyaid-task.onrender.com](https://aarogyaid-task.onrender.com)

