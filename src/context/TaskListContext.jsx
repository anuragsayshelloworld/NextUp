import { createContext, useEffect, useState } from 'react';

const TaskListContext = createContext();
export default TaskListContext;

export function TaskListProvider({ children }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const LIST = JSON.parse(localStorage.getItem("taskList")) || [];
    setList(LIST);
    setLoading(false);
  }, []);

  return (
    <TaskListContext.Provider value={{ list, setList, loading }}>
      {children}
    </TaskListContext.Provider>
  );
}
