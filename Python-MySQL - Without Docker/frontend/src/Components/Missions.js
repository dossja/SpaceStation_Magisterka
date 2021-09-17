import React from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MissionsAdd from './MissionsAdd';
import MissionsShow from './MissionsShow';

function Missions(props) {
    return (
        <div>
            <Container maxWidth="s" className="Add-User-Page">
                <h2>Missions</h2>
                <Router >
                    <div>
                        <Button variant="contained" ><Link to="/missions/add" className="Category-link">Add Mission</Link></Button>
                        <div class="divider" />
                        <Button variant="contained" ><Link to="/missions/show" className="Category-link">Show Missions</Link></Button>
                        <Switch className="Nav-Route">
                            <Route exact path="/missions/add" component={MissionsAdd} />
                            <Route exact path="/missions/show" className="Nav-Route" component={MissionsShow} />

                        </Switch>
                    </div >
                </Router >

            </Container>
        </div>)
}

export default Missions;