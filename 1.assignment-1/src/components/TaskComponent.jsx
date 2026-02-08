function TaskComponent({ tasks }) {
  function getRandomTask() {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    return tasks[randomIndex];
  }

  return (
    <div>
      <h3>Random Task:</h3>
      <h3>{getRandomTask()}</h3>
    </div>
  );
}

export default TaskComponent;
