🛒 E-Commerce CRUD App
A simple E-Commerce CRUD Application built using the MERN stack (MongoDB, Express, React, Node.js). This app allows users to add, view, edit, and delete products seamlessly with a user-friendly interface.

🚀 Features
✅ Add new products with name, price, and image
✅ View product details
✅ Edit product information
✅ Delete products
✅ Smooth UI with Tailwind CSS & DaisyUI
✅ Real-time updates using Zustand (State Management)
✅ Notifications with React Toastify

🛠️ Tech Stack
Frontend: React, React Router, Tailwind CSS, DaisyUI
Backend: Node.js, Express
Database: Mongoose
State Management: Zustand
Notifications: React Toastify

🏗️ Installation & Setup
1️⃣ Clone the Repository
  git clone https://github.com/shadtorh/product_store.git
  cd product_store

2️⃣ Install Dependencies
Backend
  cd server
  npm install

Frontend
  cd client
  npm install
  
3️⃣ Configure Environment Variables
Create a .env file in the server directory and add:

env
  PORT=5000
  MONGO_URI=your_mongodb_url
  
4️⃣ Run the App
Start Backend
  Copy code
  cd server
npm run dev

Start Frontend
  cd client
  npm start


🔥 API Endpoints
Method	Endpoint	Description
GET	api/products	Get all products
POST	api/products	Add a new product
GET	api/products/:id	Get a product by ID
PUT	api/products/:id	Update a product
DELETE	api/products/:id	Delete a product

🎯 Future Enhancements
🔹 User authentication (Admin panel)
🔹 Image uploads instead of URLs
🔹 Improved UI animations

🙌 Contributing
Feel free to fork this repo, submit issues, or create pull requests!

📜 License
This project is MIT licensed.
