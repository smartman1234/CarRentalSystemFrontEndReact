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
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";

class BookingDetails extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        const {classes} = this.props;
        return (

            <Fragment>
                <Typography variant="h2" className={classes.columnHeaderTitleContainer} sx={{mb: 5}}>Booking
                    Details</Typography>
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
                                        type={"date"}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    {/*<TodayIcon/>*/}
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
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
                                    />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>


                    <Grid item lg={4} md={4} sm={4} xm={4} >
                        <Card sx={{maxWidth: 1750}} >
                            <CardActionArea sx={{mb: 9}}>
                                <div sx={{maxWidth: 120}}>
                                    <img src={prius} alt=""/>
                                </div>
                                <Typography gutterBottom variant="h5" component="div" className={classes.TableHead}>
                                    Toyota
                                </Typography>
                            </CardActionArea>
                        </Card>

                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xm={4}>
                        <Card sx={{maxWidth: 1750}}>
                            <CardActionArea>
                                <div sx={{maxWidth: 120}}>
                                    <CardContent >

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

                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <Card sx={{maxWidth: 1750}}>
                            <CardActionArea>
                                <div sx={{maxWidth: 120}}>
                                    <img src={user} alt=""/>
                                    <CardContent sx={{mb: 9}}>
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

                                        <Grid sx={{maxWidth: 1750}}>
                                            <Button variant="outlined" color="success">Rent Car</Button>
                                        </Grid>
                                    </CardContent>
                                </div>

                            </CardActionArea>
                        </Card>

                    </Grid>


                </Grid>


            </Fragment>

        )
    }


}

export default withStyles(styleSheet)(BookingDetails);
;