import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { getTodos, createTodo, updateTodo, deleteTodo } from './api';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await getTodos();
    setTodos(response.data);
  };

  const addTodo = async (todo) => {
    const response = await createTodo(todo);
    setTodos([...todos, response.data]);
  };

  const editTodo = async (updatedTodo) => {
    const response = await updateTodo(updatedTodo.id, updatedTodo);
    setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? response.data : todo)));
    setSelectedTodo(null);
  };

  const toggleComplete = async (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const updatedTodo = { ...todo, completed: !todo.completed };
    const response = await updateTodo(id, updatedTodo);
    setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
  };

  const removeTodo = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const selectTodo = (todo) => {
    setSelectedTodo(todo);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} editTodo={editTodo} selectedTodo={selectedTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
        selectTodo={selectTodo}
      />
    </div>
  );
};

export default App;
