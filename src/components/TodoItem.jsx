import { useState } from 'react';
import '../styles/ToDoItem.css';

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  // State to track if item is in edit mode
  const [isEditing, setIsEditing] = useState(false);
  // State to track the edited text
  const [editText, setEditText] = useState(todo.text);

  // Handle the edit form submission
  const handleEdit = (e) => {
    e.preventDefault();
    
    if (!editText.trim()) return; // Prevent empty todos
    
    editTodo(todo.id, editText.trim());
    setIsEditing(false); // Exit edit mode
  };

  // Cancel editing
  const handleCancel = () => {
    setEditText(todo.text); // Reset to original text
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        // Edit mode
        <form onSubmit={handleEdit} className="edit-form">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
            autoFocus
          />
          <div className="edit-buttons">
            <button type="submit" className="btn btn-success">Save</button>
            <button 
              type="button" 
              onClick={handleCancel} 
              className="btn btn-danger"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        // View mode
        <>
          <div className="todo-content">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="todo-checkbox"
            />
            <span className="todo-text">{todo.text}</span>
          </div>
          
          <div className="todo-actions">
            <button 
              onClick={() => setIsEditing(true)} 
              className="btn btn-warning"
              disabled={todo.completed}
            >
              Edit
            </button>
            <button 
              onClick={() => deleteTodo(todo.id)} 
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ToDoItem;