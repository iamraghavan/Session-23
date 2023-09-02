import React, { useState } from "react";

function CreateUser() {
  const [newUser, setNewUser] = useState({ name: "" });

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Creating user:", newUser);
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="User Name"
          value={newUser.name}
          onChange={handleInputChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
