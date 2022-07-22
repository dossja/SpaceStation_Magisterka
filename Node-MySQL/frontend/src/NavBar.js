import './NavBar.css';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Reports from "./Components/Reports.js";
import Missions from './Components/Missions.js';
import Users from './Components/Users.js';
import HomePage from './Components/HomePage.js';

function NavBar(props) {
    return (
        <Router className="Nav-Bar">
            <div className="Nav-div">
                <Button variant="contained" color="secondary" className="Nav-Button"><Link to="/reports" className="Nav-link" id="reportsLink">Reports</Link></Button>
                <div class="divider" />
                <Button variant="contained" color="secondary" className="Nav-Button"><Link to="/missions" className="Nav-link" id="missionsLink">Missions</Link></Button>
                <div class="divider" />
                <Button variant="contained" color="secondary" className="Nav-Button"><Link to="/users" className="Nav-link" id="usersLink">Users</Link></Button>
                <Switch className="Nav-Route">
                    <Route exact path="/" className="Nav-Route" component={HomePage} />
                    <Route exact path="/reports" className="Nav-Route"><Reports currentUserID={props.currentUserID} isManager={props.isManager} /></Route>
                    <Route exact path="/missions" className="Nav-Route"><Missions currentUserID={props.currentUserID} isManager={props.isManager} /></Route>
                    <Route exact path="/users" className="Nav-Route"><Users currentUserID={props.currentUserID} isManager={props.isManager} /></Route>
                </Switch>
            </div >
        </Router >)
}

export default NavBar;