import React from 'react';
import UsersItem from './UserItem';
import './UsersList.css';

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className='center'>
        <h2>No users found</h2>
      </div>
    )
  }

  return (
    <ul>
      {props.items.map((user) => (
        <UsersItem 
          key={user.id} 
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.places}
        />      
      ))}
    </ul>
  )
};

export default UsersList;