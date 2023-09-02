import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListUsers from "./ListUsers";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import UserProfile from "./UserProfile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/users" component={ListUsers} />
        <Route path="/create-user" component={CreateUser} />
        <Route path="/edit-user/:id" component={EditUser} />
        <Route path="/profile/:id" component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default App;
