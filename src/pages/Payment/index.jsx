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


class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData:{
                pid: '',
                dropOffDate: '',
                dropOffLastDate: '',
                cid: '',
                uid: '',
                did: '',
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
            loaded: false,

            //for data table
            columns: [
                {
                    field: 'cid',
                    headerName: 'Car Id',
                    width: 70
                },
                {
                    field: 'numberOfPassengers',
                    headerName: 'numberOfPassengers',
                    width: 100
                },
                {
                    field: 'transmissionType',
                    headerName: 'transmissionType',
                    width: 100
                },
                {
                    field: 'color',
                    headerName: 'color',
                    width: 70
                },
                {
                    field: 'registrationNumber',
                    headerName: 'registrationNumber',
                    width: 100
                },
                {
                    field: 'fuelType',
                    headerName: 'fuelType',
                    width: 70
                },
                {
                    field: 'brand',
                    headerName: 'brand',
                    width: 100
                },
                {
                    field: 'carType',
                    headerName: 'carType',
                    width: 70
                },

                {
                    field: 'status',
                    headerName: 'status',
                    width: 70
                },
                {
                    field: 'img',
                    headerName: 'img',
                    width: 70
                },

                {
                    field: 'priceForTheExtraKm',
                    headerName: 'priceForTheExtraKm',
                    width: 100
                },


                {
                    field: 'freeMileageForDay',
                    headerName: 'freeMileageForDay',
                    width: 100
                },

                {
                    field: 'freeMileageForMonth',
                    headerName: 'freeMileageForMonth',
                    width: 100
                },


                {
                    field: 'priceForTheDailyRate',
                    headerName: 'priceForTheDailyRate',
                    width: 100
                },

                {
                    field: 'priceForTheMonthlyRate',
                    headerName: 'priceForTheMonthlyRate',
                    width: 100
                },

                {
                    field: 'damageWaver',
                    headerName: 'damageWaver',
                    width: 70
                },


                {
                    field: 'runKm',
                    headerName: 'runKm',
                    width: 70
                },


            ]
        }
    }

    async loadData() {
        let res = await CarService.fetchPosts();
        if (res.status === 200) {
            this.setState({
                loaded: true,
                data: res.data
            })
            console.log("res: " + JSON.stringify(res.data))

        } else {
            console.log("fetching error: " + res)
        }
    }

    componentDidMount() {
        console.log('Post Screen Mounted!');
        this.loadData();
    }

    handleSubmit = async () => {
        console.log('save button clicked!!')
        console.log(this.state.formData)
        let formData = this.state.formData
        let response = await CarService.createPost(formData);
        if (response.status === 201) {
            this.setState({
                alert: true,
                message: 'Post created succesfully!',
                severity: 'success'
            })
        } else {
            this.setState({
                alert: true,
                message: 'Post created Unsuccesfully!',
                severity: 'error'
            })
        }
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
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
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

                        <Grid item lg={12} md={12} sm={12} xm={6} style={{display: 'flex'}} justifyContent="flex-end"
                              spacing-xs-6>
                            <Button variant="outlined" color="success">
                                Clear
                            </Button>
                            <div style={{width: "10px"}}></div>

                            <Button variant="outlined" color="primary">
                                Save
                            </Button>

                            <div style={{width: "10px"}}></div>

                            <Button variant="outlined" color="warning">
                                Update
                            </Button>
                            <div style={{width: "10px"}}></div>

                            <Button variant="outlined" color="error">
                                Delete
                            </Button>
                        </Grid>

                    </Grid>
                </ValidatorForm>
                <Grid container style={{ height: 400, width: '100%', marginTop: '50px' }}>
                    {/* <BasicPostTable data={this.state.data} /> */}
                    <GDSEDataTable
                        columns={this.state.columns}
                        rows={this.state.data}
                        rowsPerPageOptions={5}
                        pageSize={5}
                        // checkboxSelection={true}
                    />
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