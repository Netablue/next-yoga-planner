// app/api/breweries/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get('name')?.toLowerCase();

  try {
    let breweries;
    if (query) {
      breweries = await prisma.classe.findMany({
        where: {
          title: {
            contains: query,
            // mode: 'insensitive',
          },
        },
      });
    } else {
      breweries = await prisma.classe.findMany();
    }
    return NextResponse.json(breweries);
  } catch (error) {
    console.error('Error fetching breweries:', error);
    return NextResponse.json({ error: 'Failed to fetch breweries' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
