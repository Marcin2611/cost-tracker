import prisma from '@/lib/prisma';

export const GET = async () => {
  const costs = await prisma.cost.findMany({
    select: {
      id: true,
      amount: true,
      date: true,
      category: {
        select: {
          name: true
        }
      },
      user: {
        select: {
          name: true
        }
      }
    }
  });

  return Response.json(costs);
}
