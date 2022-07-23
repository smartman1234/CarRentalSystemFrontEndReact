import React, {Component, Fragment} from "react";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GDSEButton from "../../components/common/button";


import GDSESnackBar from "../../components/common/snackBar";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import EditIcon from '@mui/icons-material/Edit';
import DriverDetailsService from "../../services/DriverDetailsService";
import PaymentService from "../../services/PaymentService";

class DriverDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                ddid: '',
                cid: '',
                did: '',
                driverName: '',
                driverPassword: '',
                pickUp: '',
                dropOff: '',
                pickUpDate: '',
                dropOffDate: '',
                pickUpTime: '',
                dropOffTime: '',

            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel:'Save',
            btnColor:"primary"


        }
    }
    deleteDriverDetails = async (ddid) => {
        let params = {
            ddid: ddid
        }
        let res = await DriverDetailsService.deleteDriverDetails(params);
        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: "success"
            })
            this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: "error"
            });
        }
    }


    /*
    *  ddid: '',
                cid: '',
                did: '',
                driverName: '',
                driverPassword: '',
                pickUp: '',
                dropOff: '',
                pickUpDate: '',
                dropOffDate: '',
                pickUpTime: '',
                dropOffTime: '',
    * */
    updatePayment = (data) => {
        console.log(data);
        this.setState({
            btnLabel: "update",
            btnColor: "success",
            formData: {
                ddid: data.ddid,
                cid: data.cid,
                did: data.did,
                driverName: data.driverName,
                driverPassword: data.driverPassword,
                pickUp: data.pickUp,
                dropOff: data.dropOff,
                pickUpDate: data.pickUpDate,
                dropOffDate: data.dropOffDate,
                pickUpTime: data.pickUpTime,
                dropOffTime: data.dropOffTime,

            }
        })
    };

    clearFields = (e) => {
        this.setState({
            formData: {
                ddid: '',
                cid: '',
                did: '',
                driverName: '',
                driverPassword: '',
                pickUp: '',
                dropOff: '',
                pickUpDate: '',
                dropOffDate: '',
                pickUpTime: '',
                dropOffTime: '',

            }
        });
    }
    submitDriverDetails = async () => {
        let formData = this.state.formData;
        if (this.state.btnLabel === "Save") {
            let res = await DriverDetailsService.postDriverDetails(formData);
            console.log(res);

            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: "success"
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: "error"
                });
            }

        } else {
            let res = await DriverDetailsService.putDriverDetails(formData);
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: "success",
                    btnLabel: "Save",
                    btnColor: "primary"
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: "error"
                });
            }
        }
    }

    exampleForMap = () => {
        this.state.data.map((value, index) => {
            // console.log(value.userName)
            // console.log(index)
            console.log(value)

            // this.state.data[index].id="U00_002"

        })
    }

    loadData = async () => {
        let res = await DriverDetailsService.fetchDriverDetails();
        if (res.status === 200) {
            this.setState({
                data: res.data.data
            })
        }
        console.log(this.state.data)
        this.exampleForMap();
    }

    componentDidMount() {
        this.loadData();

        console.log(this.state.data)
    }

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Typography variant="h2">Driver Details Manage</Typography>
                <ValidatorForm
                    ref="form"
                    className="pt-2"
                    onSubmit={this.submitDriverDetails}
                >
                    <Grid container className="pt-2" spacing={3}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">DriverDetails Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="DriverDetails Id"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.ddid}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.ddid = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}

                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Customer Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Customer Id"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.cid}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.cid = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Id"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.did}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.did = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Name</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Name"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.driverName}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverName = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Password</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Password"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.driverPassword}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverPassword = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Pick Up</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Pick Up"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.pickUp}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.pickUp = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Drop Off</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Drop Off"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.dropOff}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.dropOff = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Pick Up Date</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Pick Up Date"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.pickUpDate}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.pickUpDate = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}
                            />
                        </Grid>

                         <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Drop Off Date</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Drop Off Date"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.dropOffDate}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.dropOffDate = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}
                            />
                        </Grid>

                         <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Pick Up Time</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Pick Up Time"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.pickUpTime}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.pickUpTime = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}
                            />
                        </Grid>

                         <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Drop Off Time</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Drop Off Time"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.dropOffTime}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.dropOffTime = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}
                            />
                        </Grid>


                        <Grid container style={{marginTop: '10px'}} direction="row" justifyContent="flex-end"
                              alignItems="center">
                            <GDSEButton label={this.state.btnLabel} type="submit" size="small" color={this.state.btnColor}
                                        variant="contained"/>
                        </Grid>
                    </Grid>
                </ValidatorForm>

                <Grid container>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="user table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">DriverDetails Id</TableCell>
                                    <TableCell align="right">Customer Id</TableCell>
                                    <TableCell align="right">Driver Id</TableCell>
                                    <TableCell align="right">Driver Name</TableCell>
                                    <TableCell align="right">Driver Password</TableCell>
                                    <TableCell align="right">Pick Up</TableCell>
                                    <TableCell align="right">Drop Off</TableCell>
                                    <TableCell align="right">Pick Up Date</TableCell>
                                    <TableCell align="right">Drop Off Date</TableCell>
                                    <TableCell align="right">Pick Up Time</TableCell>
                                    <TableCell align="right">Drop Off Time</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="right">{row.ddid}</TableCell>
                                            <TableCell align="right">{row.cid}</TableCell>
                                            <TableCell align="right">{row.did}</TableCell>
                                            <TableCell align="right">{row.driverName}</TableCell>
                                            <TableCell align="right">{row.driverPassword}</TableCell>
                                            <TableCell align="right">{row.pickUp}</TableCell>
                                            <TableCell align="right">{row.dropOff}</TableCell>
                                            <TableCell align="right">{row.pickUpDate}</TableCell>
                                            <TableCell align="right">{row.dropOffDate}</TableCell>
                                            <TableCell align="right">{row.pickUpTime}</TableCell>
                                            <TableCell align="right">{row.dropOffTime}</TableCell>
                                            <TableCell align="right">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            this.updateDriverDetails(row);
                                                        }}
                                                    >
                                                        <EditIcon color={"primary"}/>
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                            <TableCell align="right">
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("delete icon clicked!")
                                                            this.deleteDriverDetails(row.ddid);
                                                        }}
                                                    >
                                                        <DeleteIcon color={"error"}/>
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }

                            </TableBody>
                        </Table>

                    </TableContainer>
                </Grid>

                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({alert: false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"

                />
            </Fragment>


        )
    }
}

export default DriverDetails;