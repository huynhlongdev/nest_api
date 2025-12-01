import {PrismaClient} from '../../generated/index.js';

// @ts-ignore
const prisma = new PrismaClient();

async function main() {
  // Tạo 1 user mặc định
  await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: '123456',
      name: 'Admin',
    },
  });
}

main()
  .then(() => console.log('Seed done'))
  .catch(console.error)
  .finally(() => prisma.$disconnect());
