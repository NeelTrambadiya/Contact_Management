const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db"); // Correctly import the connectDB function
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

// Routes
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/contact"));

// Server configurations
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  connectDB(); // Call the connectDB function to connect to MongoDB
  console.log(`Server listening on port: ${PORT}`);
});


// server.js,  routes, controller
//             auth route: login,signup,logut  controller-F()