'use client'
import {useEffect, useState} from "react";
import {User} from "@/models/users";

const useUsers = (): [User[]] => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('api/users');
      const users: User[] = await response.json();

      setUsers(users)
    }

    fetchUsers();
  }, []);

  return [users]
}

export default useUsers;
