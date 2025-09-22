import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import { signToken, Role } from "@/lib/jwt";

interface LoginBody {
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  try {
    const { email, password }: LoginBody = await req.json();

    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required." },
        { status: 400 }
      );
    }

    // Find user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Check password
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return NextResponse.json(
        { success: false, error: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Generate JWT with expiration
    const token = signToken(
      {
        id: user.id,
        email: user.email,
        role: user.role as Role,
        username: user.username,
      },
      "1d" 
    );

    // Response (no token in body)
    const res = NextResponse.json({
      success: true,
      message: "Login successful!",
      user: { id: user.id, username: user.username, role: user.role },
    });

    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",// 1 day
    });

    return res;
  } catch (err: unknown) {
    console.error("Login error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
