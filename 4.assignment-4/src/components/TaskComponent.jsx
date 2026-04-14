import { useState } from "react";
import { db } from "../firebase"; // 1. Import db config
import { doc, deleteDoc } from "firebase/firestore"; // 2. Import delete methods

function TaskComponent({ tasks }) { // onDelete prop is no longer needed
  const [searchTerm, setSearchTerm] = useState("");
  const [isSorted, setIsSorted] = useState(false);

  // ... filter and sort logic stays exactly the same ...
  let displayedTasks = tasks.filter((task) =>
    task.taskName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isSorted) {
    displayedTasks = [...displayedTasks].sort((a, b) => a.taskName.localeCompare(b.taskName));
  }

  // delete a task
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await deleteDoc(doc(db, "tasks", id));
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  };

  return (
    <div>
      <h3>Task List:</h3>
      <input
        type="text"
        placeholder="Search Tasks..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setIsSorted(!isSorted)}>
        {isSorted ? "Unsort" : "Sort by Name"}
      </button>

      <ul>
        {displayedTasks.map((task) => (
          <li key={task.id}>
            <strong>{task.taskName}</strong>: {task.description}
            <button onClick={() => handleDelete(task.id)} style={{ color: "red" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskComponent;