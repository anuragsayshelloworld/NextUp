import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import TaskListContext from "../context/TaskListContext";

export default function AddToDo() {
  const {setList} = useContext(TaskListContext);
  const {user} = useContext(AuthContext);
  const [taskCompletionDate, setTaskCompletionDate] = useState('');
  const [taskName, setTaskName] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  function handleAdd(event){
    event.preventDefault();
    setLoading(true);
    const task = {
      taskName: taskName,
      taskCompletionDate: taskCompletionDate,
      user: user
    }
    const taskList = JSON.parse(localStorage.getItem("taskList")) || [];
    const updatedTaskList = [...taskList, task];
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    
    setTimeout(()=>{
    setLoading(false);
    setTaskCompletionDate('');
    setTaskName('');
    setList(updatedTaskList); 
    }, 2000)
  }

  useEffect(()=>{
    function handlekeydown(e){
     if(e.ctrlKey && e.key.toLowerCase() === 'k'){
      e.preventDefault();
      inputRef.current.focus();
     } 
    }
   window.addEventListener("keydown", handlekeydown);
   return () => {
    window.removeEventListener("keydown", handlekeydown);
   }
  },[]);


  return (
    <form onSubmit={handleAdd} className="flex items-center gap-3 w-full max-w-2xl px-4">
      {/* Task input */}
      <input 
        type="text"
        ref={inputRef}
        value={taskName}
        onChange={(e)=>setTaskName(e.target.value)} 
        placeholder="Ctrl + K" 
        className="flex-1 p-2 px-3 text-sm border rounded-md shadow-sm 
                   focus:outline-none focus:ring-1 focus:ring-gray-400" 
      />

      {/* Date input */}
      <input 
        type="date" 
        value={taskCompletionDate}
        onChange={(e)=>setTaskCompletionDate(e.target.value)}
        className="p-2 px-3 text-sm border rounded-md shadow-sm 
                   focus:outline-none focus:ring-1 focus:ring-gray-400" 
      />

      {/* Submit button */}
      <input
  type="submit"
  value={loading ? 'Adding...' : 'Add'}
  disabled={!taskName.trim() || loading}
  className={`w-[90px] p-2 text-sm rounded-md shadow text-center cursor-pointer 
              ${!taskName.trim() || loading 
                ? 'bg-gray-700 text-white cursor-not-allowed' 
                : 'bg-gray-800 text-white hover:bg-gray-700'}`}
/>


    </form>
  );
}
