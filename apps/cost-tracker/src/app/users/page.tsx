'use client';
import PageHeader from '@/components/PageHeader';
import useUsers from '@/hooks/useUsers';
import Link from 'next/link';

const UsersPage = () => {
  const [users] = useUsers();

  if (!users) return <div>Users not found</div>;

  return (
    <div>
      <PageHeader text="Users list" />
      <ul role="list" className="divide-y divide-gray-300">
        {users.map((user) => (
          <li
            key={user.email}
            className="flex justify-between items-center gap-x-6 py-5"
          >
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">
                {user.name}
              </p>
              <p className="mt-1 truncate text-xs/5 text-gray-500">
                {user.email}
              </p>
            </div>
            <div className="flex gap-x-10">
              <span>
                <Link href={`/users/${user.id}/costs`}>Costs</Link>
              </span>
              <span>
                <Link href={`/users/${user.id}/edit`}>Edit</Link>
              </span>
              <span>Remove</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
