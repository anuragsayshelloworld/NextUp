import {
  Home,
  ListTodo,
  CheckCircle,
  Trash2,
  Archive,
  CircleDashed,
  Star,
  BarChart2,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();
  const current = location.pathname;

  return (
    <div className="flex flex-col gap-2 p-4 text-sm text-gray-800">

      <div
        onClick={() => navigate("/")}
        className={`flex items-center justify-between px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer ${current === "/" ? "bg-gray-100" : ""}`}
      >
        <div className="flex items-center gap-2">
          <Home size={16} />
          <span>Home</span>
        </div>
        <kbd className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded border">Ctrl + H</kbd>
      </div>

      <div
        onClick={() => navigate("/alltasks")}
        className={`flex items-center justify-between px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer ${current === "/alltasks" ? "bg-gray-100" : ""}`}
      >
        <div className="flex items-center gap-2">
          <ListTodo size={16} />
          <span>Tasks</span>
        </div>
        <kbd className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded border">Ctrl + T</kbd>
      </div>

      <div
        onClick={() => navigate("/completed")}
        className={`flex items-center justify-between px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer ${current === "/completed" ? "bg-gray-100" : ""}`}
      >
        <div className="flex items-center gap-2">
          <CheckCircle size={16} />
          <span>Completed</span>
        </div>
        <kbd className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded border">Ctrl + C</kbd>
      </div>

      <div
        onClick={() => navigate("/deleted")}
        className={`flex items-center justify-between px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer ${current === "/deleted" ? "bg-gray-100" : ""}`}
      >
        <div className="flex items-center gap-2">
          <Trash2 size={16} />
          <span>Deleted</span>
        </div>
        <kbd className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded border">Ctrl + D</kbd>
      </div>

      <div
        onClick={() => navigate("/archived")}
        className={`flex items-center justify-between px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer ${current === "/archived" ? "bg-gray-100" : ""}`}
      >
        <div className="flex items-center gap-2">
          <Archive size={16} />
          <span>Archived</span>
        </div>
        <kbd className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded border">Ctrl + A</kbd>
      </div>

      <div
        onClick={() => navigate("/incomplete")}
        className={`flex items-center justify-between px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer ${current === "/incomplete" ? "bg-gray-100" : ""}`}
      >
        <div className="flex items-center gap-2">
          <CircleDashed size={16} />
          <span>Incomplete</span>
        </div>
        <kbd className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded border">Ctrl + I</kbd>
      </div>

      <div
        onClick={() => navigate("/bucket")}
        className={`flex items-center justify-between px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer ${current === "/bucket" ? "bg-gray-100" : ""}`}
      >
        <div className="flex items-center gap-2">
          <Star size={16} />
          <span>Bucket List</span>
        </div>
        <kbd className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded border">Ctrl + B</kbd>
      </div>

      <div
        onClick={() => navigate("/stats")}
        className={`flex items-center justify-between px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer ${current === "/stats" ? "bg-gray-100" : ""}`}
      >
        <div className="flex items-center gap-2">
          <BarChart2 size={16} />
          <span>Statistics</span>
        </div>
        <kbd className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded border">Ctrl + S</kbd>
      </div>

    </div>
  );
}
