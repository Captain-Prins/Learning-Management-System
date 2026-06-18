import { Header } from "../components/Header";
import { getCurrentUser } from "../Utilities/auth";
import data from "../services/user.json";
import "./Dashboard.css";
import { NavLink, Navigate } from "react-router-dom";

export function Dashboard() {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const userCourses = data.courses.filter((course) =>
    currentUser.enrolledCourses.includes(course.id),
  );

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-hero">
          <div>
            <h1>Welcome back, {currentUser.name}</h1>
            <p>Continue your learning journey and track your progress.</p>
          </div>
        </div>

        <div className="dashboard-content">
          <aside className="profile-panel">
            <h3>Student Profile</h3>

            <div className="profile-item">
              <span>Name</span>
              <strong>{currentUser.name}</strong>
            </div>

            <div className="profile-item">
              <span>Email</span>
              <strong>{currentUser.email}</strong>
            </div>

            <div className="profile-item">
              <span>Role</span>
              <strong>{currentUser.role}</strong>
            </div>
          </aside>

          <section className="courses-panel">
            <div className="section-header">
              <h3>My Courses</h3>
              <span>{userCourses.length} Courses</span>
            </div>

            <ul className="course-list">
              {userCourses.map((course) => (
                <li key={course.id}>
                  <NavLink className="course-link" to={`/courses/${course.id}`}>
                    <div>
                      <h4>{course.title}</h4>
                      <p>Open Course</p>
                    </div>

                    <span>→</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
