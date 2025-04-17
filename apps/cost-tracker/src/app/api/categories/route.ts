import prisma from '@/lib/prisma';
import { Category } from '@/models/categories';

export const GET = async () => {
  const categories: Category[] = await prisma.category.findMany();

  return new Response(JSON.stringify(categories));
}
