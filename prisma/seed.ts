import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      email: "user1@example.com",
      name: "User One",
      password: bcrypt.hashSync("pass1", 10),
    },
    {
      email: "user2@example.com",
      name: "User Two",
      password: bcrypt.hashSync("pass2", 10),
    },
  ];

  await prisma.user.createMany({
    data: users,
    skipDuplicates: true,
  });

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
