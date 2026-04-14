import { useState } from "react";
import { db } from "../firebase"; // import  db config
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // import firestore methods
import { useAuth } from "../AuthContext"; // import useAuth to get user.uid

function TaskForm() { 
    const [taskName, setTaskName] = useState("");
    const [desc, setDesc] = useState("");
    const { user } = useAuth(); // get the logged-in user

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!taskName || !desc) {
            alert("Please fill in both fields!");
            return;
        }

        try {
            // 5. adding a task
            await addDoc(collection(db, "tasks"), {
                taskName: taskName,
                description: desc,
                userId: user.uid,
                createdAt: serverTimestamp() // track time
            });

            setTaskName(""); 
            setDesc(""); 
        } catch (error) {
            console.error("Error adding task:", error);
        }
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