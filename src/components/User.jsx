import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import emailjs from 'emailjs-com';


export default function User() {
  const {user, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [mail, setMail] = useState('');
  const [cPin, setCPin] = useState(null);
  const [SPin, setSPin] = useState(null);

  function handleLogin(){
   setLoading(true);
   setTimeout(()=>{
   setLoading(false);
   setLoginModal(true); 
   },2000)
  }
  function sendPin(){
    setLoading(true);
    const PIN = Math.floor(1000 + Math.random() * 9000); 
    setCPin(PIN);
            

            // Send actual email with PIN
            emailjs.send(
                "service_6vjrpop",          
                "template_5ri4xxa",         
                {
                    email: mail,
                    pin_code: PIN
                },
                "cm1wHY7sIZ75KbKOv"        
            ).then(() => {
                console.log("sent");
                setLoading(false);
                // we can later add notification  
                
            }).catch((error) => {
                console.error("EmailJS Error:", error);
                setLoading(false);
                
            });
  }
  function checkPin(e){
      setSPin(e.target.value);
      if( cPin === parseInt(e.target.value)){
        setLoginModal(false);
        setUser(mail);
        localStorage.setItem("Token", mail);
      }
  }

  return (
    <>
    <div className="relative flex items-center gap-3 px-4 py-2">

{loginModal && (
  <div className="absolute z-50 bg-white border border-gray-300 rounded shadow p-3 w-fit">
    {/* Row: Email + Button */}
    <div className="flex items-center gap-2">
      <input
        value={mail}
        onChange={(e)=>setMail(e.target.value)}
        type="email"
        placeholder="Email"
        className="border border-gray-300 rounded px-2 py-[2px] text-xs w-[120px] focus:outline-none focus:ring-1 focus:ring-gray-800"
      />
      <input
        onClick={(e)=>sendPin(e)}
        type="button"
        value={`${loading ? 'Sending..' : 'Send Pin' }`}
        className="bg-gray-800 text-white text-xs py-[3px] px-3 rounded hover:bg-gray-700 cursor-pointer"
      />
    </div>

    {/* Row 2: PIN input + Close button */}
    <div className="mt-2 flex items-center gap-2">
      <input
        value={SPin}
        onChange={checkPin}
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
      
      <p
  className={`text-gray-700 font-medium border shadow-sm p-2 hover:bg-gray-100 cursor-pointer ${
    user ? 'w-[200px] text-xs' : 'w-[160px] text-sm'
  }`}
  onClick={user ? undefined : handleLogin}
>
  {user ? user : loading ? 'Hang on a bit...' : 'Login to allow usage'}
</p>

          </div>
    </>
  );
}
