import { Header } from "../components/Header";
export function Dashboard({ username }) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <h2>Dashboard</h2>
        <p>
          Welcome, {currentUser?.name}! Here you can access your courses, view your
          progress, and manage your account.
        </p>
      </div>
    </>
  );
}
