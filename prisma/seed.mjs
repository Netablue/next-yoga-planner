import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {

  // Clear the table before seeding
  await prisma.user.deleteMany();
  await prisma.classe.deleteMany();

  await prisma.user.createMany({
    data: [
      {
        id: 1,
        name: "Tiya",
        email: "tiya@nyp.com",
        password: await bcrypt.hash('password123', 10),
        createdAt: new Date(),
      },
      {
        id: 2,
        name: "Werner",
        email: "werner@nyp.com",
        password: await bcrypt.hash('password123', 10),
        createdAt: new Date(),
      },
      {
        id: 3,
        name: "Coltran",
        email: "coltran@nyp.com",
        password: await bcrypt.hash('password123', 10),
        createdAt: new Date(),
      },
      {
        id: 4,
        name: "Evata",
        email: "evata@nyp.com",
        password: await bcrypt.hash('password123', 10),
        createdAt: new Date(),
      },
    ],
  });

  await prisma.classe.createMany({
    data: [
      {
        id: 1,
        day: "Monday",
        title: "Morning Yoga",
        line: "Strength",
        level: "Beginner",
        category: "Yoga",
        duration: 60, // Duration in minutes
        commentary: "A great way to start the week.",
      },
      {
        id: 2,
        day: "Wednesday",
        title: "Midweek Flow",
        line: "Flexibility",
        level: "Intermediate",
        category: "Yoga",
        duration: 45,
        commentary: "A perfect balance for the middle of the week.",
      },
      {
        id: 3,
        day: "Friday",
        title: "Weekend Wind-Down",
        line: "Relaxation",
        level: "Beginner",
        category: "Yoga",
        duration: 30,
        commentary: "Relax and wind down for the weekend.",
      },
    ]
  })

  // Success message
  console.log("Seed data successfully inserted into the User and Classe tables!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
