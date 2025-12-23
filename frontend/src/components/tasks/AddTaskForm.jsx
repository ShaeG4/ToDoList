import { useState } from "react";
//chatgpt helped heavily unfortunatley which is why there are so many comments. acts as a mental note 


//Function + Varialbles 
export default fuction ({onAddTask})
const[title,setTitle] = useState("")

function Handlesubmit(e){
     e.preventdefault(); //This stops the browser from doing its default which is. refreshing
     if(!title.trim()) return; // if the user types nothing. do nothing prevents tasks from having blanks and stuff. trim() removes spaces form both ends 
     
     onAddTask(title); //when called put the new task 
     setTitle("") //clear input when added 
}

return (

    //form is used instead of div beacause user is pressing enter to submit. 
    <form onSubmit={handlesubmit} className= "mt-6 flex gap-2">
        <input 
        type="Text"
        value={title}
        onChange = {e => setTitle(e.target.value)}
        placeholder ="New Task"
        className = "flex-1 px-4 px-3 border rouded-lg"
        />
    <button className= "bg-indigo-700 text-white px-4 rounded-lg">
        Add
    </button>
    </form>
)
