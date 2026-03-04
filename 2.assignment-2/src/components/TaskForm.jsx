import { useState } from "react";

function TaskForm() {
    const [taskName, setTaskName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("New Task Submitted:", taskName);
        setTaskName(""); // clears the input
    };

    return (
      <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Enter Task Name" 
            value={taskName} 
            onChange={(e) => setTaskName(e.target.value)} 
        />
        <button type="submit">Add Task</button>
    </form>
    );
}

export default TaskForm;