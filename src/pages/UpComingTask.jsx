import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { format, addDays } from "date-fns";

export default function UpComingTask() {
  const user = "anurag"; // pretend this comes from context
  const [filteredTasksByDay, setFilteredTasksByDay] = useState([[], [], []]);

  useEffect(() => {
    const taskList = JSON.parse(localStorage.getItem("taskList")) || [];

    const buckets = [[], [], []];
    const today = new Date();

    for (let i = 0; i < 3; i++) {
      const targetDate = format(addDays(today, i), "yyyy-MM-dd");

      taskList.forEach((task) => {
        if (task.user !== user) return;
        if (task.taskCompletionDate === targetDate) {
          buckets[i].push(task);
        }
      });
    }

    setFilteredTasksByDay(buckets);
  }, []);

  const labels = ["Today", "Tomorrow", "Day After Tomorrow"];

  return (
    <div className="flex w-full border-t border-gray-200 divide-x divide-gray-200">
      {filteredTasksByDay.map((tasks, index) => (
        <div key={index} className="flex-1 flex flex-col p-4">
          <p className="text-sm font-semibold text-gray-700 mb-3">{labels[index]}</p>

          {tasks.length === 0 ? (
            <p className="text-xs text-gray-400 italic">No tasks</p>
          ) : (
            tasks.map((task, i) => (
              <div key={i} className="flex items-center gap-2 mb-2">
                <CheckCircle size={16} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-800">{task.taskName}</span>
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
}
