import React, { useState } from 'react';
import './TodoApp.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleEditTodo = (index) => {
    setEditingIndex(index);
    setEditingText(todos[index]);
  };

  const handleSaveTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos[editingIndex] = editingText;
    setTodos(updatedTodos);
    setEditingIndex(null);
    setEditingText('');
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="input-group">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
        />
        <button className="add" onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button className="save" onClick={handleSaveTodo}>Save</button>
              </>
            ) : (
              <>
                <span>{todo}</span>
                <button className="edit" onClick={() => handleEditTodo(index)}>Edit</button>
                <button className="delete" onClick={() => handleDeleteTodo(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
