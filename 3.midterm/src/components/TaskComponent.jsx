import { useState } from "react";

function TaskComponent({ tasks, onDelete }) {
  // task 3: state for search text and sort toggle
  const[searchTerm, setSearchTerm] = useState("");
  const[isSorted, setIsSorted] = useState(false);

  // task 3: filter task list based on user input
  let displayedTasks = tasks.filter((task) =>
    task.taskName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // task 3: if sorting active -> sort filtered list alphabetically
  if (isSorted) {
    displayedTasks = [...displayedTasks].sort((a, b) => a.taskName.localeCompare(b.taskName));
  }

  // task 5: confirm deletion
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      onDelete(id);
    }
  };

  return (
    <div>
      <h3>Task List:</h3>
      {/* search input */}
      <input
        type="text"
        placeholder="Search Tasks..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setIsSorted(!isSorted)}>
        {isSorted ? "Unsort" : "Sort by Name"}
      </button>

      {/* task list */}
      <ul>
        {displayedTasks.map((task) => (
          <li key={task.id}>
            <strong>{task.taskName}</strong>: {task.description}
            {/* delete button passed via props */}
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
