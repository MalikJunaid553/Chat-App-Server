import express from "express"
import http from "http";
import {Server} from "socket.io"

const app = express();
const server = http.createServer(app);
const io  = new Server(server , {
    cors:{
        origin : "http://localhost:5173",
        methods : ["GET" , "POST"],
        credentials : true
    }
});

app.get("/", (req,res)=>{
    res.send("<h1>Hello from Realtime Socket Chat App!!!</h1>")
})

io.on("connection", (socket)=>{
    console.log("A new user Joined" , socket.id)

    socket.on("join" , (roomId)=>{
        socket.join(roomId)
    })
    socket.on("leave" , (roomId)=>{
        socket.leave(roomId);
    })


    socket.on("send" , (message)=>{
        socket.to(message.room).emit("message" , message);
    });
});

app.listen(5050 , ()=>{
    console.log("Server is runnig on port 5050")
})