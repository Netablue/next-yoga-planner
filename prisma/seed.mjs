import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  // Clear the table before seeding
  await prisma.users.deleteMany();
  await prisma.classes.deleteMany();

  await prisma.users.createMany({
    data: [
      {
        id: 1,
        name: "Tiya",
        email: "tiya@nyp.com",
        createdAt: new Date(),
      },
      {
        id: 2,
        name: "Werner",
        email: "werner@nyp.com",
        createdAt: new Date(),
      },
      {
        id: 3,
        name: "Coltran",
        email: "coltran@nyp.com",
        createdAt: new Date(),
      },
      {
        id: 4,
        name: "Evata",
        email: "evata@nyp.com",
        createdAt: new Date(),
      },
    ],
  });

  await prisma.classes.createMany({
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
  console.log("Seed data successfully inserted into the Users and Classes tables!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
