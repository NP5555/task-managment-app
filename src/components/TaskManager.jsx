import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTask from "./AddTask"
import TaskList from "./TaskList"

// Parent Component
const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/tasks')
      .then(response => setTasks(response.data))
      .catch(err => console.error(err));
  }, []);

  const handleTaskAdded = () => {
    axios.get('http://localhost:4000/tasks')
      .then(response => setTasks(response.data))
      .catch(err => console.error(err));
  };

  return (
    <div className="flex p-12">
      <AddTask onTaskAdded={handleTaskAdded} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskManager;
