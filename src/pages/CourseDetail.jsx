import { useEffect, useState } from "react";
import { useParams, NavLink, Navigate } from "react-router-dom";
import axios from "axios";

import { getCurrentUser } from "../Utilities/auth";
import "./CourseDetail.css";

export function CourseDetail() {
  const { id } = useParams();
  const currentUser = getCurrentUser();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCourse() {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          `http://localhost:3000/api/courses/${id}`
        );

        setCourse(response.data);
      } catch (error) {
        console.error(error);

        if (error.response?.status === 404) {
          setError("Course not found");
        } else {
          setError("Unable to load course");
        }
      } finally {
        setLoading(false);
      }
    }

    if (currentUser) {
      fetchCourse();
    }
  }, [id ]);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (loading) {
    return <h2>Loading course...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const modules = course.modules ?? [];

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
            {modules.length === 0 ? (
              <p>No modules available.</p>
            ) : (
              modules.map((module, index) => (
                <NavLink
                  key={module.id}
                  className="module-card"
                  to={`/courses/${course.id}/modules/${module.id}`}
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
              ))
            )}
          </div>
        </section>
      </div>
    </>
  );
}