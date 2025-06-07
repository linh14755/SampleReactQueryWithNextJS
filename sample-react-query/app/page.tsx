'use client'; // App Router bắt buộc có

import { useQuery } from '@tanstack/react-query';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};

export default function UsersPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Đang tải...</p>;
  if (isError) return <p>Lỗi khi tải dữ liệu</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
