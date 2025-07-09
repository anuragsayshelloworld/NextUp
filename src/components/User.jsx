import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
export default function User() {
  const {user, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  function handleLogin(){
   setLoading(true);
   setTimeout(()=>{
   setLoading(false);
   setLoginModal(true); 
   },2000)
  }
  return (
    <>
    <div className="relative flex items-center gap-3 px-4 py-2">

{loginModal && (
  <div className="absolute z-50 bg-white border border-gray-300 rounded shadow p-3 w-fit">
    {/* Row: Email + Button */}
    <div className="flex items-center gap-2">
      <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 rounded px-2 py-[2px] text-xs w-[120px] focus:outline-none focus:ring-1 focus:ring-gray-800"
      />
      <input
        type="button"
        value="Send PIN"
        className="bg-gray-800 text-white text-xs py-[3px] px-3 rounded hover:bg-gray-700 cursor-pointer"
      />
    </div>

    {/* Row 2: PIN input + Close button */}
    <div className="mt-2 flex items-center gap-2">
      <input
        type="number"
        placeholder="XXXX"
        className="border border-gray-300 rounded px-2 py-[2px] text-xs w-[100px] focus:outline-none focus:ring-1 focus:ring-gray-800"
      />
      <button
        onClick={() => setLoginModal(false)}
        className="border border-red-500 text-red-500 text-xs px-2 py-[3px] rounded hover:bg-red-50 transition"
      >
        Close
      </button>
    </div>
  </div>
)}

      {/* User Avatar */}
      <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-medium shadow">
        U
      </div>

      {/* User Label */}
      <p className="text-sm text-gray-700 font-medium border shadow-sm p-3 hover:bg-gray-100 cursor-pointer w-[160px]"
      onClick={user ? undefined : handleLogin}>{user ? user : `${loading ? 'Hang on a bit...' : 'Login to allow usage'}`}</p>
    </div>
    </>
  );
}
