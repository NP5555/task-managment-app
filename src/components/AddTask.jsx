import React, { useState } from 'react';
import axios from 'axios';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/tasks', { title, description, status })
      .then(response => {
        console.log('Task added:', response.data);
        setTitle('');
        setDescription('');
        setStatus('To Do');
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="max-w-4xl w-[40%] h-3/6 p-5 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Add Task</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        ></textarea>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button
          type="submit"
          className="w-full py-3 px-5 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 duration-300 ease-in-out"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
