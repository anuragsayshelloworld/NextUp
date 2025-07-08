import { Home, ListTodo, CheckCircle, Trash2, Archive, CircleDashed, Star, BarChart2 } from "lucide-react";

export default function Menu() {
  return (
    <div className="flex flex-col gap-2 p-4 text-sm text-gray-800">
      
      <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
        <div className="flex items-center gap-2">
          <Home size={16} />
          <span>Home</span>
        </div>
        <kbd className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded border">Ctrl + H</kbd>
      </div>

      <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
        <div className="flex items-center gap-2">
          <ListTodo size={16} />
          <span>Tasks</span>
        </div>
        <kbd className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded border">Ctrl + T</kbd>
      </div>

      <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
        <div className="flex items-center gap-2">
          <CheckCircle size={16} />
          <span>Completed</span>
        </div>
        <kbd className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded border">Ctrl + C</kbd>
      </div>

      <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
        <div className="flex items-center gap-2">
          <Trash2 size={16} />
          <span>Deleted</span>
        </div>
        <kbd className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded border">Ctrl + D</kbd>
      </div>

      <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
        <div className="flex items-center gap-2">
          <Archive size={16} />
          <span>Archived</span>
        </div>
        <kbd className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded border">Ctrl + A</kbd>
      </div>

      <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
        <div className="flex items-center gap-2">
          <CircleDashed size={16} />
          <span>Incomplete</span>
        </div>
        <kbd className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded border">Ctrl + I</kbd>
      </div>

      <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
        <div className="flex items-center gap-2">
          <Star size={16} />
          <span>Bucket List</span>
        </div>
        <kbd className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded border">Ctrl + B</kbd>
      </div>

      <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
        <div className="flex items-center gap-2">
          <BarChart2 size={16} />
          <span>Statistics</span>
        </div>
        <kbd className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded border">Ctrl + S</kbd>
      </div>

    </div>
  );
}
