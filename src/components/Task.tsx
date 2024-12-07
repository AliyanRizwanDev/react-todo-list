import { SetStateAction, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";

interface Props {
  taskName: string;
  setTask: React.Dispatch<SetStateAction<{ id: string; name: string }[]>>;
  tasks: {
    id: string;
    name: string;
  }[];
}

export default function Task({ taskName, setTask, tasks }: Props) {
  const [edit, setEdit] = useState(false);
  const [editTask, setEditTask] = useState(taskName);

  
  
  const handleEdit = () => {
    setTask(
      tasks.map((item) =>
        item.name === taskName ? { ...item, name: editTask } : item
      )
    );
    setEdit(false);
  };
  return (
    <div className="bg-[#845afc] mx-8 px-4 py-2 rounded text-white flex justify-between items-center">
      {edit ? (
        <div className="flex">
          <input
            type="text"
            className=" bg-transparent  text-white border-2 px-2 border-white"
            onChange={(e) => {
              setEditTask(e.target.value);
            }}
            value={editTask}
          />
          <button
            className="bg-[#191742] text-white text-xs px-3 py-1 font-medium"
            onClick={handleEdit}
          >
            Edit Task
          </button>
        </div>
      ) : (
        <h1 className="text-md">{taskName}</h1>
      )}
      <div className="flex gap-2">
        <MdEditSquare
          className="cursor-pointer hover:text-green-300 transition-all"
          onClick={() => setEdit((prev) => !prev)}
        />
        <FaTrash
          className="cursor-pointer hover:text-red-300 transition-all"
          onClick={() =>
            setTask(
              tasks.filter((item) => {
                return item.name != taskName;
              })
            )
          }
        />
      </div>
    </div>
  );
}
