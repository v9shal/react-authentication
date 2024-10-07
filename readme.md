/resource-skill-sharing-app
├── /backend
│   ├── /config              # Configuration files (DB, environment variables)
│   │   ├── db.js           # MongoDB connection setup
│   │   ├── config.js       # Configuration for JWT, cookies, etc.
│   ├── /controllers         # Controllers to handle requests
│   │   ├── authController.js # User authentication logic
│   │   ├── skillController.js # Logic for managing skills
│   │   ├── resourceController.js # Logic for managing resources
│   ├── /middleware          # Middleware functions
│   │   ├── authMiddleware.js # JWT authentication middleware
│   ├── /models              # Mongoose models
│   │   ├── User.js         # User model
│   │   ├── Skill.js        # Skill model
│   │   ├── Resource.js     # Resource model
│   │   ├── Transaction.js   # Transaction model (optional)
│   ├── /routes              # Express routes
│   │   ├── authRoutes.js    # Authentication routes
│   │   ├── skillRoutes.js    # Routes for skills
│   │   ├── resourceRoutes.js # Routes for resources
│   ├── /utils               # Utility functions (e.g., for points calculation)
│   ├── app.js               # Express app setup
│   └── server.js            # Entry point for the backend server
├── /frontend
│   ├── /public              # Public files (index.html, favicon, etc.)
│   ├── /src
│   │   ├── /api             # API calls
│   │   │   ├── authApi.js    # API calls for authentication
│   │   │   ├── skillApi.js    # API calls for skills
│   │   │   ├── resourceApi.js # API calls for resources
│   │   ├── /components       # Reusable components
│   │   │   ├── Auth          # Login and Signup components
│   │   │   ├── Profile       # Profile component
│   │   │   ├── Skill         # Skill listing and sharing component
│   │   │   ├── Resource      # Resource listing and sharing component
│   │   ├── /features         # Redux slices
│   │   │   ├── authSlice.js   # Authentication slice
│   │   │   ├── skillSlice.js   # Skills slice
│   │   │   ├── resourceSlice.js # Resources slice
│   │   ├── /pages            # Main pages
│   │   │   ├── Home.js       # Home page
│   │   │   ├── Profile.js     # Profile page
│   │   │   ├── Skills.js      # Skills page
│   │   │   ├── Resources.js    # Resources page
│   │   ├── /styles           # CSS or styled-components
│   │   ├── App.js            # Main application component
│   │   ├── index.js          # Entry point for the React app
│   └── package.json          # Frontend dependencies
├── package.json              # Backend dependencies
└── README.md                 # Project documentation
