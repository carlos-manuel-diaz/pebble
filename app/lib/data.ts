import postgres from 'postgres';
import {
  User,
  Member,
  Task
} from './definitions';


const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });



import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fetchNames() {
  try {
    // Fetch all user records, but only select the 'name' field
    const users = await prisma.user.findMany({
      select: {
        name: true,
      },
    });
    
    return users;

  } catch (error) {
    console.error('Failed to fetch names:', error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}





















// export async function fetchMembers() {
//   try {
//     const data = await sql<Member[]>`SELECT * FROM member`;

//     return data;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch revenue data.');
//   }
// }

// export async function fetchTasks() {
//   try {
//     const data = await sql<Task[]>`SELECT * FROM task`;
    
//     return data;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch revenue data.');
//   }
// }



