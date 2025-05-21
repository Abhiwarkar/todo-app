import ToDoItem from './TodoItem';
import '../styles/ToDoList.css';

function ToDoList({ todos, deleteTodo, toggleComplete, editTodo }) {
  // If there are no todos, display a message
  if (todos.length === 0) {
    return (
      <div className="todo-list-empty">
        <p>No tasks yet. Add a task to get started!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {/* Map through todos array to create ToDoItem components */}
      {todos.map(todo => (
        <ToDoItem 
          key={todo.id} // Use unique ID as key
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default ToDoList;