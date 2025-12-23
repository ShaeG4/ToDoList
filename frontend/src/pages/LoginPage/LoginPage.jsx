import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
import { Link } from "react-router-dom"
export default function LoginPage() {

    //User states that is inputed by the user on the login page
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();


  //Once logged in go to dashboard 
  function handleLogin() {
    login({ identifier });
    navigate("/dashboard");
  }
  
//Login page structure
return (
  <div className="min-h-screen flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
      <h1 className="text-center text-2xl font-bold text-gray-900 mb-1">
        Welcome Back
      </h1>
      <p className="text-centre text-gray-600 mb-3">
        Sign in to manage your tasks
      </p>

<div className="text-right mb-6">
  <Link
    to="/forgot-password"
    className="text-sm text-indigo-600 hover:text-indigo-700 hover:underline"
  >
    Forgot your password?
  </Link>
</div>


      <div className="space-y-5">
        <div>
          <label className="block text-gray-700 mb-2">Username or Email</label>
          <input
            type="text"
            placeholder="username or you@example.com"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-indigo-600 text-black py-3 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Sign In
        </button>
     <div>
        <button
        onClick ={() => navigate("/register")}
        className="w-full bg-gray-600 text-black py-2 rounded-lg
        hover:bg-indigo-700 transition-colors"
        >
        Register
        </button>
     </div>
     
     
      </div>
      

      <p className="text-center text-gray-600 mt-6 text-sm">
        Demo: Enter any username/email and password to continue
      </p>
    </div>
  </div>
  );
}
