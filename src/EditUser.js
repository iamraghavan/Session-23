import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditUser() {
  const { id } = useParams();
  const [user, setUser] = useState({ name: "" });

  useEffect(() => {
    console.log(`Fetching user with ID ${id}`);
  }, [id]);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updating user:", user);
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="User Name"
          value={user.name}
          onChange={handleInputChange}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditUser;
