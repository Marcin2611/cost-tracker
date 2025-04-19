import { Cost, CostWithId } from '@/models/costs';

export type User = {
  id?: number;
  name: string;
  email: string;
  isActive: boolean;
  costs: Cost[];
};

export type UserCosts = {
  name: string;
  costs: CostWithId[];
};
