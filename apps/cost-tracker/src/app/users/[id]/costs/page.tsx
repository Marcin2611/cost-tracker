'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';

const UserCosts = () => {
  const { id } = useParams();

  useEffect(() => {
    const fetchUserCosts = async () => {
      const response = await fetch(`/api/users/${id}/costs`);
      const data = await response.json();

      console.log(data);
    };

    fetchUserCosts();
  }, []);

  return <div>User {id} costs page</div>;
};

export default UserCosts;
