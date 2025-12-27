import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
// import ProtectedRoute from "./components/ProtectedRoute.jsx"; // Removed
// import RoleRoute from "./components/RoleRoute.jsx"; // Removed or optional

import Home from "./pages/Home.jsx";
// import Login from "./pages/Login.jsx"; // Removed
// import Register from "./pages/Register.jsx"; // Removed
import Explore3D from "./pages/Explore3D.jsx";
import Knowledge from "./pages/Knowledge.jsx";
import Quiz from "./pages/Quiz.jsx";
import Progress from "./pages/Progress.jsx";
import TeacherDashboard from "./pages/TeacherDashboard.jsx";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="glass rounded-2xl p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold">Halaman tidak ditemukan</h1>
        <p className="text-white/70 mt-2">Periksa URL atau kembali ke beranda.</p>
        <div className="mt-6">
          <a href="/" className="btn-primary">Kembali ke Home</a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/explore" element={<Explore3D />} />

        <Route
          path="/knowledge/:planetId"
          element={<Knowledge />}
        />

        <Route
          path="/quiz"
          element={<Quiz />}
        />
        <Route
          path="/quiz/:planetId"
          element={<Quiz />}
        />

        <Route
          path="/progress"
          element={<Progress />}
        />

        {/* Teacher dashboard accessible to anyone now, or restricted by hardcoded role 'murid' effectively hiding it */}
        <Route
          path="/teacher"
          element={<TeacherDashboard />}
        />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>
  );
}
