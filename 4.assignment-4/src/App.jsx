import { useState, useEffect } from "react";
import { db } from './firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useAuth } from "./AuthContext"; // Use the context from the lecture

// Components
import Greeting from "./components/Greeting";
import UserInfo from "./components/UserInfo";
import TaskComponent from "./components/TaskComponent";
import TaskForm from "./components/TaskForm";
import AuthForm from "./components/AuthForm"; // Your new Login/Signup component

function App() {
  const [tasks, setTasks] = useState([]); // Start with an empty array
  const { user, logout } = useAuth(); // Get user status from Context

  // Task 3: Fetch and display tasks only for the logged-in user
  useEffect(() => {
    if (user) {
      // Create a query to only get tasks where userId matches the current user
      const q = query(
        collection(db, "tasks"), 
        where("userId", "==", user.uid)
      );

      // Real-time listener: updates UI automatically when Firestore changes
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const tasksData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTasks(tasksData);
      });

      return () => unsubscribe(); // Cleanup listener on logout
    }
  }, [user]);

  // If no user is logged in, show the Login/Signup form
  if (!user) {
    return <AuthForm />;
  }

  return (
    <div>
      <header>
        <h1>Task Manager</h1>
        <button onClick={logout}>Logout</button>
      </header>

      <p>Welcome, <strong>{user.email}</strong></p>

      {/* task 1 & 2: firebase setup and user auth */}
      <Greeting username={user.displayName || "User"} />
      <UserInfo />

      <hr />

      {/* task 3 & 4: firestore Integration */}
      <h2>Your Tasks</h2>
      <TaskForm /> 
      <TaskComponent tasks={tasks} />
    </div>
  );
}

export default App;