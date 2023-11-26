import React, { useState, useEffect } from 'react';
import TodoItem from '../pages/Components/TodoItem';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (title.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        title,
        description,
      };
      setTasks([...tasks, newTask]);
      setTitle('');
      setDescription('');
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">To Do -List</h1>
      <div className="mb-4 mx-2  space-y-3">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-gray-300 border rounded-lg p-2 mr-2 text-black"
        />
        <input
          type="text"
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-gray-300 border rounded-lg p-2 mr-2 text-black"
        />
        <button onClick={handleAddTask} className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Add Task
        </button>
      </div>
      <div className="divide-y">
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} handleDelete={handleDeleteTask} />
        ))}
      </div>
    </div>
  );
};

export default Home;
