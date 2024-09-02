import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/tasks')
      .then(response => setTasks(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className=" w-[40%] overflow-y-auto h-96 mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold mb-6 mt-3 text-center text-gray-800">Task List</h2>
      <ul className="space-y-4 flex flex-col justify-center items-center">
        {tasks.map(task => (
          <li key={task._id} className=" bg-white rounded-lg w-[80%] p-6 shadow-md transition  transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-gray-700">{task.title}</h3>
            <p className="mt-2 text-gray-600">{task.description}</p>
            <p className="mt-2 text-gray-500">Status: <span className={`font-medium ${task.status === 'Done' ? 'text-green-600' : task.status === 'In Progress' ? 'text-yellow-600' : 'text-red-600'}`}>{task.status}</span></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
