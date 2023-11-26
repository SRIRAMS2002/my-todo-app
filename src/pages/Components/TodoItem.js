import React from 'react';









    const TodoItem = ({ task, handleDelete }) => {
        if (!task || !task.title) {
          return null; // Or display an error message
        }
  return (
    
        
    <div className="flex items-center justify-between p-2 border-b">
       
      <div>
        <p className="font-medium">{task.title}</p>
        <p className="text-sm text-gray-500">{task.description}</p>
      </div>
      <button onClick={() => handleDelete(task.id)} className="text-red-500 hover:text-red-700">
        Delete
      </button>
    </div>
 
  )
}

export default TodoItem


