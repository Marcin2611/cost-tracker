'use client';
import useUsers from '@/hooks/useUsers';

const UsersPage = () => {
  const [users] = useUsers();

  if (!users) return <div>Users not found</div>;

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {users.map((user) => (
        <li key={user.email} className="flex justify-between gap-x-6 py-5">
          <div className="min-w-0 flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">{user.name}</p>
              <p className="mt-1 truncate text-xs/5 text-gray-500">{user.email}</p>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm/6 text-gray-900">{String(user.isActive)}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UsersPage;
