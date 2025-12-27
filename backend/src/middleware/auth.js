import { getState } from "../db.js";

// JWT_SECRET is no longer used for verification in this guest-mode
// const JWT_SECRET = process.env.JWT_SECRET || "dev_secret_change_me";

export function signToken(user) {
  // We can keep this or stub it out, it won't be used for login anymore
  return "dummy_token";
}

export function authRequired(req, res, next) {
  // Bypass all token checks and always assign a guest user
  // This allows the existing endpoints (like /progress) to continue working
  // without rewriting all of them to remove req.user.id usage.

  req.user = {
    id: "guest",
    name: "Pengunjung",
    email: "guest@tatasurya.local",
    role: "murid"
  };

  next();
}
