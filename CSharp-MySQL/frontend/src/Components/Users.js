import React from 'react';
import { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UsersAdd from './UsersAdd';
import UsersShow from './UsersShow';


function Users(props) {
    // const [currentUserID, setCurrentUserID] = React.useState(props.currentUserID);
    return (
        <div>
            <Container maxWidth="s" className="Add-User-Page">
                <h2>Users</h2>
                <Router >
                    <div>
                        {props.isManager == true ?
                            <Button variant="contained" ><Link to="/users/add" className="Category-link" id="addUser">Add User</Link></Button>
                            : null}
                        {props.isManager == true ?
                            <div class="divider" />
                            : null}
                        <Button variant="contained" ><Link to="/users/show" className="Category-link" id="showUsers">Show Users</Link></Button>
                        <Switch className="Nav-Route">
                            <Route exact path="/users/add" className="Nav-Route"><UsersAdd currentUserID={props.currentUserID} /></Route>
                            <Route exact path="/users/show" className="Nav-Route"><UsersShow currentUserID={props.currentUserID} isManager={props.isManager} /></Route>
                        </Switch>
                    </div >
                </Router >

            </Container>
        </div>)
}

export default Users;