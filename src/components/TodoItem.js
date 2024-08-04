import React from 'react';

const TodoItem = ({ todo, toggleComplete, removeTodo, selectTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span onClick={() => selectTodo(todo)}>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
