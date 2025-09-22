import { prisma } from "../lib/db";

async function main() {
  await prisma.user.create({
    data: {
      username: "hilal",
      name: "Hilal Ayaz",
      email: "hilal@example.com",
      password: "hashed_password_here",
      role: "USER",
      hasPortfolio: true,
    },
  });

  console.log("Seeded user with theme ✅");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
