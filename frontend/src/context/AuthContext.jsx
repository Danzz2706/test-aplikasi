import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import api from "../api/client.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Hardcode user to guest
  const [user, setUser] = useState({
    id: "guest",
    name: "Pengunjung",
    role: "murid"
  });
  const [booting, setBooting] = useState(false);

  // No need to check for token anymore
  useEffect(() => {
    // Just ensure we are "booted"
    setBooting(false);
  }, []);

  async function login(email, password) {
    // No-op or just return current guest
    return user;
  }

  async function register(payload) {
    // No-op
    return user;
  }

  function logout() {
    // No-op
  }

  const value = useMemo(() => ({ user, booting, login, register, logout }), [user, booting]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
