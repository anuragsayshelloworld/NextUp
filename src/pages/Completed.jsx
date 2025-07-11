import { useCallback, useEffect, useState } from "react";
import useLocalstorage from "../hooks/useLocalstorage";

export default function Completed() {
const list = useLocalstorage("completed");
const [tasks, setTasks] = useState([]);

const handleRemove = useCallback((taskName) => {
const updatedList = tasks.filter((item) => item.taskName !== taskName);
setTasks(updatedList);
localStorage.setItem("completed", JSON.stringify(updatedList));
}, [tasks]);

useEffect(() => {
setTasks(list);
}, [list]);

return (
<div className="p-4 max-w-3xl mx-auto">
<h1 className="text-2xl font-semibold text-slate-800 mb-6">Completed Tasks</h1>

<div className="h-[400px] overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 rounded-md">
{tasks.length === 0 ? (
<p className="text-gray-500">No completed tasks.</p>
) : (
tasks.map((item, index) => (
<div
key={index}
className="flex items-center justify-between border rounded-md p-3 bg-white shadow-sm hover:shadow-md transition-all"
>
<div className="text-sm text-gray-700">
<span className="font-medium">{item.taskName}</span>{" "}
<span className="text-gray-400">({item.taskCompletionDate})</span>
</div>
<button
onClick={() => handleRemove(item.taskName)}
className="border p-2 text-sm rounded hover:bg-gray-200 transition"
>
Remove
</button>
</div>
))
)}
</div>
</div>
);
}
