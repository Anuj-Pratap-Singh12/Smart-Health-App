# Smart Health App 🏥💻

A web-based platform for secure health record management, patient authentication, and smart health monitoring.  
Built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.

---

## 🚀 Features
- 🔐 User Authentication (Signup / Login / Logout)
- 👩‍⚕️ Secure Health Data Storage (MongoDB Atlas)
- 🖥️ Responsive UI with React & Tailwind
- ⚡ REST API built with Express & Node.js
- 🌍 Cloud-hosted Database (MongoDB Atlas)

---

## 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT, bcrypt

---

## 📸 Screenshots

### 🔑 Login Page
![Login Page](./screenshots/login.png)

### 📝 Signup Page
![Signup Page](./screenshots/signup.png)

### 🏠 Dashboard
![Dashboard](./screenshots/dashboard.png)

---

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/Anuj-Pratap-Singh12/Smart-Health-App.git
cd smart-health-app
````

### 2. Backend setup

```bash
cd backend
npm install
```

* Copy `backend/.env.example` to `backend/.env` and fill in your values:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
PORT=5000
```

* Run backend:

```bash
npm run dev
```

### 3. Frontend setup

```bash
cd frontend
npm install
npm run dev
```

The app should now run at `http://localhost:5173/` 🎉

---

## 🔑 Environment Variables

Make sure you add the following environment variables in your `.env` file:

| Variable     | Description                         |
| ------------ | ----------------------------------- |
| `MONGO_URI`  | MongoDB Atlas connection string     |
| `JWT_SECRET` | Secret key for JWT authentication   |
| `CLIENT_URL` | Frontend URL(s) allowed to call the API (comma-separated) |
| `PORT`       | Backend server port (default: 5000) |

The frontend reads `VITE_API_URL` (the backend's URL). It defaults to `http://localhost:5000`.

---

## 🌍 Deploying to Vercel

The app is deployed as two Vercel projects from this repo.

**Backend:** import the repo in Vercel, set **Root Directory** to `backend`, and add the
environment variables `MONGO_URI`, `JWT_SECRET` and `CLIENT_URL` (your frontend URL).
In MongoDB Atlas → Network Access, allow `0.0.0.0/0`, since Vercel has no fixed IP addresses.

**Frontend:** import the repo again, set **Root Directory** to `frontend` (framework: Vite),
and add `VITE_API_URL` set to the backend's URL. Redeploy after changing any environment variable.

---

## 🤝 Contributing

Contributions are welcome!
Feel free to open issues or submit pull requests.

---

## 📜 License

This project is licensed under the MIT License.

