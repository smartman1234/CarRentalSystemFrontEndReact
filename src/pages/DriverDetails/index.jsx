import React, {Component} from "react";
import DriverDetailsService from "../../services/DriverDetailsService";
import {Grid, Typography} from "@mui/material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
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
import GDSEButton from "../../components/common/button";
import GDSESnackBar from "../../components/common/snackBar";

class DriverDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                ddid: "",
                cid: "",
                driverName: "",
                driverPassword: "",
                pickUp: "",
                dropOff: "",
                pickUpDate: "",
                dropOffDate: "",
                pickUpTime: "",
                dropOffTime: ""
            },
            alert: false,
            message: "",
            severity: "",

            data: [],
            btnLabel: 'save',
            btnColor: 'primary'
        }
    }

    deleteDriverDetails = async (id) => {
        let params = {
            id: id
        }
        let res = await DriverDetailsService.deleteDriverDetails(params);

        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
        }
    };
    updateDriverDetails = (data) => {
        console.log(data)

        this.setState({
            btnLabel: 'update',
            btnColor: 'secondary',
            formData: {
                ddid: data.ddid,
                cid: data.cid,
                driverName: data.driverName,
                driverPassword: data.driverPassword,
                pickUp: data.pickUp,
                dropOff: data.dropOff,
                pickUpDate: data.pickUpDate,
                dropOffDate: data.dropOff,
                pickUpTime: data.pickUpTime,
                dropOffTime: data.dropOffTime
            }
        });
    };

    clearFields = () => {
        this.setState({
            formData: {
                ddid: "",
                cid: "",
                driverName: "",
                driverPassword: "",
                pickUp: "",
                dropOff: "",
                pickUpDate: "",
                dropOffDate: "",
                pickUpTime: "",
                dropOffTime: ""
            }
        });
    };
    // ------- React Map function example -------
    exampleForMap = () => {
        this.state.data.map((value, index) => {
            console.log(value)   // access element one by one
        })
    };

    loadData = async () => {
        let res = await DriverDetailsService.fetchDriverDetails();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

        this.exampleForMap()

    };

    submitDriverDetails = async () => {
        let formData = this.state.formData;

        if (this.state.btnLabel === "save") {
            let res = await DriverDetailsService.postDriverDetails(formData);

            console.log(res)    //print the promise

            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        } else {
            let res = await DriverDetailsService.putDriverDetails(formData);
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success',
                    btnLabel: 'save',
                    btnColor: 'primary'
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }
    };

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            // <Fragment>
            <>
                <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitDriverDetails()}>
                    <Grid container className="pt-2" spacing={3}>
                        <Grid item lg={12} xs={12} sm={12} md={12}>
                            <Typography variant="h2">DriverDetails Manage</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">DriverDetails Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="DriverDetails Id"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.ddid}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.ddid = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Customer Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Customer Id"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.cid}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.cid = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Id"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.did}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.did = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Name</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Name"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.driverName}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverName = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Password</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Password"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.driverPassword}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverPassword = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">pickUp</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="pickUp"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.pickUp}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.pickUp = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">dropOff</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="dropOff"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.dropOff}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.dropOff = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">pickUpDate</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="pickUpDate"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.pickUpDate}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.pickUpDate = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">dropOffDate</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="dropOffDate"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.dropOffDate}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.dropOffDate = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">pickUpTime</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="pickUpTime"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.pickUpTime}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.pickUpTime = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">dropOffTime</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="dropOffTime"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                value={this.state.formData.dropOffTime}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.dropOffTime = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>


                        <Grid container style={{marginTop: '10px'}} direction="row" justifyContent="flex-end"
                              alignItems="center">
                            <GDSEButton label={this.state.btnLabel} type="submit" size="small"
                                        color={this.state.btnColor} variant="contained"/>
                        </Grid>
                    </Grid>
                </ValidatorForm>
                <Grid contaner style={{marginTop: '15px'}}>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="driverDetail table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Driver Details Id</TableCell>
                                    <TableCell align="left">Customer Id</TableCell>
                                    <TableCell align="left">Driver Id</TableCell>
                                    <TableCell align="left">Driver Name</TableCell>
                                    <TableCell align="left">driverPassword</TableCell>
                                    <TableCell align="left">pickUp</TableCell>
                                    <TableCell align="left">dropOff</TableCell>
                                    <TableCell align="left">pickUpDate</TableCell>
                                    <TableCell align="left">dropOffDate</TableCell>
                                    <TableCell align="left">pickUpTime</TableCell>
                                    <TableCell align="left">dropOffTime</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.dd}</TableCell>
                                            <TableCell align="left">{row.cid}</TableCell>
                                            <TableCell align="left">{row.did}</TableCell>
                                            <TableCell align="left">{row.driverName}</TableCell>
                                            <TableCell align="left">{row.driverPassword}</TableCell>
                                            <TableCell align="left">{row.pickUp}</TableCell>
                                            <TableCell align="left">{row.dropOff}</TableCell>
                                            <TableCell align="left">{row.pickUpDate}</TableCell>
                                            <TableCell align="left">{row.dropOffDate}</TableCell>
                                            <TableCell align="left">{row.pickUpTime}</TableCell>
                                            <TableCell align="left">{row.dropOffTime}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            this.updateDriverDetails(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary"/>
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deleteDriverDetails(row.ddid)
                                                        }}
                                                    >
                                                        <DeleteIcon color="error"/>
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
            </>
            // </Fragment>
        );
    }
}

export default DriverDetails;