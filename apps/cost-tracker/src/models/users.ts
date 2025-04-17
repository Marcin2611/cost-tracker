import { Cost } from '@/models/costs';

export type User = {
  name: string;
  email: string;
  isActive: boolean;
  costs: Cost[]
}
