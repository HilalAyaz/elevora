import { PrismaClient } from "./lib/generated/prisma/client.js";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    console.log("✅ Database connection successful");
  } catch (err) {
    console.error("❌ Database connection failed:", err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
