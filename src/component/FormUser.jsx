import React, { useState, useEffect } from "react";

const FormUser = ({ addUser, editingUser, updateUser, editing }) => {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    if (editing && editingUser) {
      setUser(editingUser);
    } else {
      setUser({ name: "", email: "" });
    }
  }, [editing, editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name.trim() && user.email.trim()) {
    if (editing) {
      updateUser(user);
    } else {
      addUser(user);
    }
    setUser({ name: "", email: "" });
    
  } else {
    alert("Please fill in both name and email fields.");
  }

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={user.email}
          onChange={handleChange} 
        />
        <button type="submit">{editing ? "update User" : "Add User"}</button>
      </form>
    </div>
  );
};

export default FormUser;
