import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ReactDashboardLayout from "./components/pages/ReactDashboardLayout/ReactDashboardLayout";
import HomePage from "./components/pages/HomePage/HomePage";
import AppQuestion from "./components/AppQuestion/AppQuestion";
import AppProfile from "./components/AppProfile/AppProfile";
// import ResultsPage from "./components/pages/ResultsPage/ResultsPage";
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
          {/* <Route path="results" element={<ResultsPage />} />
          <Route path="balance" element={<BalancePage />} />
          <Route path="achievements" element={<AchievementsPage />} /> */}
          <Route path="profile" element={<AppProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
