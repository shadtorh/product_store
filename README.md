🛒 E-Commerce CRUD App
A simple E-Commerce CRUD Application built using the PERN stack (PostgreSQL, Express, React, Node.js). This app allows users to add, view, edit, and delete products seamlessly with a user-friendly interface.

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
Database: PostgreSQL
State Management: Zustand
Notifications: React Toastify
📸 Screenshots
(Include images of your app’s UI here)

🏗️ Installation & Setup
1️⃣ Clone the Repository
sh
Copy code
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
2️⃣ Install Dependencies
Backend
sh
Copy code
cd server
npm install
Frontend
sh
Copy code
cd client
npm install
3️⃣ Configure Environment Variables
Create a .env file in the server directory and add:

env
Copy code
PORT=5000
DATABASE_URL=your_postgresql_database_url
4️⃣ Run the App
Start Backend
sh
Copy code
cd server
npm start
Start Frontend
sh
Copy code
cd client
npm start
App will be live at http://localhost:3000/ 🚀

🔥 API Endpoints
Method	Endpoint	Description
GET	/products	Get all products
POST	/products	Add a new product
GET	/products/:id	Get a product by ID
PUT	/products/:id	Update a product
DELETE	/products/:id	Delete a product
🎯 Future Enhancements
🔹 User authentication (Admin panel)
🔹 Image uploads instead of URLs
🔹 Improved UI animations

🙌 Contributing
Feel free to fork this repo, submit issues, or create pull requests!

📜 License
This project is MIT licensed.
