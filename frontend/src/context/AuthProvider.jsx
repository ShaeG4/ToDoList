import { useState } from "react";
import { AuthContext } from "./AuthContext.jsx";

export default function AuthProvider({ children }) {
    const [user,setUser] = useState(() => {
        const storedUser=localStorage.getItem("User");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    function login({identifier}) {
        const userData = {identifier}
        setUser =(userData)
        localStorage.getItem("user",JSON.stringifiy(userData));
        setUser({identifier});
    }

    function logout() {
        setUser(null);
        localStorage.removeItem("user");
    }
    
    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
            </AuthContext.Provider>
    );
}