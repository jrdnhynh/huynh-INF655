import Greeting from "./components/Greeting";
import UserInfo from "./components/UserInfo";
import TaskComponent from "./components/TaskComponent";

function App() {
  const tasks = [
    "Finish React assignment",
    "Review JSX syntax",
    "Practice class components",
    "Commit project to GitHub"
  ];

  return (
    <div>
      <Greeting />
      <UserInfo />
      <TaskComponent tasks={tasks} />
    </div>
  );
}

export default App;
