import * as React from 'react';
import {Component, Fragment} from 'react';
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PinDropIcon from '@mui/icons-material/PinDrop';
import prius from "../../assets/img/prius.jpg";
import Typography from "@mui/material/Typography";
import CarRentalIcon from '@mui/icons-material/CarRental';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PaletteIcon from '@mui/icons-material/Palette';
import EngineeringIcon from '@mui/icons-material/Engineering';
import EvStationIcon from '@mui/icons-material/EvStation';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import user from "../../assets/img/user.png"
import logo from "../../assets/img/carLogo.jpg"
import slip from "../../assets/img/slip.jpg"
import Button from "@mui/material/Button";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import CreateIcon from '@mui/icons-material/Create';
import {Link} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import SendIcon from '@mui/icons-material/Send';
import BookingDetailService from "../../services/BookingDetailService";
import GDSESnackBar from "../../components/common/snackBar";

class BookingDetails extends Component {
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

        this.handleChange = this.handleChange.bind(this)


    }

    handleChange(event) {
        this.state({
            file: URL.createObjectURL(event.target.files[0])
        })
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
            console.log("error")
        }
    }


    render() {
        const {classes} = this.props;
        return (

            <Fragment>
                <Grid container className="pt-7" spacing={2}>

                    <Grid item xs={11} sm={11} md={11} lg={11}>
                        <Typography variant="h2" className={classes.columnHeaderTitleContainer} sx={{mb: 5}}>Booking
                            Details
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


                </Grid>

                <Grid container className="pt-7" spacing={2}>

                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Card sx={{maxWidth: 750, maxHeight: 350}}>
                            <CardActionArea>

                                {/*<Typography variant="h5" >Car Manage</Typography>*/}
                                <CardContent>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="Booking Detail Id"
                                        placeholder={"BD00_001"}
                                        //sx={{mb: 15}}
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
                                        label="Pick Up"
                                        placeholder={"Gall"}
                                        //sx={{mb: 15}}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LocationOnIcon/>
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
                                        label="Pickup Date"
                                        type={"date"}
                                        placeholder={"2022-07-24"}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    {/*<TodayIcon/>*/}
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
                                        label="Pickup Time"
                                        placeholder={"08-00-00"}
                                        type={"time"}
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
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>


                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Card sx={{maxWidth: 750, maxHeight: 350}}>
                            <CardActionArea>
                                {/*<Typography variant="h5" >Car Manage</Typography>*/}
                                <CardContent>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="DropOff"
                                        placeholder={"Colombo"}
                                        //sx={{mb: 15}}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PinDropIcon/>
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
                                        label="Drop Off Date"
                                        placeholder={"2022-07-30"}
                                        type={"date"}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    {/*<TodayIcon/>*/}
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
                                        label="Drop Off Time"
                                        placeholder={"10-00-00"}
                                        type={"time"}
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
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>


                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <Card sx={{maxWidth: 1750}}>
                            <CardActionArea sx={{mb: 9}}>
                                <div sx={{maxWidth: 120}}>
                                    <img src={prius} alt=""/>
                                </div>
                                <Typography gutterBottom variant="h5" component="div" className={classes.TableHead}>
                                    Toyota
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Total = LKR 25000/=
                                </Typography>
                            </CardActionArea>
                        </Card>

                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <Card sx={{maxWidth: 1750}}>
                            <CardActionArea>
                                <div sx={{maxWidth: 120}}>
                                    <CardContent>

                                        <Typography variant="body2" color="text.secondary">
                                            <CarRentalIcon/>
                                            ABC1234
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <DirectionsCarIcon/>
                                            Premium
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <PaletteIcon/>
                                            White
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <EngineeringIcon/>
                                            Auto
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <EvStationIcon/>
                                            Petrol
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <AirlineSeatReclineExtraIcon/>
                                            4
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <StackedLineChartIcon/>
                                            priceForTheExtraKm =30.00
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <PriceCheckIcon/>
                                            freeMileageForDay = 1000
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <PriceCheckIcon/>
                                            freeMileageForMonth =2000
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <PriceCheckIcon/>
                                            priceForTheDailyRate =1000.00
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <PriceCheckIcon/>
                                            priceForTheMonthlyRate =20000.00
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <CreditCardIcon/>
                                            damageWaver = 15000.00
                                        </Typography>
                                    </CardContent>
                                </div>

                            </CardActionArea>
                        </Card>

                    </Grid>

                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <Card sx={{maxWidth: 1750}}>
                            <CardActionArea>
                                <div sx={{maxWidth: 120}}>
                                    <img src={user} alt=""/>
                                    <CardContent sx={{mb: 9}}>
                                        <TextField
                                            id="input-with-icon-textfield"
                                            label="UserName"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <CreateIcon/>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                        />
                                        <TextField
                                            id="input-with-icon-textfield"
                                            label="Password"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <CreateIcon/>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                        />
                                        <Typography variant="body2" color="text.secondary">
                                            Name
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Address
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Contact No
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Email
                                        </Typography>

                                        <Grid sx={{maxWidth: 1750}}>
                                            <Link to={"/User"}>
                                                <Button variant="outlined" color="success">
                                                    Register
                                                </Button>
                                            </Link>
                                        </Grid>
                                    </CardContent>
                                </div>

                            </CardActionArea>
                        </Card>

                    </Grid>

                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <Card sx={{maxWidth: 1750}}>
                            <CardActionArea>
                                <Typography variant="body2" color="text.secondary">
                                    Bank Account Details
                                </Typography>
                                <div sx={{maxWidth: 5}}>
                                    {/*<img src={user} alt=""/>*/}
                                    <CardContent sx={{mb: 9}}>
                                        <TextField
                                            id="input-with-icon-textfield"
                                            label="Account No"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <CreateIcon/>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                        />

                                        <Grid sx={{maxWidth: 1750}}>
                                            <TextField
                                                id="input-with-icon-textfield"
                                                label="Add Bank Slipt"
                                                type={'file'}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">

                                                        </InputAdornment>
                                                    ),
                                                }}
                                                // onClick={this.setState.file}
                                                variant="standard"
                                            />

                                            <div sx={{maxWidth: 120}}>
                                                {/*{console.log(this.handleChange.event)}*/}
                                                {/*<img src={this.handleChange.event} alt=""/>*/}
                                                <img src={slip} alt=""/>
                                            </div>

                                        </Grid>
                                    </CardContent>

                                    <Button variant="outlined" color="success" type={'file'} endIcon={<SendIcon/>}
                                            onClick={this.submitBookingDetails}
                                    >Rent Car</Button>

                                </div>

                            </CardActionArea>
                        </Card>

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

            </Fragment>

        )
    }


}

export default withStyles(styleSheet)(BookingDetails);
;