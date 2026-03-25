import { useState } from "react";
import Greeting from "./components/Greeting";
import UserInfo from "./components/UserInfo";
import TaskComponent from "./components/TaskComponent";
import Counter from "./components/Counter";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, taskName: "Study React", description: "Review Context and Update" },
    { id: 2, taskName: "Midterm", description: "Complete the exam" }
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      {/* task 1: improve greeting component with props & jsx */}
      <h1>Task 1:</h1>
      <Greeting username="Alice" />

      {/* task 2: add state and user interaction to userinfo component */}
      <h1>Task 2:</h1>
      <UserInfo />

      {/* task 3, 4, 5: task list with filtering sorting, form, and delete functionality with confirmation*/}
      <h1>Task 3, 4, & 5:</h1>
      <TaskForm onAddTask={addTask} />
      <TaskComponent tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
