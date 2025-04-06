'use client'
import {useEffect, useState} from "react";
import {User} from "@/models/users";

const useUsers = (): [User[]] => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:8080/users');
      const users = await response.json();

      setUsers(users)
    }

    fetchUsers();
  }, []);

  return [users]
}

export default useUsers;
