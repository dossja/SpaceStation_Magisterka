import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Reports from "./Components/Reports.js";

function NavBar() {
    return (
        <Router className="Nav-Bar">
            <div >
                <Link to="/reports">Reports</Link>
                <Switch>
                    <Route exact path="/reports" component={Reports} />
                </Switch>

            </div >
        </Router >)
}

export default NavBar;