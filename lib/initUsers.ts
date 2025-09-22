import bcrypt from "bcryptjs";
import { PrismaClient } from "./generated/prisma/client.js"; // your generated Prisma client
import { Role } from "./generated/prisma/client.js"; // Role enum

// Initialize Prisma client
const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    console.log("✅ Database connection successful");
  } catch (err) {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  }
}

async function initSpecialAccounts() {
  const accounts = [
    {
      email: process.env.OWNER_EMAIL!,
      username: "hilal",
      name: "Owner Hilal",
      password: process.env.OWNER_PASSWORD!,
      role: Role.OWNER,
      theme: {
        create: {
          primary: "#FF5733",
          secondary: "#FFC300",
          background: "#F5F5F5",
          foreground: "#1A1A1A",
        },
      },
    },
    {
      email: process.env.ADMIN_EMAIL!,
      username: "admin",
      name: "Admin User",
      password: process.env.ADMIN_PASSWORD!,
      role: Role.ADMIN,
      theme: {
        create: {
          primary: "#FF5733",
          secondary: "#FFC300",
          background: "#F5F5F5",
          foreground: "#1A1A1A",
        },
      },
    },
    {
      email: process.env.USER_EMAIL!,
      username: "User",
      name: "User User",
      password: process.env.USER_PASSWORD!,
      role: Role.USER,
      theme: {
        create: {
          primary: "#FF5733",
          secondary: "#FFC300",
          background: "#F5F5F5",
          foreground: "#1A1A1A",
        },
      },
    },
  ];

  for (const acc of accounts) {
    try {
      const existing = await prisma.user.findUnique({ where: { email: acc.email } });
      if (!existing) {
        const hashedPassword = await bcrypt.hash(acc.password, 10);
        await prisma.user.create({
          data: {
            email: acc.email,
            username: acc.username,
            name: acc.name,
            password: hashedPassword,
            role: acc.role,
          },
        });
        console.log(`✅ ${acc.role} account created: ${acc.email}`);
      } else {
        console.log(`ℹ️ ${acc.role} account already exists: ${acc.email}`);
      }
    } catch (err) {
      console.error(`❌ Failed to process account ${acc.email}:`, err);
    }
  }
}

async function main() {
  await testConnection();
  await initSpecialAccounts();
  await prisma.$disconnect();
  console.log("🎉 Seeding complete");
}

main().catch((err) => {
  console.error("❌ Unexpected error:", err);
  prisma.$disconnect();
  process.exit(1);
});
