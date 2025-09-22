import { NextRequest, NextResponse } from "next/server"; 
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import { signToken, Role } from "@/lib/jwt";

interface UserBody {
  username: string;
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  try {
    const { username, email, password }: UserBody = await req.json();

    // Validate fields
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!/^[\w.@+-]{3,20}$/.test(username)) {
      return NextResponse.json(
        { error: "Username must be 3-20 characters (letters, numbers, _ . @ + -)." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long." },
        { status: 400 }
      );
    }

    // Check duplicates
    const existing = await prisma.user.findFirst({
      where: { OR: [{ email }, { username }] },
    });
    if (existing) {
      return NextResponse.json(
        { error: "Email or username already exists." },
        { status: 409 } // conflict
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        username,
        name: username,
        email,
        password: hashedPassword,
        role: "USER" as Role,
      },
    });

    // Sign JWT with expiration
    const token = signToken(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        username: user.username,
      },
      "1d"
    );

    // Response (no token in body)
    const res = NextResponse.json({
      message: "Account created successfully!",
      user: { id: user.id, username: user.username, role: user.role },
    });

    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, 
    });

    return res;
  } catch (err: unknown) {
    console.error("Signup error:", err);
    return NextResponse.json(
      { error: "Something went wrong while creating your account. Please try again later." },
      { status: 500 }
    );
  }
}
