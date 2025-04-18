import { Cost } from '@/models/costs';

export type User = {
  id?: number;
  name: string;
  email: string;
  isActive: boolean;
  costs: Cost[];
};
