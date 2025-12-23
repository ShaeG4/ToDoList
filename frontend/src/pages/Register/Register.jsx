import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


export default function Register() { 
    
    //Allowing the user the create their accounts
    const [identifier,setIdentifier] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [ConfirmPassword,setConfirmPassword] = useState("")
    const passwordLongEnough = password.length >=8;
    const passwordMatch = password == ConfirmPassword
    const canRegister = passwordLongEnough && passwordMatch

    const {Register} = useContext(AuthContext)
    const navigate =useNavigate();

    //once user has registered go to login
    function handleLogin() {
        Register(({identifier}))
        navigate("/LoginPage")
    }
//for password making len cmd if len < 8 do not accept
 return (
  <div className="min-h-screen flex items-center justify-center p-4">
    <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
      <h1 className="text-center text-2xl font-bold text-gray-900 mb-1">
        Please Register
      </h1>

      <p className="text-center text-gray-600 mb-6">
        Sign up to feel on top
      </p>

      <div className="space-y-5">
        <div>
          <label className="block text-gray-700 mb-2">Username</label>
          <input
            type="text"
            placeholder="username"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          {password && !passwordLongEnough && (
            <p className="text-red-600 text-sm">
              Password must be at least 8 characters
            </p>
          )}
        </div>


        <div>
          <label className="block text-gray-700 mb-2">Enter Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

         <div>
            <label className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
             value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              {ConfirmPassword && !passwordMatch &&(
                <p className="text-red-600 text-sm">
                  
                </p>
              )}
             </div>

            <div>
                <label className="block text-gray-700 mb-2"> Email</label>
                <input 
                    type="Email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
            </div>

            <div>
                <button onClick={() => navigate("/login")}
                className= "w-full bg-gray-600 text-black py-2 rounded-lg hover:bg-indigo-700 transistion-colors"
                > 
                    Sign Up
                </button>
            </div>
         </div>
        </div>
    </div>
    );
}