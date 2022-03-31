import React from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './Reports.css';
import ReportsAdd from './ReportsAdd.js';
import ReportsShow from './ReportsShow.js';

function Reports(props) {
    console.log(props);
    return (
        <div>
            <Container maxWidth="s" className="Add-User-Page">
                <h2>Reports</h2>
                {/* <h3>{props.currentUserID}</h3> */}
                <Router >
                    <div>
                        <Button variant="contained" ><Link to="/reports/add" className="Category-link">Add Report</Link></Button>
                        <div class="divider" />
                        <Button variant="contained" ><Link to="/reports/show" className="Category-link">Show Reports</Link></Button>
                        <Switch className="Nav-Route">
                            <Route exact path="/reports/add" className="Nav-Route"><ReportsAdd currentUserID={props.currentUserID} /></Route>
                            <Route exact path="/reports/show" className="Nav-Route"><ReportsShow currentUserID={props.currentUserID} isManager={props.isManager} /></Route>
                        </Switch>
                    </div >
                </Router >

            </Container>
        </div>)
}

export default Reports;