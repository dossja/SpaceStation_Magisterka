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
                <h3>{props.currentUserID}</h3>
                <Router >
                    <div>
                        <Button variant="contained" ><Link to="/users/add" className="Category-link">Add User</Link></Button>
                        <div class="divider" />
                        <Button variant="contained" ><Link to="/users/show" className="Category-link">Show Users</Link></Button>
                        <Switch className="Nav-Route">
                            <Route exact path="/users/add" className="Nav-Route"><UsersAdd currentUserID={props.currentUserID} /></Route>
                            <Route exact path="/users/show" className="Nav-Route"><UsersShow currentUserID={props.currentUserID} /></Route>
                        </Switch>
                    </div >
                </Router >

            </Container>
        </div>)
}

export default Users;