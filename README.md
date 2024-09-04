# x-tomahawk
X/twitter clone project for Techstarter class of 24

## Description
This project is a modern web application built with a focus on performance and scalability. It includes user authentication, post management, and notification features. The backend is powered by Node.js and Express, with MongoDB as the database. The frontend is built using React and Vite as the build tool.

## Features
- **User Authentication**: Secure user signup, login, and logout functionalities.
- **Post Management**: Create, read, update, and delete posts.
- **Notifications**: Real-time notifications for user activities.
- **Protected Routes**: Middleware to protect routes and ensure only authenticated users can access certain endpoints.

## Folder Structure
```
├── backend
│   ├── controllers
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   ├── post.controller.js
│   │   └── notification.controller.js
│   ├── middleware
│   │   ├── protectRoute.js
│   │   └── errorHandler.js
│   ├── models
│   │   └── user.model.js
│   ├── routes
│   │   └── auth.route.js
│   ├── app.js
│   └── server.js
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.js
│   │   └── main.js
│   ├── public
│   └── index.html
├── .env
├── package.json
└── README.md
```

## Installation

### Prerequisites
- Node.js
- MongoDB

### Backend Setup
1. Clone the repository:


2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a [`.env`] file and add your environment variables:
   ```sh
MONGO_URI=
PORT=5000
JWT_SECRET=
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
   ```

4. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the frontend development server:
   ```sh
   npm run dev
   ```

## Usage
- Access the frontend at `http://localhost:3000`.
- The backend API is available at `http://localhost:5000`.

##Deployment

1. Navigate to root
2. chand the build script to:
```sh
"start": "NODE_ENV=production node backend/server.js",
    "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"
```
3. Run
```sh
npm run build
npm run start
```


## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.

---

Feel free to customize this documentation to better fit your project's specifics.
