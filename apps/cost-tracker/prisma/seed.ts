// eslint-disable-next-line @nx/enforce-module-boundaries
import { PrismaClient, Prisma } from '../generated/prisma';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'John',
    email: 'john@mail.com',
    isActive: true,
  },
  {
    name: 'Alice',
    email: 'alice@mail.com',
    isActive: true,
  },
  {
    name: 'Joe',
    email: 'joe@mail.com',
    isActive: true,
  },
  {
    name: 'Andrew',
    email: 'andrew@mail.com',
    isActive: false,
  },
  {
    name: 'Bridget',
    email: 'bridget@mail.com',
    isActive: false,
  },
];

const categories: Prisma.CategoryCreateInput[] = [
  {
    name: 'Food',
  },
  {
    name: 'Transport',
  },
  {
    name: 'Entertainment',
  },
];

const costs: Prisma.CostCreateInput[] = [
  {
    amount: 100.42,
    user: {
      connect: { id: 1 },
    },
    category: {
      connect: { id: 1 },
    },
  },
  {
    amount: 50.99,
    user: {
      connect: { id: 1 },
    },
    category: {
      connect: { id: 2 },
    },
  },
  {
    amount: 42.81,
    user: {
      connect: { id: 2 },
    },
    category: {
      connect: { id: 3 },
    },
  },
];

export async function main() {
  for (const user of userData) {
    await prisma.user.create({ data: user });
  }

  for (const category of categories) {
    await prisma.category.create({ data: category });
  }

  for (const cost of costs) {
    await prisma.cost.create({ data: cost });
  }
}

main();
