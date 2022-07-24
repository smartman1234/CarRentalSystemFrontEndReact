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
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TodayIcon from '@mui/icons-material/Today';
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
import Button from "@mui/material/Button";
class BookingDetails extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (

            <Fragment>

                <Grid container className="pt-7" spacing={2}>

                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Card sx={{maxWidth: 750, maxHeight: 350}}>
                            <CardActionArea>
                                {/*<Typography variant="h5" >Car Manage</Typography>*/}
                                <CardContent>
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
                                    />
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="Pickup Date"
                                        placeholder={"2022-07-24"}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <TodayIcon/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="Pickup Time"
                                        placeholder={"08-00-00"}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccessTimeIcon/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
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
                                    />
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="Drop Off Date"
                                        placeholder={"2022-07-30"}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <TodayIcon/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="Drop Off Time"
                                        placeholder={"10-00-00"}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccessTimeIcon/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>


                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <Card sx={{maxWidth: 1750}}>
                            <CardActionArea>
                                <div sx={{maxWidth: 120}}>
                                    <img src={prius} alt=""/>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Toyota
                                        </Typography>
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
                                            priceForTheExtraKm
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <PriceCheckIcon/>
                                            freeMileageForDay
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <PriceCheckIcon/>
                                            freeMileageForMonth
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <PriceCheckIcon/>
                                            priceForTheDailyRate
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <PriceCheckIcon/>
                                            priceForTheMonthlyRate
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <CreditCardIcon/>
                                            damageWaver
                                        </Typography>
                                    </CardContent>
                                </div>

                            </CardActionArea>
                        </Card>

                    </Grid>

                    <Grid item lg={4} md={4} sm={4} xm={4}>
                        <Card sx={{maxWidth: 1750}}>
                            <CardActionArea>
                                <div sx={{maxWidth: 120}}>
                                    <img src={user} alt=""/>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
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
                                    </CardContent>
                                </div>

                            </CardActionArea>
                        </Card>

                    </Grid>
                    <Grid item lg={2} md={2} sm={2} xm={2} sx={{mb: 15}}>
                        <Button variant="outlined">Get Rent</Button>
                    </Grid>

                </Grid>



            </Fragment>

        )
    }


}

export default BookingDetails;