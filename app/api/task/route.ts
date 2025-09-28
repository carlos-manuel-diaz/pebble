// app/api/posts/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  // Read query params from the incoming request's URL
  const { searchParams } = new URL(request.url);
  const take = parseInt(searchParams.get('take') || '5'); // Get 5 posts by default

  try {
    // Use the param in your Prisma query
    const posts = await prisma.task.findMany({
      take: take, // Limit the number of records returned
      orderBy: {
        name : 'asc'
      },
    });
    return NextResponse.json(posts);
  } catch (error) {
    return new NextResponse('Error fetching names', { status: 500 });
  }
}