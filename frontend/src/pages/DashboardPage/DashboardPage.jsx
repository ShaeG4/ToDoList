import {useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import  {useState} from 'react'

export default function DashboardPage() {
  const [task,setTask] = useState([]);
  const [newTask,setNewTask] = useState("");
  const {logout} =useContext(AuthContext);
  
  function handleInputChange(event){

  }

  function addTask(){

  }

  function deleteTask(index){

  }
  
  return (
    <div className= "p-6">
      <div classNamee="max-w-lg">
        <h1 className="text-xl font-bold mb-4">
          Dashboard
        </h1>
        <p className="text-gray-600 mt-1"> Your task for the day </p>
    <button 
    onCLick={logout}
    className="bg-red-600 text-black px-4 py-2 rounded-lg hover: bg-red-700 transition-colors"
    >
      Logout
    </button>
    </div> 
    <div className="text-black bg-white"></div>
    <div className="to-do-list"> 
      <h1> List of tasks</h1>

    </div>
    </div>
  );
}
