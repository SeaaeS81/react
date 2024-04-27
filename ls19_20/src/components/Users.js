
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Users = ({ users }) => {
  const navigate = useNavigate();

  return (
    <div>
      {users.map(user => (
        <div key={user.id} onClick={() => navigate(`/user/${user.id}`)}>
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default Users;