import Greeting from "./components/Greeting";
import UserInfo from "./components/UserInfo";
import TaskComponent from "./components/TaskComponent";
import Counter from "./components/Counter";
import TaskForm from "./components/TaskForm";

function App() {
  const tasks = [
    "Finish React assignment",
    "Review JSX syntax",
    "Practice class components",
    "Commit project to GitHub",
    "Submit link to Blackboard"
  ];

  const handleAlert = () => {
    alert("Button clicked in UserInfo!")
  };

  return (
    <div>
      {/* task 1: render twice with different names */}
      <h1>Task 1:</h1>
      <Greeting name="Alice" />
      <Greeting name="Bob" />

      {/* task 2: state component counter */}
      <h1>Task 2:</h1>
      <Counter />

      {/* task 3: map through tasks with keys */}
      <h1>Task 3:</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      {/* task 4: pass function as a prop */}
      <h1>Task 4:</h1>
      <UserInfo handleClick={handleAlert} />

      {/* task 5: controlled form */}
      <h1>Task 5:</h1>
      <TaskForm />
    </div>
  );
}

export default App;
