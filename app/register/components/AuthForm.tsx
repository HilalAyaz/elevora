"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Role } from "@/lib/generated/prisma";

interface AuthFormProps {
  isLogin: boolean;
}

interface UserResponse {
  id: string;
  username?: string;
  role: Role;
}

export default function AuthForm({ isLogin }: AuthFormProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const validateForm = () => {
    const errs: string[] = [];
    if (!isLogin && !username.trim()) errs.push("Username is required.");
    if (!email.trim()) errs.push("Email is required.");
    if (!password.trim()) errs.push("Password is required.");
    if (!isLogin && password !== confirmPassword)
      errs.push("Passwords do not match.");
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const url = isLogin ? "/api/auth/login" : "/api/auth/signup";
      const body = isLogin
        ? { email, password }
        : { username, email, password };

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      const user: UserResponse = data.user;

      // Role-based redirect (middleware reads the HTTP-only cookie)
      if (user.role === Role.OWNER) router.push("/dashboard/owner");
      else if (user.role === Role.ADMIN) router.push("/dashboard/admin");
      else if (user.role === Role.USER && user.username)
        router.push(`/${user.username}/dashboard`);
      else router.push("/");

      // Clear form
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err: unknown) {
      setErrors([err instanceof Error ? err.message : "Something went wrong"]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {errors.length > 0 && (
        <div className="text-red-500 flex flex-col gap-1">
          {errors.map((err, i) => (
            <span key={i}>{err}</span>
          ))}
        </div>
      )}

      {!isLogin && (
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 rounded-2xl border border-gray-300"
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 rounded-2xl border border-gray-300"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-3 rounded-2xl border border-gray-300"
      />
      {!isLogin && (
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-2xl border border-gray-300"
        />
      )}
      <button
        type="submit"
        disabled={loading}
        className="mt-3 py-3 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white disabled:opacity-50"
      >
        {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
      </button>
    </form>
  );
}
