import './NavBar.css';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Reports from "./Components/Reports.js";
import Mission from './Components/Mission.js';
import Users from './Components/Users.js';
import HomePage from './Components/HomePage.js';

function NavBar(props) {
    const [currentUserID, setCurrentUserID] = React.useState(props.currentUserID);
    return (
        <Router className="Nav-Bar">
            <div className="Nav-div">
                {currentUserID}
                <Button variant="contained" color="secondary" className="Nav-Button"><Link to="/reports" className="Nav-link">Reports</Link></Button>
                <div class="divider" />
                <Button variant="contained" color="secondary" className="Nav-Button"><Link to="/missions" className="Nav-link">Mission</Link></Button>
                <div class="divider" />
                <Button variant="contained" color="secondary" className="Nav-Button"><Link to="/users" className="Nav-link">Users</Link></Button>
                <Switch className="Nav-Route">
                    <Route exact path="/" className="Nav-Route" component={HomePage} />
                    <Route exact path="/reports" className="Nav-Route"><Reports setCurrentUserID={setCurrentUserID} /></Route>
                    <Route exact path="/missions" className="Nav-Route" component={Mission} props={props} />
                    <Route exact path="/users" className="Nav-Route" render={(props) => (<Users setCurrentUserID={props.setCurrentUserID} />)} />
                </Switch>
            </div >
        </Router >)
}

export default NavBar;