import { useEffect, useState, useContext } from "react";
import { CheckCircle } from "lucide-react";
import { format, addDays } from "date-fns";
import AuthContext from "../context/AuthContext";
import TaskListContext from "../context/TaskListContext";

export default function UpComingTask() {
  const { list, loading } = useContext(TaskListContext);
  const { user } = useContext(AuthContext);
  const [filteredTasksByDay, setFilteredTasksByDay] = useState([[], [], []]);

  useEffect(() => {
    if (loading || !user) return;

    const buckets = [[], [], []];
    const today = new Date();

    for (let i = 0; i < 3; i++) {
      const targetDate = format(addDays(today, i), "yyyy-MM-dd");

      list.forEach((task) => {
        if (task.user !== user) return;
        if (task.taskCompletionDate === targetDate) {
          buckets[i].push(task);
        }
      });
    }

    setFilteredTasksByDay(buckets);
  }, [user, list, loading]);

  const labels = ["Today", "Tomorrow", "Day After Tomorrow"];

  if (loading) {
    return <p className="p-4 text-sm text-gray-500">Loading tasks...</p>;
  }

  return (
    <div className="flex w-full border-t border-gray-200 divide-x divide-gray-200">
      {filteredTasksByDay.map((tasks, index) => (
        <div key={index} className="flex-1 flex flex-col p-4">
          <p className="text-sm font-semibold text-gray-700 mb-3">
            {labels[index]}
          </p>

          {tasks.length === 0 ? (
            <p className="text-xs text-gray-400 italic">No tasks</p>
          ) : (
            tasks.map((task, i) => (
              <div key={i} className="flex items-center gap-2 mb-2">
                <CheckCircle size={16} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-800">
                  {task.taskName}
                </span>
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
}
