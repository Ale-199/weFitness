import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//pags & component
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import WorkoutDetails from "./components/WorkoutDetails";
import Workoutform from "./components/Workoutform";
import Dashboard from "./pages/Dashboard/Dashboard";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/workoutDetails" element={<WorkoutDetails />} />
            <Route path="/workoutForm" element={<Workoutform />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
