export default function User() {
  return (
    <div className="flex items-center gap-3 px-4 py-2">
      {/* User Avatar */}
      <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-medium shadow">
        U
      </div>

      {/* User Label */}
      <p className="text-sm text-gray-700 font-medium">Guest User</p>
    </div>
  );
}
