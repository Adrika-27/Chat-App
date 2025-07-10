# 💬 Fullstack Real-Time Chat App

A modern, real-time chat application built with **MERN stack** (MongoDB, Express, React, Node.js), **Socket.IO**, **JWT authentication**, and **TailwindCSS**.  
It supports secure login/signup, scalable stateless authentication, and instant messaging with WebSockets — all packed in a responsive UI.

---

## 🚀 Features

✅ User registration & login with hashed & salted passwords.  
✅ Stateless JWT-based authentication with HTTP-only cookies for security.  
✅ Real-time messaging using Socket.IO over WebSockets.  
✅ REST API for user and message management.  
✅ MongoDB Atlas cloud database.  
✅ Responsive and beautiful UI with TailwindCSS.  
✅ CORS-configured for cross-origin frontend/backend during development.  
✅ Ready for production deployment.

---

## 🧰 Tech Stack

- **Frontend:** React + Vite + TailwindCSS
- **Backend:** Node.js + Express + Socket.IO
- **Database:** MongoDB Atlas + Mongoose
- **Authentication:** JWT, bcrypt, HTTP-only cookies
- **Hosting (optional):** Vercel (frontend) & Render (backend)

---

## 📸 Screenshots

### Login Screen
![Login](https://github.com/user-attachments/assets/9f7f177a-c636-43a7-9ec3-f684ba50a56e)

*(replace the above URL with your actual uploaded image on GitHub, or upload screenshots in your repo and link them properly.)*

---

## 📄 Setup & Run Locally

### Prerequisites
- Node.js & npm
- MongoDB Atlas account

### Steps
```bash
# Clone the repository
git clone https://github.com/Adrika-27/Chat-App.git
cd Chat-App

# Install backend dependencies
cd backend
npm install

# Create `.env` file in `backend/` with:
MONGO_URI=your-mongodb-uri
PORT=5001
JWT_SECRET=your-secret-key

# Start backend
npm run dev
