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
import reportAPI from "../Axios/reportAPI.js";
import reportTypeAPI from "../Axios/reportTypeAPI.js";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function ReportsAdd(props) {
    const uAPI = new usersAPI();
    const rAPI = new reportAPI();
    const rtAPI = new reportTypeAPI();

    const classes = useStyles();
    const [reportType, setReportType] = React.useState([]);
    let aktualizuj = true;

    const initialValues = {
        title: '',
        description: '',
        report_type: ''
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
            getReportTypeAPI();
    }, [aktualizuj]);

    const getReportTypeAPI = () => {
        rtAPI.get()
            .then(response => {
                setReportType(response.data);
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            });
        aktualizuj = false;
    }

    const postReport = () => {
        rAPI.post({ 'description': values.description, 'reporting_user_id': props.currentUserID, 'title': values.title, 'report_type_id': values.report_type })
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
                <h2>Add Report</h2>
                <Grid container
                    direction="column"
                    // justifyContent="center"
                    alignItems="left">
                    <FormControl className={classes.formControl}>
                        <TextField
                            id="title"
                            label="Title"
                            value={values.title}
                            placeholder="Problems with heating"
                            required fullWidth
                            onChange={handleChange('title')}
                        /></FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField
                            id="description"
                            label="Description"
                            required
                            multiline
                            rows={6}
                            value={values.description}
                            placeholder="When trying to..."
                            onChange={handleChange('description')}
                        /></FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label" required>Report type</InputLabel>
                        <Select labelId="report_type" label="Report Type" id="select" onChange={handleChange('report_type')}>
                            {reportType.map(reportType => (
                                <MenuItem id={reportType.id} value={reportType.id} >{reportType.description}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Box mt="2rem">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={postReport}
                    >
                        Add
                    </Button></Box>

            </Container>
        </div>)
}

export default ReportsAdd;