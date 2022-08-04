import React, {Component, Fragment} from "react";
import Grid from "@mui/material/Grid";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
// import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MailIcon from '@mui/icons-material/Mail';
import Typography from "@mui/material/Typography";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import BookingDetailService from "../../../services/BookingDetailService";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import GDSEButton from "../../../components/common/button";
import EditIcon from "@mui/icons-material/Edit";
import GDSESnackBar from "../../../components/common/snackBar";
import DriverService from "../../../services/DriverService";

class BookingDetailTable extends Component {
    constructor(props) {
        super(props);
        this.state = {

            formData: {
                bdid: '',
                uid: '',
                userName: '',
                userEmail: '',
                userAccountNo:'',
                cid: '',
                did: '',
                pickUp: '',
                dropOff: '',
                driverNeed: '',
                pickUpDate: '',
                dropOffDate: '',
                pickUpTime: '',
                dropOffTime: '',
                rentPrice: ''
            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'Save',
            btnColor: 'primary',

            file: null,


        }
    }

    deleteBookingDetails = async (bdid) => {
        let params = {
            bdid: bdid
        }
        let res = await BookingDetailService.deleteBookingDetails(params);
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

    updateBookingDetails = (data) => {
        console.log(data);
        this.setState({
            btnLabel: "update",
            btnColor: "success",
            formData: {
                bdid: data.bdid,
                uid: data.uid,
                userName: data.userName,
                userEmail: data.userEmail,
                userAccountNo:data.userAccountNo,
                cid: data.cid,
                did: data.did,
                pickUp: data.pickUp,
                dropOff: data.dropOff,
                driverNeed: data.driverNeed,
                pickUpDate: data.pickUpDate,
                dropOffDate: data.dropOffDate,
                pickUpTime: data.pickUpTime,
                dropOffTime: data.dropOffTime,
                rentPrice: data.rentPrice
            }
        })
    };

    clearFields = (e) => {
        this.setState({
            formData: {
                bdid: '',
                uid: '',
                userName: '',
                userEmail: '',
                userAccountNo:'',
                cid: '',
                did: '',
                pickUp: '',
                dropOff: '',
                driverNeed: '',
                pickUpDate: '',
                dropOffDate: '',
                pickUpTime: '',
                dropOffTime: '',
                rentPrice: ''


            }
        });
    }
    submitBookingDetails = async () => {
        let formData = this.state.formData;
        if (this.state.btnLabel === "Save") {
            let res = await BookingDetailService.postBookingDetailsService(formData);
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
            let res = await BookingDetailService.putBookingDetailService(formData);
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

    loadData = async () => {
        let res = await BookingDetailService.fetchBookingDetails();
        if (res.status === 200) {
            this.setState({
                data: res.data.data
            })
        }
        console.log(this.state.data)
        this.exampleForMap();
    }
    // drierChange = async (did) => {
    //     let formData = this.state.formData.driverStatus;
    //     let res = await DriverService.putDriver(formData);
    //     if (res.status === 200) {
    //         this.setState({
    //             alert: true,
    //             message: res.data.message,
    //             severity: "success",
    //             btnLabel: "Save",
    //             btnColor: "primary"
    //         });
    //         this.loadData();
    //     } else {
    //         this.setState({
    //             alert: true,
    //             message: res.response.data.message,
    //             severity: "error"
    //         });
    //     }
    // }

    componentDidMount() {
        this.loadData();

        console.log(this.state.data)
    }


    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Typography variant="h2" sx={{mb: 0}} className={classes.columnHeaderTitleContainer}>
                    Booking Details
                </Typography>

                <Grid container className="pt-2" spacing={3}>
                    <Grid item xs={3} sm={3} md={3} lg={3}>
                        <Card sx={{maxWidth: 1500, maxHeight: 800}}>
                            <CardActionArea>

                                {/*<Typography variant="h5" >Car Manage</Typography>*/}
                                <CardContent>
                                    <ValidatorForm
                                        ref="form"
                                        className="pt-2"
                                        onSubmit={this.submitUser}


                                    >
                                        <TextValidator
                                            id="input-with-icon-textfield"
                                            label="Booking Details Id"
                                            placeholder={"BD00_001"}
                                            // sx={{mb: 3}}
                                            // disabled={'true'}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                            value={this.state.formData.bdid}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.bdid = e.target.value
                                                this.setState({formData})
                                            }}
                                            validators={['required', 'matchRegexp:^(BD00_)[0-9]{3,4}$']}
                                        />
                                        <TextValidator
                                            id="input-with-icon-textfield"
                                            label="User Id"
                                            placeholder={"U00_001"}
                                            //sx={{mb: 15}}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        {/*<LocationOnIcon/>*/}
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"

                                            value={this.state.formData.uid}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.uid = e.target.value
                                                this.setState({formData})
                                            }}
                                            validators={['required', 'matchRegexp:^(U00_)[0-9]{3,4}$']}

                                        />
                                        <TextValidator
                                            id="input-with-icon-textfield"
                                            label="User Name"
                                            placeholder={"Amal"}
                                            //sx={{mb: 15}}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        {/*<LocationOnIcon/>*/}
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"

                                            value={this.state.formData.userName}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.userName = e.target.value
                                                this.setState({formData})
                                            }}
                                            validators={['required', 'isString']}

                                        />
                                        <TextValidator
                                            id="input-with-icon-textfield"
                                            label="User Email"
                                            placeholder={"amal@gmail.com"}
                                            //sx={{mb: 15}}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        {/*<LocationOnIcon/>*/}
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"

                                            value={this.state.formData.userEmail}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.userEmail = e.target.value
                                                this.setState({formData})
                                            }}
                                            validators={['required', 'isEmail']}

                                        />


                                        <TextValidator
                                            id="input-with-icon-textfield"
                                            label="Car Id"
                                            //type={"date"}
                                            placeholder={"C00_001"}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        {/*<TodayIcon/>*/}
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                            value={this.state.formData.cid}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.cid = e.target.value
                                                this.setState({formData})
                                            }}
                                            validators={['required', 'matchRegexp:^(C00_)[0-9]{3,4}$']}

                                        />
                                        <TextValidator
                                            id="input-with-icon-textfield"
                                            label="Driver Id"
                                            placeholder={"D00_001"}
                                            // type={"time"}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        {/*<AccessTimeIcon/>*/}
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                            value={this.state.formData.did}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.did = e.target.value
                                                this.setState({formData})
                                            }}

                                            onKeyPress={(ev) => {
                                                console.log(`pressed keyCode {ev.key}`);
                                                if (ev.key === 'Enter') {
                                                    this.drierChange(this.state.formData.did);
                                                    ev.preventDefault();


                                                }
                                            }}
                                            validators={['required', 'matchRegexp:^(D00_)[0-9]{3,4}$']}

                                        />
                                        <TextValidator
                                            id="input-with-icon-textfield"
                                            label="PickUp"
                                            placeholder={"Gall"}
                                            // type={"time"}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        {/*<AccessTimeIcon/>*/}
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                            value={this.state.formData.pickUp}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.pickUp = e.target.value
                                                this.setState({formData})
                                            }}
                                            validators={['required', 'isString']}

                                        />
                                        <TextValidator
                                            id="input-with-icon-textfield"
                                            label="DropOff"
                                            placeholder={"Colombo"}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        {/*<AccessTimeIcon/>*/}
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                            value={this.state.formData.dropOff}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.dropOff = e.target.value
                                                this.setState({formData})
                                            }}
                                            validators={['required', 'isString']}

                                        />
                                        <TextValidator
                                            id="input-with-icon-textfield"
                                            label="DriverNeed"
                                            placeholder={"Yes"}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        {/*<AccessTimeIcon/>*/}
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                            value={this.state.formData.driverNeed}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.driverNeed = e.target.value
                                                this.setState({formData})
                                            }}
                                            validators={['required', '^(?:Yes|No)$']}

                                        />
                                        <TextValidator
                                            id="input-with-icon-textfield"
                                            label="PickUpDate"
                                            type={"Date"}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        {/*<AccessTimeIcon/>*/}
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                            value={this.state.formData.pickUpDate}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.pickUpDate = e.target.value
                                                this.setState({formData})
                                            }}
                                        />
                                        <TextValidator
                                            id="input-with-icon-textfield"
                                            label="DropOffDate"
                                            type={"Date"}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        {/*<AccessTimeIcon/>*/}
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                            value={this.state.formData.dropOffDate}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.dropOffDate = e.target.value
                                                this.setState({formData})
                                            }}

                                        />
                                        <TextValidator
                                            id="input-with-icon-textfield"
                                            label="PickUpTime"
                                            placeholder={"10:00 AM"}
                                            // type={"time"}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        {/*<AccessTimeIcon/>*/}
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                            value={this.state.formData.pickUpTime}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.pickUpTime = e.target.value
                                                this.setState({formData})
                                            }}
                                        />
                                        <TextField
                                            id="input-with-icon-textfield"
                                            label="DropOffTime"
                                            placeholder={"11:00 PM"}
                                            // type={"time"}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        {/*<AccessTimeIcon/>*/}
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                            value={this.state.formData.dropOffTime}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.dropOffTime = e.target.value
                                                this.setState({formData})
                                            }}
                                        />
                                        <TextValidator
                                            id="input-with-icon-textfield"
                                            label="Rent Price"
                                            placeholder={"1000.00"}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        {/*<AccessTimeIcon/>*/}
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                            value={this.state.formData.rentPrice}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.rentPrice = e.target.value
                                                this.setState({formData})
                                            }}
                                            validators={['required', 'isPositive']}

                                        />
                                        <TextValidator
                                            id="input-with-icon-textfield"
                                            label="Account No"
                                            // placeholder={"1000.00"}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        {/*<AccessTimeIcon/>*/}
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                            value={this.state.formData.userAccountNo}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.userAccountNo = e.target.value
                                                this.setState({formData})
                                            }}
                                            validators={['required',]}

                                        />
                                    </ValidatorForm>
                                    <Grid container style={{marginTop: '10px'}} direction="row" justifyContent="flex-end"
                                          alignItems="center">
                                        <GDSEButton label={this.state.btnLabel} onClick={this.submitBookingDetails} size="small"
                                                    color={this.state.btnColor}
                                                    variant="contained"/>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>


                    <Grid item xs={9} sm={9} md={9} lg={9}>
                        <TableContainer component={Paper} className={classes.container} sx={{minHeight: 700}}>
                            <Table sx={{minWidth: 700}} aria-label="user table">
                                <TableHead className={classes.TableHead}>
                                    <TableRow>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right">Booking Details Id</TableCell>
                                        <TableCell align="right">User Id</TableCell>
                                        <TableCell align="right">User Name</TableCell>
                                        <TableCell align="right">User Email</TableCell>
                                        <TableCell align="right">User Account No</TableCell>
                                        <TableCell align="right">Car Id</TableCell>
                                        <TableCell align="right">Driver Id</TableCell>
                                        <TableCell align="right">PickUp</TableCell>
                                        <TableCell align="right">DropOff</TableCell>
                                        <TableCell align="right">Driver Need</TableCell>
                                        <TableCell align="right">PickUpDate</TableCell>
                                        <TableCell align="right">DropOffDate</TableCell>
                                        <TableCell align="right">PickUpTime</TableCell>
                                        <TableCell align="right">DropOffTime</TableCell>
                                        <TableCell align="right">RentPrice</TableCell>

                                        {/*<TableCell align="right">Action</TableCell>*/}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        this.state.data.map((row) => (
                                            <TableRow>
                                                <TableCell align="right">
                                                    <Tooltip title="Edit">
                                                        <IconButton
                                                            onClick={() => {
                                                                console.log("edit icon clicked!")
                                                                this.updateBookingDetails(row);
                                                            }}
                                                        >
                                                            <EditIcon color={"secondory"}/>
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Tooltip title="Delete">
                                                        <IconButton
                                                            onClick={() => {
                                                                console.log("delete icon clicked!")
                                                                this.deleteBookingDetails(row.bdid);
                                                            }}
                                                        >
                                                            <DeleteIcon color={"error"}/>
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>

                                                <TableCell align="right">
                                                    <Tooltip title="MailIcon">
                                                        <IconButton
                                                            // onClick={() => {
                                                            //     console.log("edit icon clicked!")
                                                            //     this.updateCar(row);
                                                            // }}
                                                        >
                                                            <MailIcon color={"success"}/>
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>

                                                <TableCell align="right">{row.bdid}</TableCell>
                                                <TableCell align="right">{row.uid}</TableCell>
                                                <TableCell align="right">{row.userName}</TableCell>
                                                <TableCell align="right">{row.userEmail}</TableCell>
                                                <TableCell align="right">{row.userAccountNo}</TableCell>
                                                <TableCell align="right">{row.cid}</TableCell>
                                                <TableCell align="right">{row.did}</TableCell>
                                                <TableCell align="right">{row.pickUp}</TableCell>
                                                <TableCell align="right">{row.dropOff}</TableCell>
                                                <TableCell align="right">{row.driverNeed}</TableCell>
                                                <TableCell align="right">{row.pickUpDate}</TableCell>
                                                <TableCell align="right">{row.dropOffDate}</TableCell>
                                                <TableCell align="right">{row.pickUpTime}</TableCell>
                                                <TableCell align="right">{row.dropOffTime}</TableCell>
                                                <TableCell align="right">{row.rentPrice}</TableCell>

                                            </TableRow>
                                        ))
                                    }

                                </TableBody>
                            </Table>

                        </TableContainer>
                    </Grid>
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
                {/*<Stack sx={{ width: '100%' }} spacing={2}>*/}
                {/*    <Alert severity="warning"*/}

                {/*           open={this.state.alert}*/}
                {/*           onClose={() => {*/}
                {/*               this.setState({alert: false})*/}
                {/*           }}*/}
                {/*    >*/}
                {/*        <AlertTitle>Warning</AlertTitle>*/}
                {/*        This is a warning alert — <strong>check it out!</strong>*/}
                {/*    </Alert>*/}
                {/*</Stack>*/}
            </Fragment>
        )
    }
}

export default withStyles(styleSheet)(BookingDetailTable)