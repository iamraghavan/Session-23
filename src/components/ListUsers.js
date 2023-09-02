import React from "react";
import { Link } from "react-router-dom";

// ...

function ListUsers() {
  const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" }
  ];

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/profile/${user.id}`}>{user.name}</Link>
            <Link to={`/edit-user/${user.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListUsers;
