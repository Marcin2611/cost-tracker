'use client';

import { useParams } from 'next/navigation';

const UserEditPage = () => {
  const { id } = useParams();

  return <div>User {id} edit page</div>;
};

export default UserEditPage;
