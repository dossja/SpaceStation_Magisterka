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

function ReportsShow(props) {
    const rAPI = new reportAPI();

    const classes = useStyles();
    const [reports, setReports] = React.useState([]);

    const [open, setOpen] = React.useState(false);
    const [reportID, setReportID] = React.useState(false);

    const [aktualizuj, setAktualizuj] = React.useState(true);

    useEffect(() => {
        if (aktualizuj) {
            getReports();
        }

    }, [aktualizuj]);


    const getReports = () => {
        rAPI.get()
            .then(response => {
                console.log(response.data);
                let tmp_rep = response.data;
                tmp_rep.forEach(rep => {
                    if (rep.Incidents.length > 0)
                        rep.operatingUserId = rep.Incidents[0].userId;

                    else
                        rep.operatingUserId = null;
                    console.log(rep);
                })

                setReports(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        setAktualizuj(false);
    }

    const changeReportStatus = (status_id, report_id) => {
        let newReport;
        reports.forEach(report => {
            if (report.id === report_id)
                newReport = report;
        });
        newReport.reportStatusId = status_id;
        console.log(newReport);
        rAPI.putByID(report_id, newReport)
            .then(response => {
                console.log(response.data);
                console.log(response.status);
                setAktualizuj(true);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const handleClose = () => {
        console.log("H_Close");
        setOpen(false);
        setAktualizuj(true);
        console.log(aktualizuj);
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
                            {/* <TableCell align="right">Operating user</TableCell> */}
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
                                <TableCell align="right">{reports.ReportType.description}</TableCell>
                                <TableCell align="right">{reports.submitDate.split("T")[0]}</TableCell>
                                <TableCell align="right">{reports.endDate.split("T")[0]}</TableCell>
                                <TableCell align="right">{reports.reportingUserId}</TableCell>
                                <TableCell align="center">
                                    {reports.reportStatusId === 1 && props.isManager === true ? <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.btnAssign}
                                        onClick={() => {
                                            setOpen(true);
                                            setReportID(reports.id);
                                        }}
                                    >
                                        Assign
                                    </Button> : null}
                                    {/* && reports. == props.currentUserID */}
                                    {reports.reportStatusId === 2 && reports.operatingUserId == props.currentUserID ? <Button
                                        variant="contained"
                                        color="success"
                                        onClick={() => {
                                            changeReportStatus(3, reports.id)
                                        }}
                                    >
                                        In progress
                                    </Button> : null}
                                    {/* && reports.operating_user_id != props.currentUserID  */}
                                    {reports.reportStatusId === 2 && reports.operatingUserId != props.currentUserID ? <Button
                                        variant="contained"
                                        color="success"
                                        disabled
                                        onClick={() => {
                                            changeReportStatus(3, reports.id)
                                        }}
                                    >
                                        In progress
                                    </Button> : null}
                                    {/* && reports.operating_user_id == props.currentUserID  */}
                                    {reports.reportStatusId === 3 && reports.operatingUserId == props.currentUserID ? <Button
                                        variant="contained"
                                        color="success"
                                        onClick={() => {
                                            changeReportStatus(4, reports.id)
                                        }}
                                    >
                                        Finished
                                    </Button> : null}
                                    {/* && reports.operating_user_id != props.currentUserID  */}
                                    {reports.reportStatusId === 3 && reports.operatingUserId != props.currentUserID ? <Button
                                        variant="contained"
                                        color="success"
                                        disabled
                                        onClick={() => {
                                            changeReportStatus(4, reports.id)
                                        }}
                                    >
                                        Finished
                                    </Button> : null}
                                    {/* && (reports.operating_user_id == props.currentUserID || props.isManager == "True")  */}
                                    {reports.reportStatusId !== 4 && reports.reportStatusId !== 5 && (reports.operatingUserId == props.currentUserID || props.isManager == true) ? <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.btnCancel}
                                        onClick={() => {
                                            changeReportStatus(5, reports.id)
                                        }}
                                    >
                                        Cancel
                                    </Button> : null
                                    }

                                    {reports.reportStatusId === 4 ? <p color="lightGreen">Report archived</p> : null}
                                    {reports.reportStatusId === 5 ? <p color="red">Report cancelled</p> : null}

                                </TableCell>
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