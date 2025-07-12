import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout({ setUser }) {
  const navigate = useNavigate(); 

  function handleLogout() {
    setUser('');
    localStorage.removeItem("Token");
    navigate("/", { replace: true });
    window.location.reload(); 
  }

  useEffect(() => {
    function handleLogout2(e) {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'l') {
        e.preventDefault();
        handleLogout();
      }
    }

    window.addEventListener('keydown', handleLogout2);

    return () => {
      window.removeEventListener('keydown', handleLogout2);
    };
  }, []);

  return (
    <div className="flex justify-end items-center p-2">
      <div className="flex items-center gap-2">
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm text-white bg-gray-800 rounded-md shadow hover:bg-gray-700 focus:outline-none"
        >
          Logout
        </button>
        <kbd className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded border">
          Ctrl + Shift + L
        </kbd>
      </div>
    </div>
  );
}
