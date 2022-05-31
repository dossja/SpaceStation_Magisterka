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
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

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
}));

function UsersAdd() {
    const uAPI = new usersAPI();
    const ptAPI = new positionTypeAPI();

    const classes = useStyles();
    const [positionType, setPositionType] = React.useState([])
    let aktualizuj = true;

    const initialValues = {
        name: '',
        surname: '',
        position: '',
        manager: false
    };
    const [values, setValues] = React.useState(initialValues);

    const handleChange = (prop) => (event) => {
        if (prop == 'manager')
            setValues({ ...values, [prop]: event.target.checked });
        else
            setValues({ ...values, [prop]: event.target.value });
    };

    useEffect(() => {
        if (aktualizuj)
            getPositionTypeAPI();
    }, [aktualizuj]);

    const getPositionTypeAPI = () => {
        ptAPI.get()
            .then(response => {
                setPositionType(response.data.positionTypes);
            })
            .catch(e => {
                console.log(e);
            });
        aktualizuj = false;
    }

    const postUser = () => {
        console.log(values.manager);
        uAPI.post({ 'name': values.name, 'surname': values.surname, 'position_type_id': values.position, 'manager': values.manager })
            .then(response => {
                console.log(response.data);
                console.log(response.status);
            })
            .catch(e => {
                console.log(e);
            });
        setValues(initialValues);
    }

    return (
        <div>
            <Container maxWidth="s" className="Add-User-Page">
                <h2>Add User</h2>
                <Grid container
                    direction="column"
                    // justifyContent="center"
                    alignItems="left">
                    <FormControl className={classes.formControl}>
                        <TextField
                            id="name"
                            label="First name"
                            value={values.name}
                            placeholder="John"
                            required fullWidth
                            onChange={handleChange('name')}
                        /></FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField
                            id="surname"
                            label="Surname"
                            required
                            value={values.surname}
                            placeholder="Smith"
                            onChange={handleChange('surname')}
                        /></FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label" required>Position</InputLabel>
                        <Select labelId="position" label="Position" id="select" onChange={handleChange('position')}>
                            {positionType.map(positionType => (
                                <MenuItem id={positionType.id} value={positionType.id} >{positionType.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <FormControlLabel
                            control={<Switch checked={values.manager} onChange={handleChange('manager')} name="manager" color="warning" />}
                            label="manager"
                        /></FormControl>
                </Grid>
                <Box mt="2rem">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={postUser}
                    >
                        Add
                    </Button></Box>

            </Container>
        </div>)
}

export default UsersAdd;