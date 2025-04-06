'use client';
import useUsers from "@/hooks/useUsers";

const UsersPage = () => {
  const [users] = useUsers();

  if (!users) return <div>Users not found</div>

  return (
    <div>
      {
        users
          .map(user =>
            <pre style={{margin: '1rem auto', width: '400px'}} key={user.id}>{JSON.stringify(user, null, 2)}</pre>
          )
      }
    </div>
  )
}

export default UsersPage;
