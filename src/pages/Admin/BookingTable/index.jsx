import React, {Component, Fragment} from "react";
import UsersService from "../../../services/UsersService";
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
import AdminService from "../../../services/AdminService";
import {TextValidator} from "react-material-ui-form-validator";
import GDSEButton from "../../../components/common/button";
import EditIcon from "@mui/icons-material/Edit";
import GDSESnackBar from "../../../components/common/snackBar";
import Email from "../Email";

class BookingDetailTable extends Component{
    constructor(props) {
        super(props);
        this.state = {

            formData: {
                bdid: '',
                uid: '',
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
                bdid:data.bdid,
                uid: data.uid,
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

    componentDidMount() {
        this.loadData();

        console.log(this.state.data)
    }


    render() {
        const {classes} = this.props;
        return(
            <Fragment>
                <Typography variant="h2"  sx={{mb: 0}} className={classes.columnHeaderTitleContainer}>
                 Booking Details
                </Typography>

                <Grid container className="pt-2" spacing={3}>
                    <Grid item xs={8} sm={8} md={8} lg={8}>
                        <Card sx={{maxWidth: 1500, maxHeight: 350}}>
                            <CardActionArea>

                                {/*<Typography variant="h5" >Car Manage</Typography>*/}
                                <CardContent>

                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="Booking Details Id"
                                        placeholder={"BD00_001"}
                                        sx={{mb: 3}}
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
                                        //validators={['required','matchRegexp:^(B00_)[0-9]{3,4}$']}
                                    />
                                    <TextField
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
                                    />


                                    <TextField
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
                                    />
                                    <TextField
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
                                    />
                                    <TextField
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
                                    />
                                    <TextField
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
                                    />
                                    <TextField
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
                                    />
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="PickUpDate"
                                        placeholder={"10000.00"}
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
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="DropOffDate"
                                        placeholder={"10000.00"}
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
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="PickUpTime"
                                        placeholder={"10:00 AM"}
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
                                    <TextField
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
                                    />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Grid container style={{marginTop: '10px'}} direction="row" justifyContent="flex-end"
                              alignItems="center">
                            <GDSEButton label={this.state.btnLabel} onClick={this.submitBookingDetails} size="small"
                                        color={this.state.btnColor}
                                        variant="contained"/>
                        </Grid>
                    </Grid>
                    </Grid>
                <Grid container>
                    <TableContainer component={Paper}  className={classes.container}>
                        <Table sx={{minWidth: 650}} aria-label="user table">
                            <TableHead className={classes.TableHead}>
                                <TableRow>
                                    <TableCell align="right">Booking Details Id</TableCell>
                                    <TableCell align="right">User Id</TableCell>
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
                                    <TableCell align="right">Action</TableCell>
                                    {/*<TableCell align="right">Action</TableCell>*/}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="right">{row.bdid}</TableCell>
                                            <TableCell align="right">{row.uid}</TableCell>
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
                                            <TableCell align="right">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            this.updateBookingDetails(row);
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
                                                        <MailIcon color={"error"}/>
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

export default withStyles(styleSheet)(BookingDetailTable)