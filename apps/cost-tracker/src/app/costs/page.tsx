'use client';

import PageHeader from '@/components/PageHeader';
import Table from '@/components/Table';
import { useCosts } from '@/hooks/useCosts';

const CostsPage = () => {
  const { costs } = useCosts();

  return (
    <>
      <PageHeader text="Costs" />
      <Table>
        <Table.Header>
          <Table.ColumnName>Date</Table.ColumnName>
          <Table.ColumnName>Amount</Table.ColumnName>
          <Table.ColumnName>Category</Table.ColumnName>
          <Table.ColumnName hide>Actions</Table.ColumnName>
        </Table.Header>
        <Table.Body>
          {costs.map((cost) => (
            <Table.Row key={cost.id}>
              <Table.Cell>
                {new Date(cost.date).toLocaleDateString()}
              </Table.Cell>
              <Table.Cell>{cost.amount}</Table.Cell>
              <Table.Cell>{cost.category.name}</Table.Cell>
              <Table.Cell>Action</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default CostsPage;
