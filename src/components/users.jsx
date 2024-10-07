import React, { useState } from 'react';
import api from '../api';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {};
  const renderPhrase = (number) => {};

  const handleUsers = () => {};

  return (
    <>
      <table className='table'></table>
      <thead>
        <tr>
          <th scope='col'>Имя</th>
          <th scope='col'>Качества</th>
          <th scope='col'>Профессия</th>
          <th scope='col'>Встретился,раз</th>
          <th scope='col'>Оценка</th>
          <th scope='col'> </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>
              {user.qualities.map((qualitie) => (
                <span
                  className={'badge m-1 bg-' + qualitie.color}
                  key={qualitie._id}
                >
                  {qualitie.name}
                </span>
              ))}
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate} /5</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default Users;
