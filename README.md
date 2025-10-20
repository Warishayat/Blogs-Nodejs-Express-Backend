# 📰 Blogs Node.js Express Backend

A fully functional **RESTful Blog API** built using **Node.js**, **Express**, and **MongoDB (Mongoose)**.  
This backend supports blog post creation, updates, deletion, user authentication, and contact form submissions.  
It is deployed live on [Render](https://blogs-node-in.onrender.com).

---

## 🚀 Live API Base URL
👉 **https://blogs-node-in.onrender.com**

You can use this URL as the base for all API requests (e.g., `/post/allpost`, `/auth/login`).

---

## 🧩 Features

- 🧠 User Authentication (Signup/Login with JWT)
- ✍️ Create, Read, Update, and Delete blog posts
- 📬 Contact form submission endpoint
- 🌐 CORS-enabled for frontend integration
- 🛡️ Secure routes (protected endpoints)
- ⚙️ Environment-based configuration using `.env`
- ☁️ Hosted on **Render Cloud**

---

## 📁 Folder Structure
```

Blogs-Nodejs-Express-Backend/
│
├── Config/
│   └── database.js         # MongoDB connection setup
│
├── Controller/
│   ├── authController.js   # Handles signup & login logic
│   ├── postController.js   # Handles blog CRUD operations
│   └── formController.js   # Handles contact form submissions
│
├── Middleware/
│   └── Authenticate.js     # Middleware to verify JWT token
│
├── Models/
│   ├── UserModel.js
│   ├── PostModel.js
│   └── ContactModel.js
│
├── Routes/
│   ├── AuthRoutes.js
│   ├── PostRouter.js
│   └── FormRouter.js
│
├── index.js                # Entry point (Express app setup)
├── .env                    # Environment variables (MONGO_URL, PORT, JWT_SECRET)
├── package.json
└── README.md

````

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=3000
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
````

> ⚠️ Never commit your `.env` file to GitHub — it contains sensitive credentials.

---

## 💻 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Warishayat/Blogs-Nodejs-Express-Backend.git
cd Blogs-Nodejs-Express-Backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

Follow the environment setup above.

### 4️⃣ Run the server locally

For development:

```bash
npm run dev
```

For production:

```bash
npm start
```

Server will start on:

```
http://localhost:3000
```

---

## 🌍 API Endpoints

### 🧑‍💻 Authentication (`/auth`)

| Method | Endpoint       | Description             |
| ------ | -------------- | ----------------------- |
| POST   | `/auth/signup` | Register a new user     |
| POST   | `/auth/login`  | Login and get JWT token |

---

### 📝 Blog Posts (`/post`)

| Method | Endpoint               | Description                   |
| ------ | ---------------------- | ----------------------------- |
| POST   | `/post/createpost`     | Create a new blog post        |
| GET    | `/post/allpost`        | Get all blog posts            |
| GET    | `/post/singlepost/:id` | Get a single post by ID       |
| PUT    | `/post/updatepost/:id` | Update an existing post       |
| DELETE | `/post/deletepost/:id` | Delete a specific post        |
| DELETE | `/post/deleteall`      | Delete all posts (admin only) |

---

### 📬 Contact Form (`/contact`)

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| POST   | `/contact/contactus` | Submit a contact form |

---

## 🔒 Middleware: JWT Authentication

Protected routes require a **Bearer Token** in the `Authorization` header:

```
Authorization: Bearer <your_jwt_token>
```

---

## 🧠 Tech Stack

* **Node.js** — Runtime environment
* **Express.js** — Web framework
* **MongoDB (Mongoose)** — NoSQL database
* **JWT** — Authentication and authorization
* **dotenv** — Environment configuration
* **CORS** — Cross-Origin Resource Sharing
* **Render** — Cloud deployment platform

---

## 🌐 Deployment

The backend is deployed on **Render**:
🔗 [https://blogs-node-in.onrender.com](https://blogs-node-in.onrender.com)

Deployment Steps:

1. Push your code to GitHub.
2. Create a new **Web Service** on [Render](https://render.com).
3. Connect your GitHub repository.
4. Add environment variables in the Render dashboard (`MONGO_URL`, `JWT_SECRET`, `PORT`).
5. Set **Build Command:** `npm install`
   Set **Start Command:** `npm start`
6. Deploy 🚀

---

## 🧪 Example API Request (using cURL)

```bash
curl -X POST https://blogs-node-in.onrender.com/post/createpost \
-H "Content-Type: application/json" \
-d '{
  "title": "My First Blog Post",
  "content": "This is an example post",
  "author": "Waris"
}'
```

---

## 👨‍💻 Author

**Waris Hayat**
📧 [warishayat666@gmail.com]
🌐 [https://github.com/Warishayat](https://github.com/Warishayat)

---

## 🏁 License

This project is licensed under the **MIT License** — feel free to use and modify it.

---

⭐ If you found this project helpful, don’t forget to **star the repo** on [GitHub](https://github.com/Warishayat/Blogs-Nodejs-Express-Backend)!

```


