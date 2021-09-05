import React from 'react';
import { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import usersAPI from "../Axios/usersAPI.js";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function UsersShow() {
    const uAPI = new usersAPI();

    const classes = useStyles();
    const [users, setUsers] = React.useState([]);

    let aktualizuj = true;

    useEffect(() => {
        if (aktualizuj)
            getUsersAPI();
    }, [aktualizuj]);

    const getUsersAPI = () => {
        uAPI.get()
            .then(response => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        aktualizuj = false;
    }

    return (
        <div>
            <Container maxWidth="s" className="Add-User-Page">
                <h2>Available Users</h2>
            </Container>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Surname</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Department</TableCell>
                            <TableCell align="right">Manager</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((users) => (
                            <TableRow key={users.id}>
                                <TableCell component="th" scope="row">
                                    {users.id}
                                </TableCell>
                                <TableCell align="right">{users.name}</TableCell>
                                <TableCell align="right">{users.surname}</TableCell>
                                <TableCell align="right">{users.email}</TableCell>
                                <TableCell align="right">{users.position_type}</TableCell>
                                <TableCell align="right">{users.manager}</TableCell>
                                <TableCell align="right"><Button
                                    variant="contained"
                                    color="primary"
                                    className="Btn-Assign"
                                // onClick={postReport}
                                >
                                    Assign
                                </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className="Btn-Cancel"
                                    // onClick={postReport}
                                    >
                                        Cancel
                                    </Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>)
}

export default UsersShow;