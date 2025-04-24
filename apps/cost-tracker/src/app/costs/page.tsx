'use client';

import { useCosts } from '@/hooks/useCosts';
import PageHeader from '@/components/PageHeader';

const CostsPage = () => {
  const { costs } = useCosts();

  return (
    <div>
      <PageHeader text="Costs" />
      {costs.map((cost) => (
        <div className="grid grid-cols-4 space-y-3" key={cost.id}>
          <span>{new Date(cost.date).toLocaleString()}</span>
          <span>{cost.user.name}</span>
          <span>{cost.category.name}</span>
          <span>{cost.amount}</span>
        </div>
      ))}
    </div>
  );
};

export default CostsPage;
