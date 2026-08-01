function MessageBubble({ message, currentUser }) {
  const isMine = message.sender === currentUser;

  return (
    <div
      className={`flex ${
        isMine ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-xs rounded-xl px-4 py-3 ${
          isMine
            ? "bg-blue-600 text-white"
            : "bg-slate-700 text-white"
        }`}
      >
        <p className="text-xs opacity-70 mb-1">
          {message.sender}
        </p>

        <p>{message.text}</p>
      </div>
    </div>
  );
}

export default MessageBubble;