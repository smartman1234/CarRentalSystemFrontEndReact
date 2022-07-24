import React, {Component, Fragment} from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CarService from "../../services/CarService";
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import GDSEButton from "../../components/common/button";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import GDSESnackBar from "../../components/common/snackBar";

import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                cid: '',
                numberOfPassengers: '',
                transmissionType: '',
                color: '',
                registrationNumber: '',
                fuelType: '',
                brand: '',
                carType: '',
                status: '',
                img: '',
                priceForTheExtraKm: '',
                freeMileageForDay: '',
                freeMileageForMonth: '',
                priceForTheDailyRate: '',
                priceForTheMonthlyRate: '',
                damageWaver: '',
                runKm: ''
            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'Save',
            btnColor: "primary"

        }
    }

    deleteCar = async (cid) => {
        let params = {
            cid: cid
        }
        let res = await CarService.deleteCar(params);
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


    updateCar = (data) => {
        console.log(data);
        this.setState({
            btnLabel: "update",
            btnColor: "success",
            formData: {
                cid: data.cid,
                numberOfPassengers: data.numberOfPassengers,
                transmissionType: data.transmissionType,
                color: data.color,
                registrationNumber: data.registrationNumber,
                fuelType: data.fuelType,
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
                cid: '',
                numberOfPassengers: '',
                transmissionType: '',
                color: '',
                registrationNumber: '',
                fuelType: '',
                brand: '',
                carType: '',
                status: '',
                img: '',
                priceForTheExtraKm: '',
                freeMileageForDay: '',
                freeMileageForMonth: '',
                priceForTheDailyRate: '',
                priceForTheMonthlyRate: '',
                damageWaver: '',
                runKm: ''
            }
        });
    }

    submitCar = async () => {
        let formData = this.state.formData;
        if (this.state.btnLabel === "Save") {
            let res = await CarService.postCar(formData);
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
            let res = await CarService.putCar(formData);
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
        let res = await CarService.fetchCar();
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
                <Typography variant="h2" className={classes.columnHeaderTitleContainer}>Car Manage</Typography>

                <ValidatorForm
                    ref="form"
                    className="pt-2"
                    onSubmit={this.submitCar}
                >

                    <Grid container className="pt-2" spacing={3}>
                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Typography variant="body2">Car Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Car Id"
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

                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Typography variant="body2">Number Of Passengers</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Number Of Passengers"
                                variant="outlined"
                                size="small"
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

                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Typography variant="body2">Transmission Type</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Transmission Type"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.transmissionType}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.transmissionType = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}

                            />
                        </Grid>

                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Typography variant="body2">Car Color</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Car Color"
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

                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Typography variant="body2">Car Registration Number</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Car Registration Number"
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

                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Typography variant="body2">Car Fuel Type</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Car Fuel Type"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.fuelType}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.fuelType = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}

                            />
                        </Grid>


                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Typography variant="body2">Car Brand</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Car Brand"
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


                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Typography variant="body2">Car Type</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Car Type"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.carType}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.carType = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}

                            />
                        </Grid>


                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Typography variant="body2">Car Status</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Car Status"
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


                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Typography variant="body2">Car Img</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Car Img"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.img}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.img = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}

                            />
                        </Grid>


                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Typography variant="body2">Price Of Extra Km</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Price Of Extra Km"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.priceForTheExtraKm}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.priceForTheExtraKm = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}

                            />
                        </Grid>


                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Typography variant="body2">Free Mileage For Day</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Free Mileage For Day"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.freeMileageForDay}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.freeMileageForDay = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}

                            />
                        </Grid>


                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Typography variant="body2">Free Mileage For Month</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Free Mileage For Month"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.freeMileageForMonth}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.freeMileageForMonth = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}

                            />
                        </Grid>


                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Typography variant="body2">Price For The Daily Rate</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Price For The Daily Rate"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.priceForTheDailyRate}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.priceForTheDailyRate = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}

                            />
                        </Grid>

                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Typography variant="body2">Price For The Monthly Rate</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Price For The Monthly Rate"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.priceForTheMonthlyRate}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.priceForTheMonthlyRate = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}

                            />
                        </Grid>

                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Typography variant="body2">Damage Waver</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Damage Waver"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.damageWaver}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.damageWaver = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}

                            />
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Typography variant="body2">Run Km</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Run Km"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.runKm}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.runKm = e.target.value
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
                    <TableContainer component={Paper} className={classes.container}>
                        <Table sx={{minWidth: 650}} aria-label="user table">
                            <TableHead className={classes.TableHead}>
                                <TableRow>
                                    <TableCell align="right">Car Id</TableCell>
                                    <TableCell align="right">Number Of Passengers</TableCell>
                                    <TableCell align="right">Transmission Type</TableCell>
                                    <TableCell align="right">Car Color</TableCell>
                                    <TableCell align="right">Car Registration Number</TableCell>
                                    <TableCell align="right">Car Fuel Type</TableCell>
                                    <TableCell align="right">Car Brand</TableCell>
                                    <TableCell align="right">Car Type</TableCell>
                                    <TableCell align="right">Car Status</TableCell>
                                    <TableCell align="right">Car Img</TableCell>
                                    <TableCell align="right">Price Of Extra Km</TableCell>
                                    <TableCell align="right">Free Mileage For Day</TableCell>
                                    <TableCell align="right">Free Mileage For Month</TableCell>
                                    <TableCell align="right">Price For The Daily Rate</TableCell>
                                    <TableCell align="right">Price For The Monthly Rate</TableCell>
                                    <TableCell align="right">Damage Waver</TableCell>
                                    <TableCell align="right">Run Km</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="right">{row.cid}</TableCell>
                                            <TableCell align="right">{row.numberOfPassengers}</TableCell>
                                            <TableCell align="right">{row.transmissionType}</TableCell>
                                            <TableCell align="right">{row.color}</TableCell>
                                            <TableCell align="right">{row.registrationNumber}</TableCell>
                                            <TableCell align="right">{row.fuelType}</TableCell>
                                            <TableCell align="right">{row.brand}</TableCell>
                                            <TableCell align="right">{row.carType}</TableCell>
                                            <TableCell align="right">{row.status}</TableCell>
                                            <TableCell align="right">{row.img}</TableCell>
                                            <TableCell align="right">{row.priceForTheExtraKm}</TableCell>
                                            <TableCell align="right">{row.freeMileageForDay}</TableCell>
                                            <TableCell align="right">{row.freeMileageForMonth}</TableCell>
                                            <TableCell align="right">{row.priceForTheDailyRate}</TableCell>
                                            <TableCell align="right">{row.priceForTheMonthlyRate}</TableCell>
                                            <TableCell align="right">{row.damageWaver}</TableCell>
                                            <TableCell align="right">{row.runKm}</TableCell>
                                            <TableCell align="right">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            this.updateCar(row);
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
                                                            this.deleteCar(row.cid);
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

export default  withStyles(styleSheet) (Car) ;