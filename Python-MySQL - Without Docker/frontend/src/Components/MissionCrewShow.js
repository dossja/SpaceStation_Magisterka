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

import missionsAPI from "../Axios/missionsAPI.js";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    paper: {
        position: 'absolute',
        width: 600,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        "text-align": "center"
    },
}))

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

function MissionCrewShow(props) {
    const mAPI = new missionsAPI();

    const classes = useStyles();
    const [users, setUsers] = React.useState([]);

    const [modalStyle] = React.useState(getModalStyle);

    const [aktualizuj, setAktualizuj] = React.useState(true);

    useEffect(() => {
        console.log(props.missionID);
        if (aktualizuj)
            getMissionCrewAPI();
    }, [aktualizuj]);

    const getMissionCrewAPI = () => {
        mAPI.getCrewByID(props.missionID)
            .then(response => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        setAktualizuj(false);
    }

    return (
        <div>
            <div style={modalStyle} className={classes.paper}>
                <Container maxWidth="s" className="Page">
                    <h3>Mission Users</h3>
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
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
                <br />
                <Button color="secondary" variant="contained" onClick={props.handleClose}>Hide</Button>
            </div>
        </div >)
}

export default MissionCrewShow;