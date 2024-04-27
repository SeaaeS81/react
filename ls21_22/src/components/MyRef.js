
import React, { useState, useEffect } from 'react';

const MyRef = () => {
  const [id, setId] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [id]);

  return (
    <div>
      <input type="number" value={id} onChange={e => setId(e.target.value)} />
      {user && <div>{user.name}</div>}
    </div>
  );
};

export default MyRef;