import React from "react";

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
            <a href={`/profile/${user.id}`}>{user.name}</a>
            <a href={`/edit-user/${user.id}`}>Edit</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListUsers;
