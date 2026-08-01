import MessageBubble from "./MessageBubble";

function MessageList({ messages, currentUser }) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      {messages.map((message, index) => (
        <MessageBubble
          key={index}
          message={message}
          currentUser={currentUser}
        />
      ))}
    </div>
  );
}

export default MessageList;