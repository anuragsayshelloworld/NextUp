import { useEffect, useState, useContext } from "react";
import useLocalstorage from "../hooks/useLocalstorage";
import AuthContext from "../context/AuthContext";
import TaskListContext from "../context/TaskListContext";

export default function Archived() {
  const list = useLocalstorage("archived");
  const [tasks, setTasks] = useState([]);
  const { user } = useContext(AuthContext);
  const { setList } = useContext(TaskListContext);

  const handleUnarchive = (taskName, taskCompletionDate) => {
    const allData = JSON.parse(localStorage.getItem("taskList")) || [];
    const newTask = {
      taskName,
      taskCompletionDate,
      user,
    };
    allData.push(newTask);
    localStorage.setItem("taskList", JSON.stringify(allData));
    setList(allData);

    const updatedArchivedData = tasks.filter((item) => item.taskName !== taskName);
    setTasks(updatedArchivedData);
    localStorage.setItem("archived", JSON.stringify(updatedArchivedData));
  };

  useEffect(() => {
    setTasks(list);
  }, [list]);

  return (
    <div
      className="p-4 max-w-4xl mx-auto bg-white rounded-md"
      style={{ maxHeight: "400px", overflowY: "auto" }}
    >
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No archived tasks.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tasks.map((item) => (
            <div
              key={item.taskName}
              className="flex flex-col justify-between border border-gray-600 rounded-md p-4 shadow-sm"
            >
              <div>
                <p className="font-medium text-gray-800">{item.taskName}</p>
                <p className="text-sm text-gray-500">{item.taskCompletionDate}</p>
              </div>
              <button
                onClick={() => handleUnarchive(item.taskName, item.taskCompletionDate)}
                className="mt-4 self-start text-sm px-3 py-1 bg-gray-800 hover:bg-gray-900 text-white rounded-md transition"
                aria-label={`Unarchive ${item.taskName}`}
              >
                Unarchive
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
