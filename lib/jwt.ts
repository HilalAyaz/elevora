import jwt, { SignOptions, Secret } from "jsonwebtoken";
import { Role } from "./generated/prisma";

const JWT_SECRET: Secret = process.env.JWT_SECRET || "supersecretkey123";


export interface JwtPayload {
  id: string;
  email: string;
  role: Role;
  username?: string;
  exp?: number; // ✅ Added, issued by JWT
  iat?: number; // ✅ Added, issued by JWT
}

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

export function signToken(
  payload: JwtPayload,
  expiresIn: SignOptions["expiresIn"] = "7d" // default 7 days
) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

export function verifyToken(token: string): JwtPayload {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
}

export function decodeToken(token: string): JwtPayload | null {
  return jwt.decode(token) as JwtPayload | null;
}

export function isTokenExpired(token: string): boolean {
  const decoded = decodeToken(token);
  return !decoded?.exp || Date.now() >= decoded.exp * 1000; // ✅ safer
}

export function isTokenValid(token: string): boolean {
  try {
    verifyToken(token); // ✅ verify instead of only decode
    return !isTokenExpired(token);
  } catch {
    return false;
  }
}

export function isTokenRevoked(token: string): boolean {
  // Revocation usually requires a DB or blacklist — here we just alias expiration
  return isTokenExpired(token);
}

export function isTokenExpiredOrRevoked(token: string): boolean {
  return isTokenExpired(token) || isTokenRevoked(token);
}

export function isTokenValidOrRevoked(token: string): boolean {
  return isTokenValid(token) || isTokenRevoked(token);
}
