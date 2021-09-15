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
import Modal from '@material-ui/core/Modal';

import reportAPI from "../Axios/reportAPI.js";

import "./Reports.css";
import ReportsAssign from './ReportsAssign.js';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    btnAssign: {
        margin: "10px",
        "background-color": "blue"
    },
    btnCancel: {
        margin: "10px",
        "background-color": "red"
    }
}));

function ReportsShow() {
    const rAPI = new reportAPI();

    const classes = useStyles();
    const [reports, setReports] = React.useState([]);

    const [open, setOpen] = React.useState(false);
    const [reportID, setReportID] = React.useState(false);

    let aktualizuj = true;

    useEffect(() => {
        if (aktualizuj) {
            getReports();
        }

    }, [aktualizuj]);


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

    const setAktualizuj = () => {
        aktualizuj = true;
    }

    const handleClose = () => {
        console.log("H_Close");
        setOpen(false);
        aktualizuj = true;
    };

    return (
        <div>
            <Container maxWidth="s" className="Show-Report-Page">
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
                                <TableCell align="right">{reports.operating_user}</TableCell>
                                <TableCell align="right"><Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.btnAssign}
                                    onClick={() => {
                                        setOpen(true);
                                        setReportID(reports.id);
                                    }}
                                >
                                    Assign
                                </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.btnCancel}
                                    // onClick={postReport}
                                    >
                                        Cancel
                                    </Button></TableCell>
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
                <ReportsAssign reportID={reportID} handleClose={handleClose} setAktualizuj={setAktualizuj} />
            </Modal>
        </div>)
}

export default ReportsShow;