import { useState } from "react";

function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    onSend(text);

    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 p-4 border-t border-slate-700 bg-slate-800"
    >
      <input
        type="text"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 rounded-lg bg-slate-700 px-4 py-3 text-white outline-none"
      />

      <button
        className="rounded-lg bg-blue-600 px-6 text-white hover:bg-blue-700"
      >
        Send
      </button>
    </form>
  );
}

export default MessageInput;