'use client';

import PageHeader from '@/components/PageHeader';
import { useParams } from 'next/navigation';
import { useUserCosts } from '@/hooks/useCosts';

const UserCostsPage = () => {
  const { id } = useParams();
  const { userCosts } = useUserCosts(Number(id));

  if (!userCosts) return <div>Cost not found</div>;

  return (
    <div>
      <PageHeader text={`${userCosts.name} costs`} />
      {userCosts.costs.map((cost) => (
        <div className="grid grid-cols-3 space-y-3" key={cost.id}>
          <span>{cost.amount}$</span>
          <span>{new Date(cost.date).toLocaleString()}</span>
          <span>{cost.category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default UserCostsPage;
