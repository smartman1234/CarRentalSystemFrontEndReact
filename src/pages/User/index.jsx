import React, {Component, Fragment} from "react";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GDSEButton from "../../components/common/button";

import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";

import UsersService from "../../services/UsersService";

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
import {Link} from "react-router-dom";
import BookingDetails from "../BookingDetails";

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                uid: '',
                userName: '',
                userEmail: '',
                userAddress: '',
                userContactNo: '',
                userIdentityCardImg: '',
                userDrivingLicenceImg: '',

            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel:'Save',
            btnColor:"primary"


        }
    }
    deleteUser=async (uid)=>{
        let params={
            uid:uid
        }
       let res=await UsersService.deleteUser(params);
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

    updateUser = (data) => {
        console.log(data);
        this.setState({
            btnLabel:"update",
            btnColor:"success",
            formData: {
                uid: data.uid,
                userName: data.userName,
                userEmail: data.userEmail,
                userAddress: data.userAddress,
                userContactNo: data.userContactNo,
                userIdentityCardImg: data.userIdentityCardImg,
                userDrivingLicenceImg: data.userDrivingLicenceImg,

            }
        })
    };

    clearFields = (e) => {
        this.setState({
            formData: {
                uid: '',
                userName: '',
                userEmail: '',
                userAddress: '',
                userContactNo: '',
                userIdentityCardImg: '',
                userDrivingLicenceImg: '',

            }
        });
    }

    submitUser = async () => {
        let formData = this.state.formData;
        if (this.state.btnLabel==="Save"){
            let res = await UsersService.postUser(formData);
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
            let res=await UsersService.putUser(formData);
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

    exampleForMap = () => {
        this.state.data.map((value, index) => {
            // console.log(value.userName)
            // console.log(index)
            console.log(value)

            // this.state.data[index].id="U00_002"

        })
    }

    loadData = async () => {
        let res = await UsersService.fetchUser();
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
                <Typography variant="h2" className={classes.columnHeaderTitleContainer}>User Manage</Typography>
                <ValidatorForm
                    ref="form"
                    className="pt-2"
                    onSubmit={this.submitUser}

                >
                    <Grid container className="pt-2" spacing={3}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">User Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="User Id"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.uid}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.uid = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}

                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">User Name</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="User Name"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.userName}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.userName = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">userEmail</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="User Email"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.userEmail}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.userEmail = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">userAddress</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="userAddress"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.userAddress}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.userAddress = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">userContactNo</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="userContactNo"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.userContactNo}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.userContactNo = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">userIdentityCardImg</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="userIdentityCardImg"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.userIdentityCardImg}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.userIdentityCardImg = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">userDrivingLicenceImg</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="userDrivingLicenceImg"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.userDrivingLicenceImg}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.userDrivingLicenceImg = e.target.value
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


                            <Link to={"/bookingDetails"}>
                                <button>
                                    Book Car
                                </button>
                            </Link>
                        </Grid>


                    </Grid>
                </ValidatorForm>

                <Grid container>
                    <TableContainer component={Paper}  className={classes.container}>
                        <Table sx={{minWidth: 650}} aria-label="user table">
                            <TableHead className={classes.TableHead}>
                                <TableRow>
                                    <TableCell align="right">User Id</TableCell>
                                    <TableCell align="right">User Name</TableCell>
                                    <TableCell align="right">User Email</TableCell>
                                    <TableCell align="right">User Address</TableCell>
                                    <TableCell align="right">User Contact No</TableCell>
                                    <TableCell align="right">User Identity Card Image</TableCell>
                                    <TableCell align="right">User Driving Licence Image</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="right">{row.uid}</TableCell>
                                            <TableCell align="right">{row.userName}</TableCell>
                                            <TableCell align="right">{row.userEmail}</TableCell>
                                            <TableCell align="right">{row.userAddress}</TableCell>
                                            <TableCell align="right">{row.userContactNo}</TableCell>
                                            <TableCell align="right">{row.userIdentityCardImg}</TableCell>
                                            <TableCell align="right">{row.userDrivingLicenceImg}</TableCell>
                                            <TableCell align="right">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            this.updateUser(row);
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
                                                            this.deleteUser(row.uid);
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

export default  withStyles(styleSheet) (User);