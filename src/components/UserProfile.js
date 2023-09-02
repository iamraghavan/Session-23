import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState({ name: "" });

  useEffect(() => {
    // Fetch user data by ID (e.g., send a GET request to an API)
    // Update the 'user' state with the fetched data
    console.log(`Fetching user with ID ${id}`);
  }, [id]);

  return (
    <div>
      <h1>User Profile</h1>
      <p>User Name: {user.name}</p>
    </div>
  );
}

export default UserProfile;
