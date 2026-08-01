import { useEffect, useState } from "react";
import socket from "../socket";

import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

function ChatRoom({ user }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    
    socket.emit("join", user.room);

  
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.emit("leave", user.room);
      socket.off("message");
    };
  }, [user.room]);

  const handleSend = (text) => {
    const message = {
      room: user.room,
      sender: user.name,
      text,
    };

    setMessages((prev) => [...prev, message]);

    socket.emit("send", message);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center p-6">
      <div className="w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden bg-slate-800 shadow-2xl flex flex-col">

        <ChatHeader user={user} />

        <MessageList
          messages={messages}
          currentUser={user.name}
        />

        <MessageInput onSend={handleSend} />

      </div>
    </div>
  );
}

export default ChatRoom;