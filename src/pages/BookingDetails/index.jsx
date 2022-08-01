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
import CarService from "../../services/CarService";
import BMWMz4 from "../../assets/img/BMWz4.jpg"
import UsersService from "../../services/UsersService";


import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// import { pink } from '@mui/material/colors';


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

    // loadData = async () => {
    //     let res = await CarService.fetchCar();
    //     if (res.status === 200) {
    //         this.setState({
    //             data: res.data.data
    //         })
    //     }
    //     console.log(this.state.data)
    //     console.log("Hello")
    // }

    handleChange(event) {
        this.state({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    searchCar = async (cid) => {
        let res = await CarService.searchCar(cid);
        console.log(res)
        if (res.status === 200) {
            // console.log(res.data.formData.cid)
            if (cid === this.state.formData.cid) {
                this.setState({
                    data: res.data.data
                })
            }
        }
    }
    searchUser = async (uid) => {
        let res = await UsersService.searchUser(uid);
        console.log(res)
        if (res.status === 200) {
            // console.log(res.data.formData.cid)
            if (uid === this.state.formData.uid) {
                this.setState({
                    data: res.data.data
                })
            }
        }
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

    // componentDidMount() {
    //     this.searchCar();
    //     this.carMap();
    //
    //     console.log(this.state.data)
    // }

    carMap = () => {
        this.state.data.map((value, index) => {
            // console.log(value.userName)
            // console.log(index)
            console.log(value)

            // this.state.data[index].id="U00_002"

        })

    }

    setImage = (e) => {
        // var imageList=[{BMWMz4},{BMWM5},{Toyota},{benze}];
        // var imgName = imageList[Math.floor(Math.random()*imageList.length)];
        //


    }
    changeImage = (e) => {
        console.log("change Image")
        e.src = {BMWMz4}

    }

    checkValidity() {
        console.log("Login button clicked!")

        console.log(this.state.formData)

        let formData = this.state.formData

        if (formData.uid === this.state.formData.uid && formData.password === this.state.formData.password) {
            console.log('credential matched!')
            this.setState({
                open: true,
                message: 'User credential matching sucess!',
                severity: 'success'
            })
        } else {
            console.log('credential didn\'t matche!')
            this.setState({
                open: true,
                message: 'User credential not matching!',
                severity: 'error'
            })
        }
    }
    render() {
        const {classes} = this.props;

        // const itemData = [
        //
        //     {
        //         img: {prius},
        //         title: 'Sea star',
        //     },
        //     {
        //         img: {BMWMz4},
        //         title: 'Bike',
        //     },
        //     {
        //         img: {BMWMz4},
        //         title: 'Sea star',
        //     },
        //     // {
        //     //     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        //     //     title: 'Bike',
        //     // },
        // ];
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
                                        label="Car Id"
                                        placeholder={"C00_001"}
                                        //sx={{mb: 15}}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
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

                                        onKeyPress={(ev) => {
                                            console.log(`pressed keyCode {ev.key}`);
                                            if (ev.key === 'Enter') {
                                                // this.loadData()
                                                console.log(this.state.formData.cid)
                                                this.searchCar(this.state.formData.cid)
                                                //DocodeHere
                                                ev.preventDefault();
                                            }
                                        }}
                                        //validators={['required','matchRegexp:^(B00_)[0-9]{3,4}$']}
                                    />
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
                                        placeholder={"08:00 AM"}
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

                                        value={this.state.formData.dropOffDate}
                                        onChange={(e) => {
                                            let formData = this.state.formData
                                            formData.dropOffDate = e.target.value
                                            this.setState({formData})
                                        }}
                                    />
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="Drop Off Time"
                                        placeholder={"10:00 PM"}
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
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>


                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <Card sx={{maxWidth: 500}}>
                            <CardActionArea sx={{mb: 9}}>

                                {/*<div sx={{maxWidth: 120}} onClick={this.changeImage}>*/}
                                {/*    <img id={"prius"} src={prius} alt=""/>*/}
                                {/*    <img id={"prius"} src={prius} alt=""/>*/}
                                {/*    <img id={"prius"} src={prius} alt=""/>*/}
                                {/*    <img id={"prius"} src={prius} alt=""/>*/}
                                {/*</div>*/}


                                {/*<ImageList sx={{ width: 350, height: 350 }} cols={2} rowHeight={164}>*/}
                                {/*    {itemData.map((item) => (*/}
                                {/*        <ImageListItem key={item.img}>*/}
                                {/*            <img*/}
                                {/*                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}*/}
                                {/*                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}*/}
                                {/*                alt={item.title}*/}
                                {/*                loading="lazy"*/}
                                {/*            />*/}
                                {/*        </ImageListItem>*/}
                                {/*    ))}*/}
                                {/*</ImageList>*/}
                                <ImageList sx={{width: 350, height: 200}} cols={2} rowHeight={100}>
                                    <ImageListItem>
                                        <img src={prius} alt="" loading="lazy"/>
                                        <img src={prius} alt="" loading="lazy"/>
                                        <img src={prius} alt="" loading="lazy"/>
                                        <img src={prius} alt="" loading="lazy"/>

                                    </ImageListItem>

                                </ImageList>

                                <Typography gutterBottom variant="h5" component="div" className={classes.TableHead}>
                                    Toyota
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Total = LKR 25000/=
                                </Typography>


                                {/*<Radio id={"btn"} color="success"*/}
                                {/*       onChange={this.setImage}*/}
                                {/*/>*/}
                                {/*<Radio color="primary"/>*/}
                                {/*<Radio color="error"/>*/}
                                {/*<Radio color="warning"/>*/}


                            </CardActionArea>
                        </Card>

                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xm={3}>


                        <Card sx={{maxWidth: 1750}}>

                            <CardActionArea>
                                <div sx={{maxWidth: 120}}>
                                    {
                                        this.state.data.map((row) => (
                                            <CardContent>

                                                <Typography variant="body2" color="text.secondary">
                                                    <CarRentalIcon/>
                                                    {row.registrationNumber}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <DirectionsCarIcon/>
                                                    {row.carType}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <PaletteIcon/>
                                                    {row.color}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <EngineeringIcon/>
                                                    {row.transmissionType}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <EvStationIcon/>
                                                    {row.fuelType}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <AirlineSeatReclineExtraIcon/>
                                                    {row.numberOfPassengers}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <StackedLineChartIcon/>
                                                    priceForTheExtraKm ={row.priceForTheExtraKm}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <PriceCheckIcon/>
                                                    freeMileageForDay = {row.freeMileageForDay}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <PriceCheckIcon/>
                                                    freeMileageForMonth ={row.freeMileageForMonth}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <PriceCheckIcon/>
                                                    priceForTheDailyRate ={row.priceForTheDailyRate}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <PriceCheckIcon/>
                                                    priceForTheMonthlyRate ={row.priceForTheMonthlyRate}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <CreditCardIcon/>
                                                    damageWaver = {row.damageWaver}
                                                </Typography>


                                            </CardContent>


                                        ))
                                    }


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
                                            onChange={(e) => {
                                                console.log(e.target.value)
                                                let formData = this.state.formData
                                                formData.userName = e.target.value
                                                this.setState({ formData })
                                            }}
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
                                            onChange={(e) => {
                                                console.log(e.target.value)
                                                let formData = this.state.formData
                                                formData.password = e.target.value
                                                this.setState({ formData })
                                            }}
                                            onKeyPress={(ev) => {
                                                console.log(`pressed keyCode {ev.key}`);
                                                if (ev.key === 'Enter') {
                                                    this.checkValidity()
                                                    //DocodeHere
                                                    ev.preventDefault();
                                                }
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
