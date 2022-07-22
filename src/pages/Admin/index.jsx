import React, {Component, Fragment} from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {styleSheet} from "./style";
import {withStyles} from '@mui/styles';
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import GDSESnackBar from "../../components/common/snackBar";
import AdminService from "../../services/AdminService";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import styled from "@mui/material/styles/styled";
import {Link} from "react-router-dom";
import GDSEButton from "../../components/common/button";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


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
                contactNo: ''
            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'save',
            btnColor: 'primary'

        }

    }

    deleteAdmin = async (aid) => {
        let params = {
            id: aid
        }
        let res = await AdminService.deleteAdmin(params);

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

    updateAdmin = (data) => {
        console.log(data)

        this.setState({
            btnLabel: 'update',
            btnColor: 'secondary',
            formData: {
                aid: data.aid,
                password: data.password,
                username: data.userName,
                name: data.name,
                email: data.email,
                contactNo: data.contactNo
            },
        });
    };
    clearFields = () => {
        this.setState({
            formData: {
                formData: {
                    aid: '',
                    password: '',
                    username: '',
                    name: '',
                    email: '',
                    contactNo: ''
                },
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
        let res = await AdminService.fetchAdmin();
        if (res.status === 200) {
            this.setState({
                data: res.data.data
            })
            console.log(this.state.data)

        }
        console.log(this.state.data)

        this.exampleForMap()
    }

    submitAdmin = async () => {
        let formData = this.state.formData;

        if (this.state.btnLabel === "save") {
            let res = await AdminService.postAdmin(formData);

            console.log(res)    //print the promise

            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                this.clearFields();
                await this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        } else {
            let res = await AdminService.putAdmin(formData);
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success',
                    btnLabel: 'save',
                    btnColor: 'primary'
                });
                this.clearFields();
                await this.loadData();
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
        const {classes} = this.props;

        const Item = styled(Paper)(({theme}) => ({
            // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            backgroundColor: theme.palette.mode === 'light' ? '#BBDEFB' : '#fff',
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'left',
            color: theme.palette.text.secondary,

        }));

        return (
            <Fragment>
                <Typography className={classes.columnHeaderTitleContainer} variant={"h4"} sx={{mb: 3}}>
                    Admin Manager
                </Typography>


                <Grid Grid container spacing={2} item xs={8} sx={{mb: 2}}>
                    <Grid item lg={6} md={6} sm={6} xm={6} spacing={2} texta>
                        <div>
                            <Card variant="outlined">
                                <Typography className={classes.column} variant={"h5"}>
                                    <Item>Daily Rent</Item>
                                </Typography>
                                <Typography className={classes.column} variant={"h5"}>
                                    <Item>Monthly Rent</Item>
                                </Typography>
                                <Typography className={classes.column} variant={"h5"}>
                                    <Item>Daily Income</Item>
                                </Typography>
                                <Typography className={classes.column} variant={"h5"}>
                                    <Item>Monthly Income</Item>
                                </Typography>
                            </Card>
                        </div>
                    </Grid>

                    <Grid item lg={11} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-start"
                          spacing-xs-6>
                        <div>
                            <Card variant="outlined">

                                <Link to={"/car"}>
                                    <Button variant="outlined" color="error">
                                        Car
                                    </Button>
                                </Link>


                                <Link to={"/driver"}>
                                    <Button variant="outlined" color="error">
                                        Driver
                                    </Button>
                                </Link>
                            </Card>
                        </div>
                    </Grid>

                </Grid>

                <ValidatorForm
                    ValidatorForm ref="form"
                    className="pt-2"
                    onSubmit={this.submitAdmin()}
                >

                    <Grid container spacing={0.5}>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextValidator id='outline-basic'
                                           placeholder='Admin Id'
                                           label='Admin id'
                                           variant='outlined'
                                           size='small'
                                           value={this.state.formData.aid}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.aid = e.target.value
                                               this.setState({formData})
                                           }}
                                           style={{width: '100%'}}
                                           validators={['required',]}
                            />

                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextValidator id='outline-basic'
                                           placeholder='Password'
                                           label='Password'
                                           variant='outlined'
                                           size='small'
                                           value={this.state.formData.numberOfPassengers}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.numberOfPassengers = e.target.value
                                               this.setState({formData})
                                           }}
                                           style={{width: '100%'}}
                                           validators={['required',]}

                            />

                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic"
                                       placeHolder="Username"
                                       label="Username"
                                       variant="outlined"
                                       size="small"
                                       value={this.state.formData.color}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.color = e.target.value
                                           this.setState({formData})
                                       }}
                                       style={{width: '100%'}}
                                       validators={['required',]}

                            />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic"
                                       placeHolder="Name"
                                       label="Name"
                                       variant="outlined"
                                       size="small"
                                       value={this.state.formData.registrationNumber}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.registrationNumber = e.target.value
                                           this.setState({formData})
                                       }}
                                       style={{width: '100%'}}
                                       validators={['required',]}
                            />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic"
                                       placeHolder="Email"
                                       label="Email"
                                       variant="outlined"
                                       size="small"
                                       value={this.state.formData.brand}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.brand = e.target.value
                                           this.setState({formData})
                                       }}
                                       style={{width: '100%'}}
                                       validators={['required',]}
                            />
                        </Grid>


                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic"
                                       placeHolder="Contact"
                                       label="Contact"
                                       variant="outlined"
                                       size="small"
                                       value={this.state.formData.status}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.status = e.target.value
                                           this.setState({formData})
                                       }}
                                       style={{width: '100%'}}
                                       validators={['required',]}
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
                            <GDSEButton label={this.state.btnLabel} type="submit" size="small"
                                        color={this.state.btnColor} variant="contained"/>
                        </Grid>
                    </Grid>
                </ValidatorForm>
                {/*<Grid container style={{height: 400, width: '100%', marginTop: '40px'}}>*/}
                {/*    /!* <BasicPostTable data={this.state.data} /> *!/*/}
                {/*    <GDSEDataTable*/}
                {/*        columns={this.state.columns}*/}
                {/*        rows={this.state.data}*/}
                {/*        rowsPerPageOptions={5}*/}
                {/*        pageSize={5}*/}
                {/*        // checkboxSelection={true}*/}
                {/*    />*/}
                {/*</Grid>*/}

                <Grid contaner style={{marginTop: '15px'}}>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="Admin table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Admin Id</TableCell>
                                    <TableCell align="left">Admin Password</TableCell>
                                    <TableCell align="left">Admin UserName</TableCell>
                                    <TableCell align="left">Admin Name</TableCell>
                                    <TableCell align="left">Admin Email</TableCell>
                                    <TableCell align="left">Admin ContactNo</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.aid}</TableCell>
                                            <TableCell align="left">{row.password}</TableCell>
                                            <TableCell align="left">{row.username}</TableCell>
                                            <TableCell align="left">{row.name}</TableCell>
                                            <TableCell align="left">{row.email}</TableCell>
                                            <TableCell align="left">{row.contactNo}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            this.updateAdmin(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary"/>
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deleteAdmin(row.aid)
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

                {/*<Car/>*/}
                {/*<Driver/>*/}
            </Fragment>

        )
    }
}

export default withStyles(styleSheet)(Admin);