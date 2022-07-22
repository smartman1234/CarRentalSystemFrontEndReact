import React, {Component, Fragment} from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import BasicTable from "../../components/Car";
import {styleSheet} from "./style";
import {withStyles} from '@mui/styles';
import CarService from "../../services/CarService";
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import GDSEDataTable from "../../components/common/Table";
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
import UsersService from "../../services/UsersService";
import PaymentService from "../../services/PaymentService";
import AdminService from "../../services/AdminService";
import GDSEButton from "../../components/common/button";


class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData:{
                pid: "",
                dropOffDate: "",
                dropOffLastDate: "",
                cid: "",
                uid: "",
                did: "",
                brand: "",
                carType: "",
                status: "",
                img: "",
                priceForTheExtraKm: "",
                freeMileageForDay: "",
                freeMileageForMonth: "",
                priceForTheDailyRate: "",
                priceForTheMonthlyRate: "",
                damageWaver: "",
                runKm: ""
            },
            alert: false,
            message: '',
            severity: '',

            transmissionType: [
                {label: 'Auto'},
                {label: 'Manual'},

            ],
            fuelType: [
                {label: 'Petrol'},
                {label: 'Desal'},
            ],
            carType: [
                {label: 'Normal'},
                {label: 'Premium'},
                {label: 'Luxury'},
            ],

            data: [],
            btnLabel:'Save',
            btnColor:"primary"

        }
    }
    deletePayment=async (pid)=>{
        let params={
            pid:pid
        }
        let res=await PaymentService.deletePayment(params);
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
    updatePayment = (data) => {
        console.log(data);
        this.setState({
            btnLabel:"update",
            btnColor:"success",
            formData: {
                pid: data.pid,
                dropOffDate: data.dropOffDate,
                dropOffLastDate: data.dropOffLastDate,
                cid: data.cid,
                uid: data.uid,
                did: data.did,
                brand: data.brand,
                carType: data.carType,
                status: data.status,
                img: data.img,
                priceForTheExtraKm: data.priceForTheExtraKm,
                freeMileageForDay: data.freeMileageForDay,
                freeMileageForMonth: data.freeMileageForMonth,
                priceForTheDailyRate: data.priceForTheDailyRate,
                priceForTheMonthlyRate: data.priceForTheMonthlyRate,
                damageWaver: data.damageWaver,
                runKm: data.runKm
            }
        })
    };
    clearFields = (e) => {
        this.setState({
            formData: {
                pid: "",
                dropOffDate: "",
                dropOffLastDate: "",
                cid: "",
                uid: "",
                did: "",
                brand: "",
                carType: "",
                status: "",
                img: "",
                priceForTheExtraKm: "",
                freeMileageForDay: "",
                freeMileageForMonth: "",
                priceForTheDailyRate: "",
                priceForTheMonthlyRate: "",
                damageWaver: "",
                runKm: ""

            }
        });
    }

    submitPayment = async () => {
        let formData = this.state.formData;
        if (this.state.btnLabel==="Save"){
            let res = await PaymentService.postPayment(formData);
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
            let res=await PaymentService.putPayment(formData);
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
        let res = await PaymentService.fetchPayment();
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
        const {classes} = this.props;
        return (
            <Fragment>
                <Typography className={classes.columnHeaderTitleContainer} variant={"h4"}>
                    Cars Manager
                </Typography>

                <ValidatorForm
                    ref="form"
                    className="pt-2"
                    onSubmit={this.submitPayment()}
                    // onError={errors => console.log(errors)}
                >

                    <Grid container spacing={0.5}>
                        <Grid item lg={3} md={3} sm={3} xm={3}>
                            <TextValidator id='outline-basic'
                                           placeholder='Car Id'
                                           label='Customer id'
                                           variant='outlined'
                                           size='small'
                                           value={this.state.formData.cid}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.cid = e.target.value
                                               this.setState({ formData })
                                           }}
                                           style={{ width: '100%' }}
                                           validators={['required',]}
                            />

                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xm={3}>
                            <TextValidator id='outline-basic' placeholder='Number Of Passenger'
                                           label='Number Of Passenger'
                                           variant='outlined'
                                           size='small'
                                           value={this.state.formData.numberOfPassengers}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.numberOfPassengers = e.target.value
                                               this.setState({ formData })
                                           }}
                                           style={{ width: '100%' }}
                                           validators={['required',]}

                            />

                        </Grid>
                        <Grid item lg={3} md={3} sm={3} xm={3}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={this.state.transmissionType}
                                sx={{width: 300}}
                                renderInput={(params) => <TextField {...params} label="Transmission Type"/>}
                                getOptionLabel={
                                    (option) => option.label
                                }
                                // onChange={(e, value) => {
                                //     console.log(value.label + " " + value.year);
                                // }}
                                size="small"
                                value={this.state.formData.transmissionType}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.transmissionType = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item lg={3} md={3} sm={3} xm={3}>
                            <TextField id="outlined-basic"
                                       placeHolder="Car Color"
                                       label="Car Color"
                                       variant="outlined"
                                       size="small"
                                       value={this.state.formData.color}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.color = e.target.value
                                           this.setState({ formData })
                                       }}
                                       style={{ width: '100%' }}
                                       validators={['required',]}

                            />
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xm={3}>
                            <TextField id="outlined-basic"
                                       placeHolder="Registration Number"
                                       label="Registration Number"
                                       variant="outlined"
                                       size="small"
                                       value={this.state.formData.registrationNumber}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.registrationNumber = e.target.value
                                           this.setState({ formData })
                                       }}
                                       style={{ width: '100%' }}
                                       validators={['required',]}
                            />
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xm={3}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={this.state.fuelType}
                                sx={{width: 300}}
                                renderInput={(params) => <TextField {...params} label="Fuel Type"/>}
                                getOptionLabel={
                                    (option) => option.label
                                }
                                size="small"
                                value={this.state.formData.fuelType}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.fuelType = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xm={3}>
                            <TextField id="outlined-basic"
                                       placeHolder="Brand"
                                       label="Brand"
                                       variant="outlined"
                                       size="small"
                                       value={this.state.formData.brand}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.brand = e.target.value
                                           this.setState({ formData })
                                       }}
                                       style={{ width: '100%' }}
                                       validators={['required',]}
                            />
                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xm={3}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={this.state.carType}
                                sx={{width: 300}}
                                renderInput={(params) => <TextField {...params} label="Car Type"/>}
                                getOptionLabel={
                                    (option) => option.label
                                }
                                size="small"
                                value={this.state.formData.carType}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.carType = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item lg={3} md={3} sm={3} xm={3}>
                            <TextField id="outlined-basic"
                                       placeHolder="Status"
                                       label="Status"
                                       variant="outlined"
                                       size="small"
                                       value={this.state.formData.status}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.status = e.target.value
                                           this.setState({ formData })
                                       }}
                                       style={{ width: '100%' }}
                                       validators={['required',]}
                            />
                        </Grid>
                        <Grid item lg={3} md={3} sm={3} xm={3}>
                            <TextField id="outlined-basic"
                                       placeHolder="img"
                                       label="img"
                                       variant="outlined"
                                       size="small"
                                       value={this.state.formData.img}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.img = e.target.value
                                           this.setState({ formData })
                                       }}
                                       style={{ width: '100%' }}
                                       validators={['required',]}
                            />
                        </Grid>
                        <Grid item lg={3} md={3} sm={3} xm={3}>
                            <TextField id="outlined-basic"
                                       placeHolder="priceForTheExtraKm"
                                       label="priceForTheExtraKm"
                                       variant="outlined"
                                       size="small"
                                       value={this.state.formData.priceForTheExtraKm}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.priceForTheExtraKm = e.target.value
                                           this.setState({ formData })
                                       }}
                                       style={{ width: '100%' }}
                                       validators={['required',]}
                            />
                        </Grid>
                        <Grid item lg={3} md={3} sm={3} xm={3}>
                            <TextField id="outlined-basic"
                                       placeHolder="freeMileageForDay"
                                       label="freeMileageForDay"
                                       variant="outlined"
                                       size="small"
                                       value={this.state.formData.freeMileageForDay}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.freeMileageForDay = e.target.value
                                           this.setState({ formData })
                                       }}
                                       style={{ width: '100%' }}
                                       validators={['required',]}
                            />
                        </Grid>
                        <Grid item lg={3} md={3} sm={3} xm={3}>
                            <TextField id="outlined-basic"
                                       placeHolder="freeMileageForMonth"
                                       label="freeMileageForMonth"
                                       variant="outlined"
                                       size="small"
                                       value={this.state.formData.freeMileageForMonth}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.freeMileageForMonth = e.target.value
                                           this.setState({ formData })
                                       }}
                                       style={{ width: '100%' }}
                                       validators={['required',]}
                            />
                        </Grid>
                        <Grid item lg={3} md={3} sm={3} xm={3}>
                            <TextField id="outlined-basic"
                                       placeHolder="priceForTheDailyRate"
                                       label="priceForTheDailyRate"
                                       variant="outlined"
                                       size="small"
                                       value={this.state.formData.priceForTheDailyRate}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.priceForTheDailyRate = e.target.value
                                           this.setState({ formData })
                                       }}
                                       style={{ width: '100%' }}
                                       validators={['required',]}
                            />
                        </Grid>
                        <Grid item lg={3} md={3} sm={3} xm={3}>
                            <TextField id="outlined-basic"
                                       placeHolder="priceForTheMonthlyRate"
                                       label="priceForTheMonthlyRate"
                                       variant="outlined" size="small"
                                       value={this.state.formData.priceForTheMonthlyRate}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.priceForTheMonthlyRate = e.target.value
                                           this.setState({ formData })
                                       }}
                                       style={{ width: '100%' }}
                                       validators={['required',]}
                            />
                        </Grid>
                        <Grid item lg={3} md={3} sm={3} xm={3}>
                            <TextField id="outlined-basic"
                                       placeHolder="damageWaver"
                                       label="damageWaver"
                                       variant="outlined"
                                       size="small"
                                       value={this.state.formData.damageWaver}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.damageWaver = e.target.value
                                           this.setState({ formData })
                                       }}
                                       style={{ width: '100%' }}
                                       validators={['required',]}
                            />
                        </Grid>
                        <Grid item lg={3} md={3} sm={3} xm={3}>
                            <TextField id="outlined-basic"
                                       placeHolder="runKm"
                                       label="runKm"
                                       variant="outlined"
                                       size="small"
                                       value={this.state.formData.runKm}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.runKm = e.target.value
                                           this.setState({ formData })
                                       }}
                                       style={{ width: '100%' }}
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
                                    <TableCell align="right">Payment Id</TableCell>
                                    <TableCell align="right">dropOffDate</TableCell>
                                    <TableCell align="right">dropOffLastDate</TableCell>
                                    <TableCell align="right">cid</TableCell>
                                    <TableCell align="right">uid</TableCell>
                                    <TableCell align="right">did</TableCell>
                                    <TableCell align="right">brand</TableCell>
                                    <TableCell align="right">carType</TableCell>
                                    <TableCell align="right">status</TableCell>
                                    <TableCell align="right">img</TableCell>
                                    <TableCell align="right">priceForTheExtraKm</TableCell>
                                    <TableCell align="right">freeMileageForDay</TableCell>
                                    <TableCell align="right">freeMileageForMonth</TableCell>
                                    <TableCell align="right">priceForTheDailyRate</TableCell>
                                    <TableCell align="right">priceForTheMonthlyRate</TableCell>
                                    <TableCell align="right">damageWaver</TableCell>
                                    <TableCell align="right">runKm</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="right">{row.pid}</TableCell>
                                            <TableCell align="right">{row.dropOffDate}</TableCell>
                                            <TableCell align="right">{row.dropOffLastDate}</TableCell>
                                            <TableCell align="right">{row.cid}</TableCell>
                                            <TableCell align="right">{row.uid}</TableCell>
                                            <TableCell align="right">{row.did}</TableCell>
                                            <TableCell align="right">{row.brand}</TableCell>
                                            <TableCell align="right">{row.carType}</TableCell>
                                            <TableCell align="right">{row.status}</TableCell>
                                            <TableCell align="right">{row.img}</TableCell>
                                            <TableCell align="right">{row.priceForTheExtraKm}</TableCell>
                                            <TableCell align="right">{row.freeMileageForDay}</TableCell>
                                            <TableCell align="right">{row.freeMileageForMonth}</TableCell>
                                            <TableCell align="right">{row.priceForTheDailyRate}</TableCell>
                                            <TableCell align="right">{row.priceForTheMonthlyRate}</TableCell>
                                            <TableCell align="right">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            this.updatePayment(row);
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
                                                            this.deletePayment(row.pid);
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
                        this.setState({ open: false })
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

export default withStyles(styleSheet)(Car);