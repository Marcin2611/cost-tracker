import { CategoryWithId } from './categories';
import { Category } from '@/models/categories';

export type Cost = {
  amount: number;
  date: string;
  category: Category;
  user: { name: string };
};

export type CostWithId = {
  id: number;
} & Cost;

export type CostWithIdAndCategoryId = {
  amount: number;
  id: number;
  date: string;
  category: CategoryWithId;
};
