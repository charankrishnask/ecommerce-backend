# E-Commerce Web Application

A full-stack single-page e-commerce application built as a part of an internship assignment. The project features a complete backend API with JWT authentication and a modern, responsive React frontend.

---
## 🌐 Live Demo

* **Frontend (Vercel):https://ecommerce-liart-mu.vercel.app/
* **Backend (Render):https://ecommerce-backend-49mb.onrender.com/api

---
## ✨ Features

- **Authentication:** Secure user signup and login using JSON Web Tokens (JWT).
- **Product Management:** Full CRUD (Create, Read, Update, Delete) functionality for products.
- **Dynamic Filtering:** Filter products by category and price on the main listing page.
- **Shopping Cart:** Add, remove, and update the quantity of items in the cart.
- **Persistence:** Cart items are saved to the user's account and persist across login sessions.
- **Responsive Design:** A modern and clean UI that works on all devices.

---
## 🛠️ Tech Stack

- **Frontend:** React, React Router, Axios, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB (with Mongoose)
- **Authentication:** JSON Web Token (JWT), bcryptjs

---
## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### **Prerequisites**
- Node.js (v18 or later)
- npm
- A MongoDB Atlas account or a local MongoDB installation

### **Backend Setup**

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/charankrishnask/ecommerce-backend.git](https://github.com/charankrishnask/ecommerce-backend.git)
    cd ecommerce-backend
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Create a `.env` file** in the root of the backend folder and add your environment variables:
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_key
    ```

4.  **Run the server:**
    ```sh
    node index.js
    ```
    The backend will be running on `http://localhost:5000`.

### **Frontend Setup**

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/charankrishnask/ecommerce-frontend.git](https://github.com/charankrishnask/ecommerce-frontend.git)
    cd ecommerce-frontend
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Create a `.env` file** in the root of the frontend folder and add the backend API URL:
    ```env
    REACT_APP_API_URL=http://localhost:5000/api
    ```

4.  **Run the client:**
    ```sh
    npm start
    ```
    The frontend will open on `http://localhost:3000`.

---
## 📄 API Endpoints

<details>
<summary>Click to view API Endpoints</summary>

#### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Log in a user and get a token

#### Products
- `GET /api/items` - Get all items (with optional filters: `?category=...` `&price[lte]=...`)
- `POST /api/items` - Create a new item (protected)
- `POST /api/items/bulk` - Create multiple items at once (protected)

#### Cart
- `GET /api/cart` - Get the logged-in user's cart (protected)
- `POST /api/cart` - Add an item to the cart (protected)
- `DELETE /api/cart/:itemId` - Remove an item from the cart (protected)
- `PUT /api/cart/:itemId` - Update an item's quantity in the cart (protected)

</details>
