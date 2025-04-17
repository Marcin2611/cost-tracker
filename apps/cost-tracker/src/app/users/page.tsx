'use client';
import useUsers from '@/hooks/useUsers';

const UsersPage = () => {
  const [users] = useUsers();

  if (!users) return <div>Users not found</div>;

  return (
    <div>
      {users.map((user) => (
        <div key={user.email}>
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
