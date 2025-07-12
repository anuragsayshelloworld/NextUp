import { useContext, useEffect, useState } from "react";
import TaskListContext from '../context/TaskListContext';
export default function Incomplete() {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [newDate, setNewDate] = useState("");
  const {setList} = useContext(TaskListContext);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("incomplete")) || [];
    setTasks(data);
  }, []);

  const handleReassign = (index) => {
    const taskToReassign = tasks[index];
    const updatedIncomplete = tasks.filter((_, i) => i !== index);
    const taskList = JSON.parse(localStorage.getItem("taskList")) || [];

    const updatedTask = {
      ...taskToReassign,
      taskCompletionDate: newDate,
    };
    
    taskList.push(updatedTask);
    setList(taskList);

    localStorage.setItem("incomplete", JSON.stringify(updatedIncomplete));
    localStorage.setItem("taskList", JSON.stringify(taskList));
    setTasks(updatedIncomplete);
    setEditIndex(null);
    setNewDate("");
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Incomplete Tasks</h2>

      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No incomplete tasks found.</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex flex-col border p-3 rounded shadow-sm"
            >
              <div className="mb-2">
                <p className="font-medium">{task.taskName}</p>
                <p className="text-sm text-gray-500">
                  Original Date: {task.taskCompletionDate}
                </p>
              </div>

              {editIndex === index ? (
                <div className="flex gap-2 items-center">
                  <input
                    type="date"
                    className="border px-2 py-1 rounded"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                  <button
                    onClick={() => handleReassign(index)}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    disabled={!newDate}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => {
                      setEditIndex(null);
                      setNewDate("");
                    }}
                    className="text-gray-600 text-sm"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setEditIndex(index)}
                  className="self-start mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Reassign Task
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
