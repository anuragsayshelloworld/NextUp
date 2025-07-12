import { useContext, useEffect, useState } from "react";
import { Trash2, Pencil, CheckCircle, Archive } from "lucide-react";
import AuthContext from '../context/AuthContext';
import TaskListContext from '../context/TaskListContext';
import { format, subDays } from 'date-fns';

export default function AllTasks() {
const { user } = useContext(AuthContext);
const { list, setList } = useContext(TaskListContext);
const [search, setSearch] = useState("");
const [searchDate, setSearchDate] = useState("");
const [editIndex, setEditIndex] = useState(null);
const [editValue, setEditValue] = useState("");
const [editDate, setEditDate] = useState("");

const requiredList = list
.filter((item) => item.user === user)
.sort((a, b) => new Date(b.createdAt || b.taskCompletionDate) - new Date(a.createdAt || a.taskCompletionDate));

useEffect(() => {
const yesterday = format(subDays(new Date(), 1), 'yyyy-MM-dd');
const stillValid = [];
const movedToIncomplete = JSON.parse(localStorage.getItem("incomplete")) || [];
let changed = false;

const tasksToMove = requiredList.filter(task => 
task.taskCompletionDate === yesterday &&
!movedToIncomplete.some(t => t.taskName === task.taskName && t.taskCompletionDate === task.taskCompletionDate)
);

if (tasksToMove.length > 0) {
movedToIncomplete.push(...tasksToMove);
changed = true;
}

requiredList.forEach(task => {
if (task.taskCompletionDate !== yesterday) {
stillValid.push(task);
}
});

if (changed) {
localStorage.setItem("incomplete", JSON.stringify(movedToIncomplete));
localStorage.setItem("taskList", JSON.stringify(stillValid));
setList(stillValid);
}
}, [list, user, setList, requiredList]);


const updateStorageAndContext = (filtered) => {
localStorage.setItem("taskList", JSON.stringify(filtered));
setList(filtered);
};

const deleteTask = (task) => {
const updatedList = list.filter((t) => t !== task);
const deleted = JSON.parse(localStorage.getItem("deleted")) || [];
deleted.push(task);
localStorage.setItem("deleted", JSON.stringify(deleted));
updateStorageAndContext(updatedList);
};

const completeTask = (task) => {
const updatedList = list.filter((t) => t !== task);
const completed = JSON.parse(localStorage.getItem("completed")) || [];
completed.push(task);
localStorage.setItem("completed", JSON.stringify(completed));
updateStorageAndContext(updatedList);
};

const archiveTask = (task) => {
const updatedList = list.filter((t) => t !== task);
const archived = JSON.parse(localStorage.getItem("archived")) || [];
archived.push(task);
localStorage.setItem("archived", JSON.stringify(archived));
updateStorageAndContext(updatedList);
};

const startEdit = (index) => {
setEditIndex(index);
setEditValue(requiredList[index].taskName);
setEditDate(requiredList[index].taskCompletionDate);
};

const saveEdit = (index) => {
const original = requiredList[index];
const updatedList = list.map(task => {
if (task === original) {
return { ...task, taskName: editValue, taskCompletionDate: editDate };
}
return task;
});
updateStorageAndContext(updatedList);
setEditIndex(null);
setEditValue("");
setEditDate("");
};

const filteredTasks = requiredList.filter(task => {
const nameMatch = task.taskName.toLowerCase().includes(search.toLowerCase());
const dateMatch = searchDate ? task.taskCompletionDate === searchDate : true;
return nameMatch && dateMatch;
});


return (
<div className="p-4 max-w-4xl mx-auto relative">
<div className="absolute top-0 right-0 flex gap-2 z-10 p-2">
<input type="text" placeholder="Search by name..."
value={search}
onChange={(e) => setSearch(e.target.value)}
className="px-3 py-1 border rounded"
/>
<input
type="date"
value={searchDate}
onChange={(e) => setSearchDate(e.target.value)}
className="px-3 py-1 border rounded"
/>
</div>

<div className="mt-16 max-h-[400px] overflow-y-auto rounded p-2">
{filteredTasks.length === 0 ? (
<p className="text-center text-gray-500 italic">No tasks found</p>
) : (
<ul className="space-y-2">
{filteredTasks.map((item, index) => (
<li
key={index}
className="flex justify-between items-center border px-3 py-2 rounded hover:bg-gray-50"
>
<div>
{editIndex === index ? (
<>
<input
className="border px-2 py-1 rounded mb-1 w-full"
value={editValue}
onChange={(e) => setEditValue(e.target.value)}
autoFocus
/>
<input
type="date"
className="border px-2 py-1 rounded w-full"
value={editDate}
onChange={(e) => setEditDate(e.target.value)}
onBlur={() => saveEdit(index)}
/>
</>
) : (
<>
<p className="font-medium">{item.taskName}</p>
<p className="text-xs text-gray-500">{item.taskCompletionDate}</p>
</>
)}
</div>
<div className="flex gap-2 items-center">
<Pencil
size={16}
className="text-gray-800 cursor-pointer"
onClick={() => startEdit(index)}
/>
<CheckCircle
size={16}
className="text-green-800 cursor-pointer"
onClick={() => completeTask(item)}
/>
<Archive
size={16}
className="text-purple-800 cursor-pointer"
onClick={() => archiveTask(item)}
/>
<Trash2
size={16}
className="text-red-800 cursor-pointer"
onClick={() => deleteTask(item)}
/>
</div>
</li>
))}
</ul>
)}
</div>
</div>
);
}
