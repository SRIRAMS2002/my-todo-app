import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div className="mt-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;
