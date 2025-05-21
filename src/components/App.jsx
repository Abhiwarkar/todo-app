import { useState, useEffect } from 'react';
import Header from './Header';
import ToDoList from './TodoList';
import '../styles/App.css';

function App() {
  // State for todos with a default empty array
  const [todos, setTodos] = useState(() => {
    // Initialize from localStorage if available
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  // State for new todo input
  const [newTodo, setNewTodo] = useState('');
  
  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = (e) => {
    e.preventDefault();
    
    if (!newTodo.trim()) return; // Prevent empty todos
    
    const newTodoItem = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false
    };
    
    setTodos([...todos, newTodoItem]);
    setNewTodo(''); // Clear input after adding
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle completed status
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Edit todo text
  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="app">
      <Header />
      
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="btn btn-primary add-button">Add</button>
      </form>
      
      <ToDoList 
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
      
      <div className="todo-stats">
        <p>Total tasks: {todos.length}</p>
        <p>Completed: {todos.filter(todo => todo.completed).length}</p>
        <p>Remaining: {todos.filter(todo => !todo.completed).length}</p>
      </div>
    </div>
  );
}

export default App;