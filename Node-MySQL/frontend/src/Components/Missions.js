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
                <h3>Missions</h3>
                <Router >
                    <div>
                        {props.isManager == true ?
                            <Button variant="contained" ><Link to="/missions/add" className="Category-link" id="addMission">Add Mission</Link></Button>
                            : null}
                        {props.isManager == true ?
                            <div class="divider" />
                            : null}
                        <Button variant="contained" ><Link to="/missions/show" className="Category-link" id="showMissions">Show Missions</Link></Button>
                        <Switch className="Nav-Route">
                            <Route exact path="/missions/add" className="Nav-Route"><MissionsAdd currentUserID={props.currentUserID} /></Route>
                            <Route exact path="/missions/show" className="Nav-Route"><MissionsShow currentUserID={props.currentUserID} isManager={props.isManager} /></Route>
                        </Switch>
                    </div >
                </Router >

            </Container>
        </div>)
}

export default Missions;