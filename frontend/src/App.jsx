import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ReactDashboardLayout from "./components/pages/ReactDashboardLayout/ReactDashboardLayout";
import HomePage from "./components/pages/HomePage/HomePage";
import AppQuestion from "./components/AppQuestion/AppQuestion";
import AppProfile from "./components/AppProfile/AppProfile";
import AppResult from "./components/AppResult/AppResult";
// import ProfilePage from "./components/pages/ProfilePage/ProfilePage";
// import BalancePage from "./components/pages/BalancePage/BalancePage";
// import AchievementsPage from "./components/pages/AchievementsPage/AchievementsPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* общий layout со всеми вкладками */}
        <Route path="/" element={<ReactDashboardLayout />}>
          <Route path="test" element={<AppQuestion />} />
          <Route path="results" element={<AppResult />} />
          {/*
          <Route path="balance" element={<BalancePage />} />
          <Route path="achievements" element={<AchievementsPage />} /> */}
          <Route path="profile" element={<AppProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
