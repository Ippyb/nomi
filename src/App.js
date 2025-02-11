import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DailyLogForm from "/Users/ipsita/Downloads/personal_projects/nomi/src/frontend/components/DailyLogForm.js";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Daily Logging</Link>
        {/* <Link to="/about">About</Link> */}
      </nav>

      <Routes>
        <Route path="/" element={<DailyLogForm />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
