import { createContext, useEffect, useState } from "react";
const AuthContext = createContext();
export default AuthContext;

export function AuthProvider({children}){
    const [user, setUser] = useState(null);
    useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("Token")) || '';
    if(data){
        setUser(data);
    } 
    }, [])
    return <AuthContext.Provider value={{user, setUser}}>
              {children} 
          </AuthContext.Provider>
}