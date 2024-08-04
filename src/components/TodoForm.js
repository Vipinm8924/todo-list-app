import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, editTodo, selectedTodo }) => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (selectedTodo) {
      setText(selectedTodo.text);
      setDescription(selectedTodo.description);
    }
  }, [selectedTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTodo) {
      editTodo({
        ...selectedTodo,
        text,
        description,
      });
    } else {
      addTodo({
        text,
        description,
        completed: false,
        timestamp: new Date().toISOString(),
      });
    }
    setText('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
      ></textarea>
      <button type="submit">{selectedTodo ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TodoForm;
