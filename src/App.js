import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/appointment" component={Appointment} />
          <Route exact path="/dashboard/appointment" component={Dashboard} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
