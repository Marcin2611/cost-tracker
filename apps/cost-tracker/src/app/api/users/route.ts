import prisma from '@/lib/prisma';

export const GET = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      isActive: true,
      costs: {
        select: {
          id: true,
          amount: true,
          date: true,
          category: {
            select: {
              name: true,
            }
          }
        }
      }
    },
  });
  return new Response(JSON.stringify(users));
};
