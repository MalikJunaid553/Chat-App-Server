
function ChatHeader({ user }) {
  return (
    <div className="flex items-center justify-between bg-slate-800 px-6 py-4 border-b border-slate-700">
      <h1 className="text-xl font-bold text-white">
        💬 Realtime Chat
      </h1>

      <div className="text-right">
        <p className="text-white font-semibold">{user.name}</p>
        <p className="text-sm text-slate-400">
          Room: {user.room}
        </p>
      </div>
    </div>
  );
}

export default ChatHeader;