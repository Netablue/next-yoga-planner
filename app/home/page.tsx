// app/home/page.tsx
"use client"

import { prisma } from '@/lib/prisma';
import { User } from '@/app/types/User';
import Sidebar from '@/components/Sidebar/Sidebar';

async function getUsers(): Promise<User[]> {
  return await prisma.user.findMany();
}

export default async function Home() {
  const users = await getUsers();

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Users List</h1>
        <ul className="list-disc list-inside">
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user.id}>
                {user.name ? user.name : 'Unnamed'} - {user.email}
              </li>
            ))
          ) : (
            <p>No users found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
