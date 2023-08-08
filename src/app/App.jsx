import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProfileInfo from "../routes/ProfileInfo";
import LoginPage from "../routes/LoginPage";
import RegisterPage from "../routes/RegisterPage";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" Component={ProfileInfo} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
      </Routes>
    </div>
  );
}

export default App;
