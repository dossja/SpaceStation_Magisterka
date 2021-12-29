import React from 'react';
import { useEffect } from "react";

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

import missionsAPI from "../Axios/missionsAPI.js";
import positionTypeAPI from "../Axios/positionTypeAPI.js";

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
    const pAPI = new positionTypeAPI();

    const classes = useStyles();
    const [positionType, setPositionType] = React.useState([]);
    const [users, setUsers] = React.useState([]);

    const [modalStyle] = React.useState(getModalStyle);

    const [aktualizuj, setAktualizuj] = React.useState(true);

    useEffect(() => {
        console.log(props.missionID);
        if (aktualizuj) {
            getPositionTypeAPI();
            getMissionCrewAPI();
        }
    }, [aktualizuj]);

    const getPositionTypeAPI = () => {
        pAPI.get()
            .then(response => {
                console.log(response.data);
                setPositionType(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        setAktualizuj(false);
    }

    const getMissionCrewAPI = () => {
        mAPI.getCrewByID(props.missionID)
            .then(response => {
                console.log(response.data[0].crew);
                setUsers(response.data[0].crew);
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
                                        {users.user.id}
                                    </TableCell>
                                    <TableCell align="right">{users.user.name}</TableCell>
                                    <TableCell align="right">{users.user.surname}</TableCell>
                                    <TableCell align="right">{users.user.email}</TableCell>
                                    <TableCell align="right">{positionType[users.user.positionTypeId].name}</TableCell>
                                    {users.user.manager === true ? <TableCell align="right">True</TableCell> : <TableCell align="right">False</TableCell>}
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