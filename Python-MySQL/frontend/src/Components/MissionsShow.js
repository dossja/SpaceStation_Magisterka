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

import MissionsEdit from './MissionsEdit.js';
import MissionCrewShow from './MissionCrewShow';

import missionsAPI from "../Axios/missionsAPI.js";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}))

function MissionsShow(props) {
    const mAPI = new missionsAPI();

    const classes = useStyles();
    const [missions, setMissions] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [openShow, setOpenShow] = React.useState(false);
    const [missionID, setMissionID] = React.useState(false);

    const [aktualizuj, setAktualizuj] = React.useState(true);

    useEffect(() => {
        if (aktualizuj)
            getMissionsAPI();
    }, [aktualizuj]);

    const getMissionsAPI = () => {
        mAPI.get()
            .then(response => {
                console.log(response.data);
                setMissions(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        setAktualizuj(false);
    }


    const handleClose = () => {
        console.log("H_Close");
        setOpen(false);
        setOpenShow(false);
        setAktualizuj(true);
        console.log(aktualizuj);
    };

    return (
        <div>
            <Container maxWidth="s" className="Add-User-Page">
                <h3>All Missions</h3>
            </Container>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell align="right">Start Date</TableCell>
                            <TableCell align="right">End Date</TableCell>
                            {props.isManager == true ? <TableCell align="center">Actions</TableCell> : null}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {missions.map((missions) => (
                            <TableRow key={missions.id}>
                                <TableCell component="th" scope="row">
                                    {missions.id}
                                </TableCell>
                                <TableCell align="right">{missions.start_date}</TableCell>
                                <TableCell align="right">{missions.end_date}</TableCell>
                                {props.isManager == "True" && missions.crew == "False" ? <TableCell align="right">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.btnEdit}
                                        // onClick={postReport}
                                        onClick={() => {
                                            setOpen(true);
                                            setMissionID(missions.id);
                                        }}
                                    >
                                        Edit
                                    </Button>
                                </TableCell> : null}
                                {missions.crew == true ? <TableCell align="right">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        // className={classes.btnEdit}
                                        // onClick={postReport}
                                        onClick={() => {
                                            setOpenShow(true);
                                            setMissionID(missions.id);
                                        }}
                                    >
                                        Show
                                    </Button>
                                </TableCell> : null}
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
                <MissionsEdit missionID={missionID} handleClose={handleClose} setAktualizuj={setAktualizuj} />
            </Modal>

            <Modal
                open={openShow}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <MissionCrewShow missionID={missionID} handleClose={handleClose} setAktualizuj={setAktualizuj} />
            </Modal>
        </div>)
}

export default MissionsShow;