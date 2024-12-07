import { useEffect, useState } from "react";
import Task from "./components/task";

function App() {
  const taskData = [
    { id: "1", name: "Eat Milk" },
    { id: "2", name: "Complete Homework" },
    { id: "3", name: "Buy Groceries" },
    { id: "4", name: "Walk The Dog" },
    { id: "5", name: "Read A Book" },
    { id: "6", name: "Clean The Room" },
  ];

  const [tasks, setTasks] = useState(taskData);
  const [input, setInput] = useState("");

  useEffect(() => {}, [tasks]);

  const handleAdd = () => {
    setTasks([{ id: `${Math.random()}`, name: input }, ...tasks]);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="bg-[#191742] py-8 w-[500px] flex flex-col rounded-md">
        <h1 className="text-white text-4xl text-center my-6">
          Get Things Done!
        </h1>
        <div className="flex w-full px-8">
          <input
            type="text"
            className="flex-1 bg-transparent placeholder:text-white text-white placeholder:opacity-30 border-2 py-1 px-4 border-[#845afc] focus:outline-none"
            placeholder="What is the task today?"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            className="bg-[#845afc] text-white text-sm px-3 py-2 font-medium"
            onClick={handleAdd}
          
          >
            Add Task
          </button>
        </div>

        <div className="flex-col flex gap-4 my-8 ">
          {tasks.map((item) => (
            <Task
              key={item.id}
              taskName={item.name}
              setTask={setTasks}
              tasks={tasks}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
