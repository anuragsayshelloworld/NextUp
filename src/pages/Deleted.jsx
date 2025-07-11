import { useEffect, useState } from "react";
import useLocalstorage from "../hooks/useLocalstorage"

export default function Deleted(){
    const [tasks, setTasks] = useState([]);
    const list = useLocalstorage("deleted");

    function handleDelete(taskName){
     const updatedList = tasks.filter((item)=>item.taskName !== taskName);
     setTasks(updatedList);
     localStorage.setItem("deleted", JSON.stringify(updatedList));   
    }
    useEffect(()=>{
      setTasks(list);
    },[list])

    return <div className="h-full w-full flex justify-center items-center">
             <div className="border">
                {tasks.map((item,index)=>{
                    return <div className="border" key={index}>{item.taskName} - <button onClick={()=>handleDelete(item.taskName)}>delete forever</button></div>
                })}
             </div>
           </div>;
}