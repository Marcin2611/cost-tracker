'use client';
import { UserCosts } from '@/models/users';
import { useEffect, useState } from 'react';
import { CostWithId } from '@/models/costs';

export const useCosts = (): {costs: CostWithId[]} => {
  const [data, setData] = useState<CostWithId[]>([]);

  useEffect(() => {
    const fetchCosts = async () => {
      const response = await fetch('/api/costs');
      const data: CostWithId[] = await response.json();

      setData(data);
    };

    fetchCosts();
  }, []);

  return { costs: data };
}

export const useUserCosts = (userId: number): {userCosts: UserCosts | null} => {
  const [costsData, setCostsData] = useState<UserCosts | null>(null);

  useEffect(() => {
    const fetchUserCosts = async () => {
      const response = await fetch(`/api/users/${userId}/costs`);
      const data: UserCosts = await response.json();

      setCostsData(data);
    };

    fetchUserCosts();
  }, [userId]);

  return { userCosts: costsData };
}
