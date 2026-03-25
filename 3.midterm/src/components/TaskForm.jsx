import { useState } from "react";

function TaskForm({ onAddTask }) {
    const [taskName, setTaskName] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!taskName || !desc) {
            alert("Please fill in both fields!");
            return;
        }

        onAddTask({ taskName, description: desc, id: Date.now() });

        setTaskName(""); // clears the input
        setDesc(""); // clears the input
    };

    return (
      <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Task Name" 
            value={taskName} 
            onChange={(e) => setTaskName(e.target.value)} 
        />

        <input 
            type="text" 
            placeholder="Description" 
            value={desc} 
            onChange={(e) => setDesc(e.target.value)} 
        />
        <button type="submit">Add Task</button>
    </form>
    );
}

export default TaskForm;