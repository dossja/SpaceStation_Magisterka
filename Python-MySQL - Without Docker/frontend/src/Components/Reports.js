import React from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ReportsAdd from './ReportsAdd.js';
import ReportsShow from './ReportsShow.js';

function Reports() {
    return (
        <div>
            <Container maxWidth="s" className="Add-User-Page">
                <h2>Reports</h2>
                <Router >
                    <div>
                        <Button variant="contained" ><Link to="/reports/add" className="Category-link">Add Report</Link></Button>
                        <div class="divider" />
                        <Button variant="contained" ><Link to="/reports/show" className="Category-link">Show Reports</Link></Button>
                        <Switch className="Nav-Route">
                            <Route exact path="/reports/add" component={ReportsAdd} />
                            <Route exact path="/reports/show" className="Nav-Route" component={ReportsShow} />

                        </Switch>
                    </div >
                </Router >

            </Container>
        </div>)
}

export default Reports;