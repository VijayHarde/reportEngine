import React, { useState } from "react";
import "./report.css";
import MiniDrawer from "../../components/sideMenu";

import { Card, CardContent, MenuItem } from '@material-ui/core';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    disabledButton: {
      background: "#FAC3B3 !important",
    },

    enableButton: {
        background: "#F26841 !important",
    }
  });

const Report = () => {

    const reports = {
        "responseData": {
            "EER": [{
                "reportId": "644a01cf85d675688b9df9dc",
                "reportCode": "EER",
                "reportName": "EXCESS_EXCEPTION_REPORT",
                "isActive": "Y",
                "createdOn": 1682577658136,
                "createdBy": "Rahul Verma",
                "updatedOn": 1682577658136,
                "updatedBy": "Rahul Verma"
            },
            {
                "reportId": "644a01cf85d675cxcfxv688b9df9dc",
                "reportCode": "EER",
                "reportName": "EXCESS_EXCEPTION",
                "isActive": "Y",
                "createdOn": 1682577658136,
                "createdBy": "Rahul Verma",
                "updatedOn": 1682577658136,
                "updatedBy": "Rahul Verma"
            }
            ]
        },
        "message": "Successful",
        "error": false,
        "statusCode": "OK"
    }

    const [report, setReport] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('')

    const classes = useStyles();

    const handleChange = (event) => {
        setReport(event.target.value);
    };

    const generateReport = () => {
        console.log("startDate", startDate.$d);
        console.log("End Date",endDate.$d);
        const data = reports.responseData.EER.filter(ele => ele.reportId == report)[0];
        console.log("Data------",data);
    }

    const resetValues = () => {
        setReport('');
        setStartDate('');
        setEndDate('');
    }
    
    const isFormValid = () => {
        return (report !== "" &&  startDate !== "" && endDate !== "");
    }

    return (
        <div>

            <MiniDrawer />
            {/* <Toolbar /> */}
            <div className="shadow" style={{ marginLeft: '65px', paddingLeft: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3 style={{ display: "flex", margin: '0', paddingTop: '10px' }}>
                        <div style={{ marginRight: "10px" }}><ArrowBackIcon /></div>
                        Basic Details Of Report.
                    </h3>

                    <div style={{ paddingTop: '10px' }}>
                        <Button 
                        variant="outlined"
                        onClick={resetValues}
                        >Reset</Button>
                        <Button 
                        variant="contained" 
                        disabled={!isFormValid()}
                        className={!isFormValid() ? classes.disabledButton : classes.enableButton}
                        onClick={generateReport}
                        style={{ margin: "5px"}}
                        >Generate Report
                        </Button>
                    </div>

                </div>
            </div>
            <div style={{ marginLeft: '70px', padding: '2%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: "65%" }}>
                    <Card>
                        <div style={{ paddingLeft: "40px", color: "#F8886D", borderBottom: "1px solid gray" }}>
                            <h3 style={{ display: "flex" }}>
                                <div style={{ marginRight: "10px" }}><SummarizeOutlinedIcon /></div>
                                Report Filter Details.
                            </h3>
                        </div>
                        <CardContent>
                            <div style={{ display: "flex", gap: "25%", textAlign: "center" }}>
                                <div>
                                    <h4 style={{ color: "#365069", margin: "0" }}>Select Report</h4>

                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-standard-label">Select</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={report}
                                            onChange={handleChange}
                                            label="Report"
                                            style={{ width: '300px' }}
                                        >
                                            {reports.responseData.EER.map((report) => (
                                                <MenuItem key={report.reportId} value={report.reportId}>
                                                    {report.reportName}
                                                </MenuItem>
                                            ))}
                                            {/* <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>One</MenuItem>
                                            <MenuItem value={20}>Two</MenuItem>
                                            <MenuItem value={30}>Three</MenuItem> */}
                                        </Select>
                                    </FormControl>
                                </div>

                                {/* <div>
                                    <h4 style={{ color: "#365069", margin: "0" }}>Version</h4>

                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-standard-label">Select</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={age}
                                            onChange={handleChange}
                                            label="Age"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>One</MenuItem>
                                            <MenuItem value={20}>Two</MenuItem>
                                            <MenuItem value={30}>Three</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div> */}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div style={{ width: "65%", marginTop: '25px' }}>

                    {report.length > 0 &&
                    <Card>
                        <div style={{ paddingLeft: "40px", color: "#F8886D", borderBottom: "1px solid gray" }}>
                            <h3 style={{ display: "flex" }}>
                                <div style={{ marginRight: "10px" }}><SummarizeOutlinedIcon /></div>
                                Select duration for the report
                            </h3>
                        </div>
                        <CardContent>
                            <div style={{ display: "flex", gap: "25%", textAlign: "center" }}>
                                <div>
                                    <h4 style={{ color: "#365069", }}>Start Date</h4>
                                    <LocalizationProvider dateAdapter={AdapterDayjs} style={{ marginTop: '10px' }}>
                                        <DatePicker
                                            value={startDate}
                                            onChange={(date) => setStartDate(date)}
                                        />
                                    </LocalizationProvider>
                                </div>

                                <div>
                                    <h4 style={{ color: "#365069" }}>End Date</h4>
                                    <LocalizationProvider dateAdapter={AdapterDayjs} style={{ marginTop: '10px' }}>
                                        <DatePicker
                                              value={endDate}
                                              onChange={(date) => setEndDate(date)}
                                        />
                                    </LocalizationProvider>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    }

                </div>
            </div>
        </div>
    )
}

export default Report;