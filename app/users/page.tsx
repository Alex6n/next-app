import React from 'react'

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  // this is only in fetch function.. 
  // to disable caching, this is good for data the changes frequently, to show fresh data always
  // const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store'});

  // to keep data fresh for certain period of time, getting fresh data every 10 seconds
  // const res = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 10 } });
  
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage
