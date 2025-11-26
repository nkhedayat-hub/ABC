import { getIronSession, IronSession, SessionOptions } from "iron-session";
import { cookies } from "next/headers";

export const sessionOptions: SessionOptions = {
  password:
    process.env.SESSION_SECRET ||
    "complex_password_at_least_32_characters_long",
  cookieName: "abc-move-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export interface SessionData {
  isLoggedIn?: boolean;
}

export function getSession() {
  return getIronSession<SessionData>(cookies(), sessionOptions);
}
