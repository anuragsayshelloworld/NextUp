import { useCallback, useEffect, useState } from "react";
import useLocalstorage from "../hooks/useLocalstorage"
import AuthContext from '../context/AuthContext';
import TaskListContext from '../context/TaskListContext'
import { useContext } from "react";

export default function Deleted(){
    const [tasks, setTasks] = useState([]);
    const list = useLocalstorage("deleted");
    const { user } = useContext(AuthContext);
    const { setList } = useContext(TaskListContext);

    const handleDelete = useCallback((taskName)=>{
     const updatedList = tasks.filter((item)=>item.taskName !== taskName);
     setTasks(updatedList);
     localStorage.setItem("deleted", JSON.stringify(updatedList));   
    },[tasks])

    const handleRestore = (taskName, taskCompletionDate)=>{
      const allData = JSON.parse(localStorage.getItem("taskList")) || [];
      const newTask = {
        taskName: taskName,
        taskCompletionDate: taskCompletionDate,
        user: user
      }
      allData.push(newTask);
      localStorage.setItem("taskList", JSON.stringify(allData));
      handleDelete(taskName);
      setList(allData);  
    }
    
    useEffect(()=>{
      setTasks(list);
    },[list])

    return (
        <div className="min-h-full flex justify-center items-center p-4">
            <div className="w-full max-w-2xl">
                <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                    Deleted Tasks
                </h1>
                
                {tasks.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🗑️</div>
                        <p className="text-slate-500 text-lg">No deleted tasks</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {tasks.map((item, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:bg-slate-50"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 text-slate-700">
                                            <span className="text-sm font-medium text-slate-500">
                                                {item.taskCompletionDate}
                                            </span>
                                            <span className="text-lg font-medium">
                                                {item.taskName}
                                            </span>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => handleDelete(item.taskName)}
                                        className="border px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-300 transition-colors duration-200 shadow-sm hover:shadow-md"
                                    >
                                        Delete
                                    </button>
                                    <button 
                                        onClick={() => handleRestore(item.taskName, item.taskCompletionDate)}
                                        className="border px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-300 transition-colors duration-200 shadow-sm hover:shadow-md"
                                    >
                                        Restore
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}