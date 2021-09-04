import React from 'react';
import { useState, useEffect } from "react";

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

function ReportsShow() {
    const uAPI = new usersAPI();
    const rAPI = new reportAPI();
    const rtAPI = new reportTypeAPI();

    const classes = useStyles();
    const [reports, setReports] = React.useState([]);
    const [reportsCopy, setReportsCopy] = React.useState([]);
    const [reportType, setReportType] = React.useState([]);
    const [users, setUsers] = React.useState([]);
    let aktualizuj = true;

    const initialValues = {
        title: '',
        description: '',
        report_type: ''
    };
    const [values, setValues] = React.useState(initialValues);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    useEffect(() => {
        if (aktualizuj) {
            getReports();
        }

    }, [aktualizuj]);

    const getUsersAPI = (id) => {
        rtAPI.getByID(id)
            .then(response => {
                setReportType(response.data.reportTypes);
            })
            .catch(e => {
                console.log(e);
            });
        aktualizuj = false;
    }

    const getReportTypeAPI = (id) => {
        rtAPI.getByID(id)
            .then(response => {
                setReportType(response.data.reportTypes);
            })
            .catch(e => {
                console.log(e);
            });
        aktualizuj = false;
    }

    const getReports = () => {
        rAPI.get()
            .then(response => {
                console.log(response.data);
                setReports(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        aktualizuj = false;
    }

    const postReport = () => {
        // uAPI.post({ 'name': values.name, 'surname': values.surname, 'position_type_id': values.position, 'manager': values.manager })
        //     .then(response => {
        //         console.log(response.data);
        //         console.log(response.status);
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     });
        // setValues(initialValues);
    }

    return (
        <div>
            <Container maxWidth="s" className="Add-User-Page">
                <h2>Available Reports</h2>
            </Container>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Submit Date</TableCell>
                            <TableCell align="right">End Date</TableCell>
                            <TableCell align="right">Reporting user</TableCell>
                            <TableCell align="right">Operating user</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reports.map((reports) => (
                            <TableRow key={reports.id}>
                                <TableCell component="th" scope="row">
                                    {reports.id}
                                </TableCell>
                                <TableCell align="right">{reports.title}</TableCell>
                                <TableCell align="right">{reports.description}</TableCell>
                                <TableCell align="right">{reports.report_type}</TableCell>
                                <TableCell align="right">{reports.submit_date}</TableCell>
                                <TableCell align="right">{reports.end_date}</TableCell>
                                <TableCell align="right">{reports.reporting_user}</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"><Button
                                    variant="contained"
                                    color="primary"
                                    className="Btn-Assign"
                                // onClick={postReport}
                                >
                                    Assign
                                </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className="Btn-Cancel"
                                    // onClick={postReport}
                                    >
                                        Cancel
                                    </Button></TableCell>
                                {/* <TableCell align="right">{reports.operating_user_id}</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>)
}

export default ReportsShow;