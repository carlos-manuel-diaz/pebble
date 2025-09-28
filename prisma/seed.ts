import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Delete old data
  await prisma.task.deleteMany();
  await prisma.teamMember.deleteMany();
  await prisma.user.deleteMany();

  // Add 1 user
  await prisma.user.create({
    data: {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'User',
      email: 'user@nextmail.com',
      password: '123456',
    },
  });

  // Add 4 team members
  const members = [
    { id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa', name: 'Sarah Johnson', email: 'sarah@company.com' },
    { id: '3958dc9e-712f-4377-85e9-fec4b6a6442a', name: 'Mike Chen', email: 'mike@company.com' },
    { id: '3958dc9e-742f-4377-85e9-fec4b6a6442a', name: 'Emily Davis', email: 'emily@company.com' },
    { id: '76d65c26-f784-44a2-ac19-586678f7c2f2', name: 'Alex Rodriguez', email: 'alex@company.com' },
  ];

  for (const member of members) {
    await prisma.teamMember.create({ data: member });
  }

  // Add 5 tasks
  const tasks = [
    {
      id: 'a1b2c3d4-e5f6-4a5b-8c9d-1e2f3a4b5c6d',
      name: 'Design new landing page',
      description: 'Create mockups for the new product landing page',
      priority: 'high',
      status: 'in-progress',
      dueDate: new Date('2025-10-15'),
      assignedBy: '410544b2-4001-4271-9855-fec4b6a6442a',
      assignedTo: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    },
    {
      id: 'b2c3d4e5-f6a7-4b5c-9d1e-2f3a4b5c6d7e',
      name: 'Fix login bug',
      description: 'Users cannot login with special characters in password',
      priority: 'urgent',
      status: 'pending',
      dueDate: new Date('2025-09-30'),
      assignedBy: '410544b2-4001-4271-9855-fec4b6a6442a',
      assignedTo: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    },
    {
      id: 'c3d4e5f6-a7b8-4c5d-1e2f-3a4b5c6d7e8f',
      name: 'Update documentation',
      description: 'Add API documentation for new endpoints',
      priority: 'medium',
      status: 'completed',
      dueDate: new Date('2025-09-25'),
      assignedBy: '410544b2-4001-4271-9855-fec4b6a6442a',
      assignedTo: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    },
    {
      id: 'd4e5f6a7-b8c9-4d5e-2f3a-4b5c6d7e8f9a',
      name: 'Database optimization',
      description: 'Optimize slow queries in production database',
      priority: 'high',
      status: 'in-progress',
      dueDate: new Date('2025-10-05'),
      assignedBy: '410544b2-4001-4271-9855-fec4b6a6442a',
      assignedTo: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    },
    {
      id: 'e5f6a7b8-c9d1-4e5f-3a4b-5c6d7e8f9a0b',
      name: 'Code review',
      description: 'Review pull request #234',
      priority: 'low',
      status: 'pending',
      dueDate: new Date('2025-09-28'),
      assignedBy: '410544b2-4001-4271-9855-fec4b6a6442a',
      assignedTo: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    },
  ];

  for (const task of tasks) {
    await prisma.task.create({ data: task });
  }

  console.log('✅ Done! Added 1 user, 4 team members, and 5 tasks');
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });