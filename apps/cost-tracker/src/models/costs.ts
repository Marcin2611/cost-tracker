import { Category } from '@/models/categories';

export type Cost = {
  id?: number;
  amount: number;
  date: string;
  category: Category
}
