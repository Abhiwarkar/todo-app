import '../styles/Header.css';

function Header() {
  // Get current date for header
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);
  
  return (
    <header className="header">
      <h1>Todo List</h1>
      <p className="date">{formattedDate}</p>
    </header>
  );
}

export default Header;