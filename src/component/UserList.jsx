import React from 'react'

const UserList = ({users, deleteUser, editUser}) => {
  return (
    <div>
    {users.length === 0 ? (
      <p>No users available</p>
    ) : (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => editUser(index)}>Edit</button>
                <button onClick={() => deleteUser(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);
};
 
export default UserList