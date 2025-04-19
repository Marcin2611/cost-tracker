import prisma from '@/lib/prisma';
import { NextApiRequest } from 'next';

export const GET = async (
  request: NextApiRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;

  const userCosts = await prisma.user.findFirst({
    where: {
      id: Number(id),
    },
    select: {
      name: true,
      costs: {
        select: {
          id: true,
          amount: true,
          date: true,
          description: true,
          category: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  return Response.json(userCosts);
};
