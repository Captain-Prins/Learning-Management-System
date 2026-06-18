import { useParams, NavLink, Navigate } from "react-router-dom";
import data from "../services/user.json";
import { Header } from "../components/Header";
import { getCurrentUser } from "../Utilities/auth";
import "./CourseDetail.css";

export function CourseDetail() {
  const currentUser = getCurrentUser();

  console.log(currentUser);
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const { id } = useParams();

  const course = data.courses.find((course) => course.id === Number(id));

  if (!course) {
    return <h2>Course not found</h2>;
  }
  const modules = data.modules.filter(
    (module) => module.courseId === course.id,
  );

  return (
    <>
      <div className="course-page">
        <section className="course-hero">
          <div>
            <span className="course-badge">Course</span>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
          </div>

          <div className="course-stats">
            <div>
              <h2>{modules.length}</h2>
              <span>Modules</span>
            </div>
          </div>
        </section>

        <section className="modules-section">
          <div className="section-header">
            <h2>Course Modules</h2>
            <p>Select a module to continue learning.</p>
          </div>

          <div className="module-grid">
            {modules.map((module, index) => (
              <NavLink
                key={module.id}
                className="module-card"
                to={`/courses/${id}/modules/${module.id}`}
              >
                <div className="module-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="module-content">
                  <h3>{module.title}</h3>
                  <p>Open module and start learning.</p>
                </div>

                <div className="module-arrow">→</div>
              </NavLink>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
