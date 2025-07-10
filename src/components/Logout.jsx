export default function Logout({setUser}) {
  function handleLogout(){
    setUser('');
    localStorage.removeItem("Token");
  }
  return (
    <div className="flex justify-end items-center p-2">
      <div className="flex items-center gap-2">
        <button onClick={handleLogout}
          className="px-4 py-2 text-sm text-white bg-gray-800 rounded-md shadow hover:bg-gray-700 focus:outline-none">
          Logout
        </button>
        <kbd className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded border">
          Ctrl + Shift + L
        </kbd>
      </div>
    </div>
  );
}
