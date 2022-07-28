import React, {Component, Fragment} from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GDSEButton from "../../components/common/button";
import UsersService from "../../services/UsersService";
import Button from "@mui/material/Button";
import GDSEDataTable from "../../components/common/Table";
import GDSESnackBar from "../../components/common/snackBar";
import BasicTable from "../../components/Car";
import DriverService from "../../services/DriverService";


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


import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import {Link} from "react-router-dom";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import logo from "../../assets/img/carLogo.jpg";

class Driver extends Component{
    constructor(props) {
        super(props);

        this.state = {
            formData:{
                did: "",
                driverName: "",
                driverAge: "",
                driverPassword: "",
                driverLicence: "",
                driverEmail: "",
                driverContactNo: "",
                driverAddress: "",
                driverStatus: "",

            },
            alert: false,
            message: "",
            severity: "",


            data: [],
            btnLabel:'Save',
            btnColor:"primary"

        }
    }

    deleteDriver=async (did)=>{
        let params={
            did:did
        }
        let res=await DriverService.deleteDriver(params);
        if (res.status===200){
            this.setState({
                alert: true,
                message: res.data.message,
                severity: "success"
            })
            this.loadData();
        }else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: "error"
            });
        }
    }


    updateDriver = (data) => {
        console.log(data);
        this.setState({
            btnLabel:"update",
            btnColor:"success",
            formData: {
                did: data.did,
                driverName: data.driverName,
                driverAge: data.driverAge,
                driverPassword: data.driverPassword,
                driverLicence: data.driverLicence,
                driverEmail: data.driverEmail,
                driverContactNo: data.driverContactNo,
                driverAddress: data.driverAddress,
                driverStatus: data.driverStatus,
            }
        })
    };

    clearFields = (e) => {
        this.setState({
            formData: {
                did: "",
                driverName: "",
                driverAge: "",
                driverPassword: "",
                driverLicence: "",
                driverEmail: "",
                driverContactNo: "",
                driverAddress: "",
                driverStatus: "",

            }
        });
    }


    submitUser = async () => {
        let formData = this.state.formData;
        if (this.state.btnLabel==="Save"){
            let res = await DriverService.postDriver(formData);
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

        }else {
            let res=await DriverService.putDriver(formData);
            if (res.status===200){
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: "success",
                    btnLabel:"Save",
                    btnColor:"primary"
                });
                this.clearFields();
                this.loadData();
            }else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: "error"
                });
            }
        }
    }

    loadData = async () => {
        let res = await DriverService.fetchDriver();
        if (res.status === 200) {
            this.setState({
                data: res.data.data
            })
        }
        console.log(this.state.data)
    }

    componentDidMount() {
        this.loadData();

        console.log(this.state.data)
    }

    render() {
        const { classes } = this.props;
        return(
            <Fragment>
                <Grid container className="pt-7" spacing={2}>

                    <Grid item xs={11} sm={11} md={11} lg={11}>
                        <Typography variant="h2" className={classes.columnHeaderTitleContainer} sx={{mb: 5}}>
                           Driver
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1}>
                        <Stack direction="row" spacing={2}>
                            <Avatar
                                alt="Remy Sharp"
                                src={logo} alt=""
                                sx={{width: 100, height: 100}}
                            />
                        </Stack>

                    </Grid>


                </Grid>                <ValidatorForm
                    ref="form"
                    className="pt-2"
                    onSubmit={this.submitUser}
                >
                    <Grid container className="pt-2" spacing={3}>
                        {/*<Grid item lg={12} xs={12} sm={12} md={12}>*/}
                        {/*    <Typography variant="body2">User Id</Typography>*/}
                        {/*</Grid>*/}
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">Driver Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="D00_001"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.did}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.did = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required','matchRegexp:^(D00_)[0-9]{3,4}$']}

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
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required','matchRegexp:^[a-zA-Z ]+$']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Age</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Age"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.driverAge}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverAge = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required','minNumber:0', 'maxNumber:255', 'matchRegexp:^[0-9]{1,2}$']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Password</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Dk0^kl&hl"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.driverPassword}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverPassword = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Licence</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="B44909478"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.driverLicence}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverLicence = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        {/*<Grid item xs={12} sm={12} md={6} lg={6}>*/}
                        {/*    <Typography variant="subtitle1">Driver Licence</Typography>*/}
                        {/*    <TextValidator*/}
                        {/*        id="outlinedbasic"*/}
                        {/*        placeholder="Driver Licence"*/}
                        {/*        variant="outlined"*/}
                        {/*        size="small"*/}
                        {/*        value={this.state.formData.driverLicence}*/}
                        {/*        onChange={(e) => {*/}
                        {/*            let formData = this.state.formData*/}
                        {/*            formData.driverLicence = e.target.value*/}
                        {/*            this.setState({ formData })*/}
                        {/*        }}*/}
                        {/*        style={{ width: '100%' }}*/}
                        {/*        validators={['required',]}*/}
                        {/*    />*/}
                        {/*</Grid>*/}
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Email</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Email"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.driverEmail}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverEmail = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required','isEmail']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver ContactNo</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver ContactNo"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.driverContactNo}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverContactNo = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required','isPositive']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Address</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Address"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.driverAddress}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverAddress = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required','isString']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Status</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Available"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.driverStatus}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverStatus = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required','isString']}
                            />
                        </Grid>
                        {/*<Grid item lg={12} md={12} sm={12} xm={6} style={{display: 'flex'}} justifyContent="flex-end"*/}
                        {/*      spacing-xs-6>*/}
                        {/*    <Button variant="outlined" color="success">*/}
                        {/*        Clear*/}
                        {/*    </Button>*/}
                        {/*    <div style={{width: "10px"}}></div>*/}

                        {/*    <Button variant="outlined" color="primary">*/}
                        {/*        Save*/}
                        {/*    </Button>*/}

                        {/*    <div style={{width: "10px"}}></div>*/}

                        {/*    <Button variant="outlined" color="warning">*/}
                        {/*        Update*/}
                        {/*    </Button>*/}
                        {/*    <div style={{width: "10px"}}></div>*/}

                        {/*    <Button variant="outlined" color="error">*/}
                        {/*        Delete*/}
                        {/*    </Button>*/}
                        {/*</Grid>*/}

                        <Grid container style={{marginTop: '10px'}} direction="row" justifyContent="flex-end"
                              alignItems="center">
                            <GDSEButton label={this.state.btnLabel} type="submit" size="small" color={this.state.btnColor}
                                        variant="contained"/>


                            <Link to={"/driverDetail"}>
                                <Button variant="outlined" color="success">Driver Details</Button>
                            </Link>
                        </Grid>

                    </Grid>
                </ValidatorForm>

                {/*<Grid container style={{ height: 400, width: '100%', marginTop: '50px' }}>*/}
                {/*    /!* <BasicPostTable data={this.state.data} /> *!/*/}
                {/*    <GDSEDataTable*/}
                {/*        columns={this.state.columns}*/}
                {/*        rows={this.state.data}*/}
                {/*        rowsPerPageOptions={5}*/}
                {/*        pageSize={5}*/}
                {/*        // checkboxSelection={true}*/}
                {/*    />*/}
                {/*</Grid>*/}
                {/*<GDSESnackBar*/}
                {/*    open={this.state.alert}*/}
                {/*    onClose={() => {*/}
                {/*        this.setState({ open: false })*/}
                {/*    }}*/}
                {/*    message={this.state.message}*/}
                {/*    autoHideDuration={3000}*/}
                {/*    severity={this.state.severity}*/}
                {/*    variant="filled"*/}
                {/*/>*/}


                <Grid container>
                    <TableContainer component={Paper} className={classes.container}>
                        <Table sx={{minWidth: 650}} aria-label="user table">
                            <TableHead className={classes.TableHead}>
                                <TableRow>
                                    <TableCell align="right">Driver Id</TableCell>
                                    <TableCell align="right">Driver Name</TableCell>
                                    <TableCell align="right">Driver Age</TableCell>
                                    <TableCell align="right">Driver Password</TableCell>
                                    <TableCell align="right">Driver Licence</TableCell>
                                    <TableCell align="right">Driver Email</TableCell>
                                    <TableCell align="right">Driver ContactNo</TableCell>
                                    <TableCell align="right">Driver Address</TableCell>
                                    <TableCell align="right">Driver Status</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="right">{row.did}</TableCell>
                                            <TableCell align="right">{row.driverName}</TableCell>
                                            <TableCell align="right">{row.driverAge}</TableCell>
                                            <TableCell align="right">{row.driverPassword}</TableCell>
                                            <TableCell align="right">{row.driverLicence}</TableCell>
                                            <TableCell align="right">{row.driverEmail}</TableCell>
                                            <TableCell align="right">{row.driverContactNo}</TableCell>
                                            <TableCell align="right">{row.driverAddress}</TableCell>
                                            <TableCell align="right">{row.driverStatus}</TableCell>
                                            <TableCell align="right">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            this.updateDriver(row);
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
                                                            this.deleteDriver(row.did);
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

export default  withStyles(styleSheet) (Driver);