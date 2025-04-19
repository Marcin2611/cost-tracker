'use client';

import PageHeader from '@/components/PageHeader';
import { UserCosts } from '@/models/users';
import { notFound, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const UserCostsPage = () => {
  const { id } = useParams();
  const [costsData, setCostsData] = useState<UserCosts | null>(null);

  useEffect(() => {
    const fetchUserCosts = async () => {
      const response = await fetch(`/api/users/${id}/costs`);
      const data: UserCosts = await response.json();

      console.log(data);
      setCostsData(data);
    };

    fetchUserCosts();
  }, []);

  if (!costsData) return <div>Cost not found</div>;

  return (
    <div>
      <PageHeader text={`${costsData.name} costs`} />
    </div>
  );
};

export default UserCostsPage;
