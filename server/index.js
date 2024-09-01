const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/messages");
const socket = require("socket.io");
require("dotenv").config();

const app = express();

// CORS configuration
app.use(cors({
  origin: "http://localhost:3000", // Allow requests from this origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
  credentials: true, // Allow cookies and credentials
}));

// Middleware for parsing JSON
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log("DB Connection Error: ", err.message);
  });

// Test route
app.get("/ping", (_req, res) => {
  return res.json({ msg: "Ping Successful" });
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Starting the server
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () =>
  console.log(`Server started on ${PORT}`)
);

// Socket.IO configuration
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Manage online users and handle socket events
global.onlineUsers = new Map();
io.on("connection", (socket) => {
  console.log(`New connection: ${socket.id}`);

  // Storing the user's socket ID
  socket.on("add-user", (userId) => {
    if (userId && typeof userId === 'string' && userId.trim() !== "") {
      onlineUsers.set(userId, socket.id);
      console.log(`User added: ${userId}`);
    } else {
      console.log(`Invalid userId received: ${userId}`);
    }
  });

  // Handling the sending of messages
  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
      console.log(`Message sent from ${data.from} to ${data.to}`);
    } else {
      console.log(`User ${data.to} is not connected`);
    }
  });

  // Handling disconnection
  socket.on("disconnect", () => {
    for (let [userId, socketId] of onlineUsers.entries()) {
      if (socketId === socket.id) {
        onlineUsers.delete(userId);
        console.log(`User disconnected: ${userId}`);
        break;
      }
    }
  });
});