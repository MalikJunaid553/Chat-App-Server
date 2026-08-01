import { useState } from "react";

function JoinRoom({ onJoin }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !room.trim()) return;

    onJoin(name.trim(), room.trim());
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-slate-800 p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-white text-center">
          💬 Realtime Chat
        </h1>

        <p className="text-slate-400 text-center mt-2">
          Join a room to start chatting
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="block text-slate-300 mb-2">
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-2">
              Room ID
            </label>

            <input
              type="text"
              placeholder="Example: CS-101"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Join Chat
          </button>
        </form>
      </div>
    </div>
  );
}

export default JoinRoom;