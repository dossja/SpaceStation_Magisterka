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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';

import usersAPI from "../Axios/usersAPI.js";

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

function MissionsEdit(props) {
    const uAPI = new usersAPI();

    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
    const [users, setUsers] = React.useState([]);
    const [missionCrew, setMissionCrew] = React.useState([]);
    const [aktualizuj, setAktualizuj] = React.useState(true);

    const handleToggle = (value) => () => {
        const currentIndex = missionCrew.indexOf(value);
        const newMisionCrew = [...missionCrew];

        if (currentIndex === -1) {
            newMisionCrew.push(value);
        } else {
            newMisionCrew.splice(currentIndex, 1);
        }

        setMissionCrew(newMisionCrew);
    };

    useEffect(() => {
        console.log(props.missionID);
        if (aktualizuj)
            getUsersAPI();
    }, [aktualizuj]);

    const getUsersAPI = () => {
        uAPI.get()
            .then(response => {
                console.log(response.data);
                setUsers(response.data);
                console.log(users);
            })
            .catch(e => {
                console.log(e);
            });
        setAktualizuj(false);
    }

    const putMissionCrew = () => {
        console.log(missionCrew);
        // mcAPI.putByID(props.userID, user)
        //     .then(response => {
        //         console.log(response.data);
        //         console.log(response.status);
        //         props.setAktualizuj();
        //         props.handleClose();
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     });
    }

    return (
        <div>
            <Container maxWidth="s" className="Modify-User-Page">
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">Modify Mission</h2>
                    <Grid container
                        direction="column"
                        alignItems="left">
                        <FormControl className={classes.formControl}>
                            <List sx={{ width: '100%', maxWidth: 360 }}>
                                {users.map((users) => {
                                    const labelId = `checkbox-list-label-${users.id}`;

                                    return (
                                        <ListItem
                                            key={users.id}
                                            disablePadding
                                        >
                                            <ListItemButton role={undefined} onClick={handleToggle(users.id)} dense>
                                                <ListItemIcon>
                                                    <Checkbox
                                                        edge="start"
                                                        checked={missionCrew.indexOf(users.id) !== -1}
                                                        tabIndex={-1}
                                                        disableRipple
                                                        inputProps={{ 'aria-labelledby': labelId }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText id={labelId} primary={`${users.name} ${users.surname}`} />
                                            </ListItemButton>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </FormControl>
                    </Grid>
                    <Box mt="2rem">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={putMissionCrew}
                        >
                            Modify
                        </Button></Box>
                </div>
            </Container>
        </div>)
}

export default MissionsEdit;