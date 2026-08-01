import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
});


// Needed for serving React build files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Serve React frontend
app.use(express.static(path.join(__dirname, "client", "dist")));


// Socket.IO
io.on("connection", (socket) => {
    console.log("A new user joined", socket.id);


    socket.on("join", (roomId) => {
        console.log(`${socket.id} joined ${roomId}`);
        socket.join(roomId);
    });


    socket.on("leave", (roomId) => {
        socket.leave(roomId);
    });


    socket.on("send", (message) => {
        console.log("Message:", message);

        socket.to(message.room).emit("message", message);
    });


    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
    });
});


// React fallback
app.get("/{*splat}", (req, res) => {
    res.sendFile(
        path.join(__dirname, "client", "dist", "index.html")
    );
});


const PORT = process.env.PORT || 5050;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});