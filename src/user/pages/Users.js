import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    // {
    //   id: 'u1',
    //   name: 'Pepe',
    //   image: 'https://static.wikia.nocookie.net/hieloyfuego/images/3/3b/Balerion_the_Black_Dread_by_Lindsey_Burcar%C2%A9.png/revision/latest/scale-to-width-down/250?cb=20150107011817',
    //   places: 3
    // }
  ];

  return (
    <UsersList 
      items={USERS}
    />
  )
};

export default Users;