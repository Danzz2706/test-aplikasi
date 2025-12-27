import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext.jsx"; // Removed usage for auth logic, but maybe needed for name display? Let's keep it simple.

function LinkItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "px-3 py-2 rounded-xl text-sm font-semibold transition",
          isActive ? "bg-white/10 border border-white/10" : "text-white/70 hover:text-white hover:bg-white/5",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

export default function Navbar() {
  // const { user, logout } = useAuth(); // Not needed if we just want static nav
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
        <button
          onClick={() => navigate("/")}
          className="font-black tracking-wide text-white"
          title="Jelajahi TataSurya"
        >
          🚀 TataSurya
        </button>

        <div className="flex-1" />

        <div className="hidden md:flex items-center gap-2">
          {/* Direct links, no user check needed as we are always 'guest' */}
          <LinkItem to="/">Eksplorasi</LinkItem>
          <LinkItem to="/quiz">Kuis</LinkItem>
          <LinkItem to="/progress">Progres</LinkItem>
        </div>

        <div className="flex items-center gap-2">
          {/* Just show a simple badge or nothing */}
          <span className="hidden sm:inline-flex badge">
            Pengunjung
          </span>
        </div>
      </div>
    </div>
  );
}
