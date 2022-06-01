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
import Switch from '@material-ui/core/Switch';

import usersAPI from "../Axios/usersAPI.js";
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

function UsersAdd(props) {
    const uAPI = new usersAPI();
    const ptAPI = new positionTypeAPI();

    const classes = useStyles();
    const [positionType, setPositionType] = React.useState([]);
    const [modalStyle] = React.useState(getModalStyle);
    const [user, setUser] = React.useState({});

    let aktualizuj = true;

    const handleChange = (prop) => (event) => {
        if (prop == 'manager')
            setUser({ ...user, [prop]: event.target.checked });
        else
            setUser({ ...user, [prop]: event.target.value });
    };

    useEffect(() => {
        console.log("HI");
        console.log(props.userID);
        if (aktualizuj)
            getPositionTypeAPI();
    }, [aktualizuj]);

    const getPositionTypeAPI = () => {
        ptAPI.get()
            .then(response => {
                setPositionType(response.data.positionTypes);
                getUserByID(props.userID);
            })
            .catch(e => {
                console.log(e);
            });
        aktualizuj = false;
    }

    const getUserByID = (id) => {
        uAPI.getByID(id)
            .then(response => {
                console.log(response.data);
                setUser(response.data);
                // setPositionType(response.data.positionTypes);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const putUser = () => {
        console.log(user);
        uAPI.putByID(props.userID, user)
            .then(response => {
                console.log(response.data);
                console.log(response.status);
                props.setAktualizuj();
                props.handleClose();
            })
            .catch(e => {
                console.log(e);
            });
        // setValues(initialValues);
    }

    return (
        <div>
            <Container maxWidth="s" className="Modify-User-Page">
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">Modify User</h2>
                    <Grid container
                        direction="column"
                        // justifyContent="center"
                        alignItems="left">
                        <FormControl className={classes.formControl}>
                            <TextField
                                id="name"
                                label="First name"
                                value={user.name}
                                placeholder="John"
                                required fullWidth
                                onChange={handleChange('name')}
                            /></FormControl>
                        <FormControl className={classes.formControl}>
                            <TextField
                                id="surname"
                                label="Surname"
                                required
                                value={user.surname}
                                placeholder="Smith"
                                onChange={handleChange('surname')}
                            /></FormControl>
                        <FormControl className={classes.formControl}>
                            <TextField
                                id="email"
                                label="Email"
                                required
                                value={user.email}
                                placeholder="mail@company.com"
                                onChange={handleChange('email')}
                            /></FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label" required>Position</InputLabel>
                            <Select labelId="position" label="Position" id="select" value={user.position_type_id} onChange={handleChange('position_type_id')}>
                                {positionType.map(positionType => (
                                    <MenuItem id={positionType.id} value={positionType.id} >{positionType.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <FormControlLabel
                                control={<Switch checked={user.manager} name="manager" onChange={handleChange('manager')} color="warning" />}
                                label="manager"
                            /></FormControl>
                    </Grid>
                    <Box mt="2rem">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={putUser}
                        >
                            Modify
                        </Button></Box>
                </div>
            </Container>
        </div>)
}

export default UsersAdd;