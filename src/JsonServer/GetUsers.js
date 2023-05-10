import React, { useState, useEffect } from 'react';

export default function GetUsers() {
  const [users, setUsers] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/users?id=5')
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div>GetUsers</div>
  )
}
