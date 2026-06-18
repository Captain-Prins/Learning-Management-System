import { Header } from "../components/Header";
import { useParams } from "react-router-dom";
import data from "../services/user.json";
import { getCurrentUser } from "../Utilities/auth";
import { NavLink, Navigate } from "react-router-dom";
import "./ModuleDetails.css";
export function ModuleDetails() {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  const { courseId, moduleId } = useParams();

  const currentModule = data.modules.find(
    (module) => module.id === Number(moduleId),
  );

  const lessons = data.lessons.filter(
    (lesson) => lesson.moduleId === Number(moduleId),
  );

  if (!currentModule) {
    return <h2>Module not found</h2>;
  }

  return (
    <>
      <div className="module-page">
        <section className="module-hero">
          <span className="module-badge">Module</span>

          <h1>{currentModule.title}</h1>

          <p>Complete the lessons below to finish this module.</p>

          <div className="module-stat">{lessons.length} Lessons</div>
        </section>

        <section className="lesson-section">
          <div className="lesson-grid">
            {lessons.map((lesson, index) => (
              <NavLink
                key={lesson.id}
                className="lesson-card"
                to={`/courses/${courseId}/modules/${moduleId}/lesson/${lesson.id}`}
              >
                <div className="lesson-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="lesson-content">
                  <h3>{lesson.title}</h3>
                  <p>Start this lesson</p>
                </div>

                <div className="lesson-arrow">→</div>
              </NavLink>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
