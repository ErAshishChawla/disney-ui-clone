import "./App.css";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import DisneyLogo from "./assets/images/logo.svg";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar logo={DisneyLogo} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
