import React from 'react';
import { useState, useEffect, useReducer } from "react";

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
import Modal from '@material-ui/core/Modal';

import UsersEdit from './UsersEdit.js';

import usersAPI from "../Axios/usersAPI.js";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    btnEdit: {
        margin: "10px",
        "background-color": "blue"
    },
    btnDelete: {
        margin: "10px",
        "background-color": "red"
    },
}))

function UsersShow(props) {
    const uAPI = new usersAPI();

    const classes = useStyles();
    const [users, setUsers] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [userID, setUserID] = React.useState(false);

    const [aktualizuj, setAktualizuj] = React.useState(true);

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
        setAktualizuj(false);
    }

    async function deleteUserAPI(id) {
        uAPI.deleteByID(id)
            .then(response => {
                console.log(response.data);

                setUsers([]);
                getUsersAPI();
                setAktualizuj(false);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const handleClose = () => {
        console.log("H_Close");
        setOpen(false);
        setAktualizuj(true);
        console.log(aktualizuj);
    };

    return (
        <div>
            <Container maxWidth="s" className="Add-User-Page">
                <h3>Available Users</h3>
                <h3>{props.currentUserID}</h3>
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
                            {props.isManager == true ? <TableCell align="center">Actions</TableCell> : null}
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
                                <TableCell align="right">{users.positionType.name}</TableCell>
                                {users.manager == true ? <TableCell align="right">True</TableCell> : <TableCell align="right">False</TableCell>}

                                {props.isManager == true ? <TableCell align="right">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.btnEdit}
                                        // onClick={postReport}
                                        onClick={() => {
                                            setOpen(true);
                                            setUserID(users.id);
                                        }}
                                    >
                                        Edit
                                    </Button>

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.btnDelete}
                                        onClick={() => deleteUserAPI(users.id)}
                                    >
                                        Delete
                                    </Button></TableCell> : null}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <UsersEdit userID={userID} handleClose={handleClose} setAktualizuj={setAktualizuj} />
            </Modal>
        </div >)
}

export default UsersShow;