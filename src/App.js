import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DailyLogForm from "/Users/ipsita/Downloads/personal_projects/nomi/src/frontend/components/DailyLogForm.js";
import VisualizationDashboard from "/Users/ipsita/Downloads/personal_projects/nomi/src/frontend/components/VisualizationDashboard.js";
import "../src/frontend/styles/navbar.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/dailyLog">Daily Logging</Link>
        <Link to="/dashboard">Dashboard</Link>
        {/* <Link to="/about">About</Link> */}
      </nav>

      <Routes>
        <Route path="/dailyLog" element={<DailyLogForm />} />
        <Route path="/dashboard" element={<VisualizationDashboard />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
