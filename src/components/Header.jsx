import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../Utilities/auth";
export function Header() {

    const navigate = useNavigate();
    const currentUser = getCurrentUser();

   function handleLogout() {
    localStorage.removeItem("currentUser");
    navigate("/login");
  }
  return (
    <header className="header">
      <div className="logo-section">
        <img src="/Img/lms-logo.png" alt="LMS Logo" />
      </div>

      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/books">Books</a>
        <a href="/authors">Authors</a>

        {currentUser?(
          <a href="/login" onClick={handleLogout}>Logout</a>
        ):(

          <NavLink to="/login">Login</NavLink>
        )}



        
      </nav>
    </header>
  );
}