import { useState } from "react";

export default function AddToDo() {
  const [taskCompletionDate, setTaskCompletionDate] = useState('');
  const [taskName, setTaskName] = useState('');
  const [loading, setLoading] = useState(false);

  function handleAdd(event){
    event.preventDefault();
    setLoading(true);
    const task = {
      taskName: taskName,
      taskCompletionDate: taskCompletionDate,
      user: 'anurag' //temporarily using this.
    }
    const taskList = JSON.parse(localStorage.getItem("taskList")) || [];
    const updatedTaskList = [...taskList, task];
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    
    setTimeout(()=>{
    setLoading(false);
    setTaskCompletionDate('');
    setTaskName(''); 
    }, 2000)
  }
  return (
    <form onSubmit={handleAdd} className="flex items-center gap-3 w-full max-w-2xl px-4">
      {/* Task input */}
      <input 
        type="text"
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
