import React from "react";
import MiniDrawer from "../../components/sideMenu";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


function createData(reportName, referenceID, reportStatus, reportLink, reqestedOn) {
    return { reportName, referenceID, reportStatus, reportLink, reqestedOn };
}

const rows = [
    createData('Shreeja', '0001020', 'New', '5 Nov 2022', '5 Dec 2022'),
    createData('Shreeja', '0001020', 'In_progress', '5 Nov 2022', '5 Dec 2022'),
    createData('Shreeja', '0001020', 'Completed', '5 Nov 2022', '5 Dec 2022'),
    createData('Shreeja', '0001020', 'Sent_To_DMS', '5 Nov 2022', '5 Dec 2022'),
    createData('Shreeja', '0001020', 'New', '5 Nov 2022', '5 Dec 2022'),
];

const ReportALL = () => {
    return (
        <>
            <MiniDrawer />
            <div style={{ marginLeft: '65px', padding: '20px' }}>
                <h3>All Reports</h3>
                <Card>
                    <div style={{padding:'10px'}}>
                    <Stack direction="row" spacing={1}>
                        <Chip label="My Report Request" style={{ backgroundColor: '#365069',color:'white' }} />
                        <Chip label="Report Request" variant="outlined" />
                    </Stack>
                    </div>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead style={{ background: '#365069' }}>
                                <TableRow>
                                    <TableCell style={{ color: 'white' }}>Name Of Report</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right">Report Reference ID</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right">Report Status</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right">Report Link</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right">Requested On</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.reportName}
                                        </TableCell>
                                        <TableCell align="right">{row.referenceID}</TableCell>
                                        <TableCell align="right">
                                            {/* <Stack direction="row" spacing={1}>
                                            </Stack> */}
                                            <Chip style={{ backgroundColor: '#E3F6E9' }} label={row.reportStatus} />
                                            {/* {row.reportStatus} */}
                                        </TableCell>
                                        <TableCell align="right">{row.reportLink}</TableCell>
                                        <TableCell align="right">{row.reqestedOn}</TableCell>
                                        <TableCell align="right">
                                            <Button variant="outlined" startIcon={<VisibilityIcon />}>
                                                View
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>

            </div>

        </>
    )
}

export default ReportALL;