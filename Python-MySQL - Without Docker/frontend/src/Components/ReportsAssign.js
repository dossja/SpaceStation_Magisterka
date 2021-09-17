import React from 'react';
import { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import usersAPI from "../Axios/usersAPI.js";
import reportsAPI from "../Axios/reportAPI.js";
import incidentsAPI from '../Axios/incidentsAPI.js';

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
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        "text-align": "center"
    },
}));

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

function ReportsAssign(props) {
    const uAPI = new usersAPI();
    const rAPI = new reportsAPI();
    const iAPI = new incidentsAPI();

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [users, setUsers] = React.useState([]);
    const [report, setReport] = React.useState({});

    const initialValues = {
        operating_user_id: ''
    };
    const [values, setValues] = React.useState(initialValues);

    let aktualizuj = true;

    const handleChange = (prop) => (event) => {
        setValues({ ...report, [prop]: event.target.value });
    };

    useEffect(() => {
        console.log(props.reportID);
        getUsers();
        getReportByID(props.reportID);
    }, [aktualizuj]);

    const getUsers = () => {
        uAPI.get()
            .then(response => {
                let userss = [];
                for (let i in response.data) {
                    userss.push({ 'id': response.data[i].id, 'name': response.data[i].name + ' ' + response.data[i].surname });
                }
                setUsers(userss);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const getReportByID = (id) => {
        rAPI.getByID(id)
            .then(response => {
                console.log(response.data);
                setReport(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const putReport = () => {
        console.log(props.reportID);
        console.log(values.operating_user_id);
        iAPI.post({ 'report_id': props.reportID, 'operating_user_id': values.operating_user_id })
            .then(response => {
                console.log(response.data);
                console.log(response.status);
                report.report_status_id = "2";
                console.log(report);
                rAPI.putByID(props.reportID, report)
                    .then(response => {
                        console.log(response.data);
                        console.log(response.status);
                        props.setAktualizuj();
                        props.handleClose();
                    })
                    .catch(e => {
                        console.log(e);
                    });
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <div>
            <Container maxWidth="s" className="Add-User-Page">
                <div style={modalStyle} className={classes.paper}>

                    <h2 id="simple-modal-title">Assign user</h2>
                    <Grid container
                        direction="column"
                        alignItems="left">
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label" required>User</InputLabel>
                            <Select labelId="position" label="Position" id="select" onChange={handleChange('operating_user_id')}>
                                {users.map(users => (
                                    <MenuItem value={users.id} >{users.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Box mt="2rem">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={putReport}
                        >
                            Assign
                        </Button></Box>
                </div>
            </Container>
        </div>)
}

export default ReportsAssign;