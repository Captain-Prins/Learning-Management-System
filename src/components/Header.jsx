import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <img src="/Img/lms-logo.png" alt="LMS Logo" />
      </div>

      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/books">Books</a>
        <a href="/authors">Authors</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
}