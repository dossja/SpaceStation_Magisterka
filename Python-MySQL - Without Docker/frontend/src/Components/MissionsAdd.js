import React from 'react';
import { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';

import missionsAPI from "../Axios/missionsAPI.js";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function MissionsAdd(props) {
    const classes = useStyles();
    const mAPI = new missionsAPI();


    const postMission = () => {
        mAPI.post()
            .then(response => {
                console.log(response.data);
                console.log(response.status);
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <div>
            <Container maxWidth="s" className="Add-User-Page">
                <h3>Add Mission</h3>
                <Box mt="2rem">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={postMission}
                    >
                        Add
                    </Button></Box>

            </Container>
        </div>)
}

export default MissionsAdd;