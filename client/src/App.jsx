import { useState } from "react";
import JoinRoom from "./components/JoinRoom";
import ChatRoom from "./components/ChatRoom";

function App() {
  const [user, setUser] = useState({
    name: "",
    room: "",
  });

  const [joined, setJoined] = useState(false);

  const handleJoin = (name, room) => {
    setUser({
      name,
      room,
    });

    setJoined(true);
  };

  return (
    <>
      {joined ? (
        <ChatRoom user={user} />
      ) : (
        <JoinRoom onJoin={handleJoin} />
      )}
    </>
  );
}

export default App;