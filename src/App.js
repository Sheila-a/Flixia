import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./auth/pages/Home";
import LoginSignup from "./auth/pages/LoginSignup";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-signup" element={<LoginSignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
