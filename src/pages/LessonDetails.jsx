import { Header } from "../components/Header";
import { useParams } from "react-router-dom";
import data from "../services/user.json";
import { getCurrentUser } from "../Utilities/auth";
import "./LessonDetails.css";

export function LessonDetails() {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  const { courseId, moduleId, lessonId } = useParams();
  return (
    <>
      <div class="container">
        <div class="controls">
          <button>←</button>
          <button>Lesson Outline</button>
          <button>→</button>
        </div>

        <video controls>
          <source src="your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      
      </div>
    </>
  );
}
