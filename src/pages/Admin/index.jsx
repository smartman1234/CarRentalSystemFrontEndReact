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
import AdminService from "../../services/AdminService";


import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import UserTable from "./UserTable";
import NavBar from "../../components/Home/grid";
import AppBar from "../../components/common/NavBar";

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import UsersService from "../../services/UsersService";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import logo from "../../assets/img/carLogo.jpg";

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                aid: '',
                password: '',
                username: '',
                name: '',
                email: '',
                contactNo: '',


            },

            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'Save',
            btnColor: "primary",


        }

    }





    deleteAdmin = async (aid) => {
        let params = {
            aid: aid
        }
        let res = await AdminService.deleteAdmin(params);
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

    updateAdmin = (data) => {
        console.log(data);
        this.setState({
            btnLabel: "update",
            btnColor: "success",
            formData: {
                aid: data.aid,
                password: data.password,
                username: data.username,
                name: data.name,
                email: data.email,
                contactNo: data.contactNo,

            }
        })
    };

    clearFields = (e) => {
        this.setState({
            formData: {
                aid: '',
                password: '',
                username: '',
                name: '',
                email: '',
                contactNo: '',


            }
        });
    }

    submitAdmin = async () => {
        let formData = this.state.formData;
        if (this.state.btnLabel === "Save") {
            let res = await AdminService.postAdmin(formData);
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
            let res = await AdminService.putAdmin(formData);
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
        let res = await AdminService.fetchAdmin();
        if (res.status === 200) {
            this.setState({
                data: res.data.data
            })
        }
        console.log(this.state.data)
        this.exampleForMap();
    }
    loadUser = async () => {
        let res = await UsersService.fetchUser();
        this.userMap();

    }

    componentDidMount() {
        this.loadData();
        this.loadUser();

        console.log(this.state.data)
    }

    userMap = () => {
        this.state.data.map((index) => {
            // console.log(value.userName)
            // console.log(index)
            console.log(index)
            // this.userCount=index;

            // this.state.data[index]

        })
    }

    render() {
        const {classes} = this.props;

        return (
            <Fragment>

                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5 bg-body rounded" >

                    <Grid item xs={1} sm={1} md={1} lg={1}>
                        <Stack direction="row" spacing={2}>
                            <Avatar
                                alt="Remy Sharp"
                                src={logo} alt=""
                                sx={{width: 100, height: 100}}
                            />
                        </Stack>

                    </Grid>


                    <span className={"navbar-brand mb-0 h1"}>Easy car rental private limited</span>
                    <ul className={"navbar-nav"}>
                        <li className={"nav-item"}><Link className={"nav-link"} to={"/"}>Home</Link></li>
                        <li className={"nav-item"}><Link className={"nav-link"} to={"/car"}>Car</Link></li>
                        <li className={"nav-item"}><Link className={"nav-link"} to={"/driver"}>Driver</Link></li>
                        {/*<li className={"nav-item"}><Link className={"nav-link"} to={"/driverDetail"}>DriverDetail</Link></li>*/}
                        <li className={"nav-item"}><Link className={"nav-link"} to={"/payment"}>Payment</Link></li>
                        <li className={"nav-item"}><Link className={"nav-link"} to={"/user"}>User</Link></li>
                        {/*<li className={"nav-item"}><Link className={"nav-link"} to={"/bookingDetails"}>BookingDetails</Link></li>*/}
                        {/*<li className={"nav-item"}><Link className={"nav-link"} to={"/admin"}>Admin</Link></li>*/}



                    </ul>
                </nav>
                <Grid container className="pt-2" spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Card sx={{maxWidth: 1200, maxHeight: 350}}>
                            <CardActionArea>

                                {/*<Typography variant="h5" >Car Manage</Typography>*/}
                                <CardContent>

                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="Number of registered users"
                                        placeholder={"4"}
                                        sx={{mb: 3}}
                                        // disabled={'true'}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                        value={this.userMap.userCount}
                                        //validators={['required','matchRegexp:^(B00_)[0-9]{3,4}$']}
                                    />
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="Total bookings for the day"
                                        placeholder={"Gall"}
                                        disabled={'true'}
                                        //sx={{mb: 15}}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    {/*<LocationOnIcon/>*/}
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                        // value={this.state.formData.pickUp}
                                        // onChange={(e) => {
                                        //     let formData = this.state.formData
                                        //     formData.pickUp = e.target.value
                                        //     this.setState({formData})
                                        // }}
                                    />


                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="Available cars"
                                        //type={"date"}
                                        placeholder={"4"}
                                        disabled={'true'}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    {/*<TodayIcon/>*/}
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                        // value={this.state.formData.pickUpDate}
                                        // onChange={(e) => {
                                        //     let formData = this.state.formData
                                        //     formData.pickUpDate = e.target.value
                                        //     this.setState({formData})
                                        // }}
                                    />
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="Available Driver"
                                        placeholder={"5"}
                                        disabled={'true'}
                                        // type={"time"}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    {/*<AccessTimeIcon/>*/}
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                        // value={this.state.formData.pickUpTime}
                                        // onChange={(e) => {
                                        //     let formData = this.state.formData
                                        //     formData.pickUpTime = e.target.value
                                        //     this.setState({formData})
                                        // }}
                                    />
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="maintenance Car"
                                        placeholder={"5"}
                                        // type={"time"}
                                        disabled={'true'}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    {/*<AccessTimeIcon/>*/}
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                        // value={this.state.formData.pickUpTime}
                                        // onChange={(e) => {
                                        //     let formData = this.state.formData
                                        //     formData.pickUpTime = e.target.value
                                        //     this.setState({formData})
                                        // }}
                                    />
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="Daily Income"
                                        placeholder={"10000.00"}
                                        disabled={'true'}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    {/*<AccessTimeIcon/>*/}
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"

                                    />
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="Weekly Income"
                                        placeholder={"10000.00"}
                                        disabled={'true'}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    {/*<AccessTimeIcon/>*/}
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"

                                    />
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="Monthly Income"
                                        placeholder={"10000.00"}
                                        disabled={'true'}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    {/*<AccessTimeIcon/>*/}
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"

                                    />
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="Yearly Income"
                                        placeholder={"10000.00"}
                                        disabled={'true'}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    {/*<AccessTimeIcon/>*/}
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"

                                    />
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>


                </Grid>
                <Typography variant="h2" className={classes.columnHeaderTitleContainer}>Admin Manage</Typography>


                <ValidatorForm
                    ref="form"
                    className="pt-2"
                    onSubmit={this.submitAdmin}
                >
                    <Grid container className="pt-2" spacing={3}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">Admin Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="A00_001"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.aid}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.aid = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required','matchRegexp:^(A00_)[0-9]{3,4}$']}

                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Password</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Re12^0l"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.password}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.password = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Username</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="username"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.username}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.username = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required','matchRegexp:^[a-zA-Z ]+$']}

                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Name</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Your Name"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.name}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.name = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required','matchRegexp:^[a-zA-Z ]+$']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Email</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="user@gmail.com"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.email}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.email = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',"isEmail"]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">ContactNo</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Your Phone No"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.contactNo}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.contactNo = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required','isPositive']}
                            />
                        </Grid>

                        <Grid container style={{marginTop: '10px'}} direction="row" justifyContent="flex-end"
                              alignItems="center">
                            <GDSEButton label={this.state.btnLabel} type="submit" size="small"
                                        color={this.state.btnColor}
                                        variant="contained"/>
                        </Grid>
                    </Grid>
                </ValidatorForm>

                <Grid container>
                    <TableContainer component={Paper} className={classes.container}>
                        <Table sx={{minWidth: 650}} aria-label="user table">
                            <TableHead className={classes.TableHead}>
                                <TableRow>
                                    <TableCell align="right">Admin Id</TableCell>
                                    <TableCell align="right">Password</TableCell>
                                    <TableCell align="right">Username</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">ContactNo</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="right">{row.aid}</TableCell>
                                            <TableCell align="right">{row.password}</TableCell>
                                            <TableCell align="right">{row.username}</TableCell>
                                            <TableCell align="right">{row.name}</TableCell>
                                            <TableCell align="right">{row.email}</TableCell>
                                            <TableCell align="right">{row.contactNo}</TableCell>
                                            <TableCell align="right">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            this.updateAdmin(row);
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
                                                            this.deleteAdmin(row.aid);
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

                    {/*<UserTable/>*/}
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

export default withStyles(styleSheet)(Admin);