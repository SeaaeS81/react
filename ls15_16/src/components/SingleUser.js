
import React from 'react';
import { useParams } from 'react-router-dom';

const SingleUser = ({ users }) => {
  const { id } = useParams();
  const user = users.find(user => user.id === id);

  return user ? (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      // інші поля користувача
    </div>
  ) : (
    <p>Користувача не знайдено</p>
  );
};

export default SingleUser;