import { Link, useLocation } from "react-router-dom";
import "./BreadCrumbs.css";

export function BreadCrumbs() {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter(Boolean)
    .filter((segment) => isNaN(segment));

  const labels = {
    dashboard: "Dashboard",
    courses: "Courses",
    modules: "Modules",
    lesson: "Lessons",
  };

  return (
    <nav className="breadcrumbs-container">
      <ul className="breadcrumbs">
        <li>
          <Link to="/dashboard">Home</Link>
        </li>

        {pathnames.map((name, index) => {
          const routeTo =
            "/" + pathnames.slice(0, index + 1).join("/");

          const isLast = index === pathnames.length - 1;

          return (
            <li key={routeTo}>
              <span className="separator">›</span>

              {isLast ? (
                <span className="current-page">
                  {labels[name] || name}
                </span>
              ) : (
                <Link to={routeTo}>
                  {labels[name] || name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}