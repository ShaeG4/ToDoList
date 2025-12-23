export default function ({Task, onDeleteTask}) {
    <li className="flex justify-between items-centre  bg-white p-3 rounded-lg shadow">
      <span> 
    {Task.title}
    </span>  
    <button
    onClick={() => onDeleteTask(Task.id)}
    className= "text-redd-600 text-sm">
        Delete
    </button>
    </li>
    
    
}