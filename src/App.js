import './App.css';
import FormUser from './component/FormUser';
import UserList from './component/UserList';
import { useState } from 'react';
function App() {

  const [users, setUsers] = useState([]);
  const[editing, setEditing] = useState(false);
  const[editingUser, setEditingUser] = useState(null);
 // Function to add a new user
 const addUser = (user) => {
  setUsers([...users, user]);
};

// Function to delete a user
const deleteUser = (index) => {
  const newUsers = [...users];
  newUsers.splice(index, 1);
  setUsers(newUsers);
};

// Function to edit a user
const editUser = (index) => {
  setEditing(true);
  setEditingUser(users[index]);


};
// Function to update a user
const updateUser = (updatedUser) => {
  const updatedUsers = users.map((user) =>
    user.email === editingUser.email ? updatedUser : user
  );
  setUsers(updatedUsers);
  setEditing(false);
  setEditingUser(null);
};


  return (
    <div className="App">
      <h1>User Management</h1>
      
<FormUser
addUser={addUser}
editingUser={editingUser}
updateUser={updateUser}
editing ={editing} />

<UserList 

users={users} deleteUser={deleteUser} editUser={editUser} 
/>
    </div>
  );
}

export default App;
