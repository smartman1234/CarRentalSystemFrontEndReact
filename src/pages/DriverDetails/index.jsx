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
class DriverDetail extends Component {
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
                                        label="Driver Id"
                                        placeholder={"D00_001"}
                                        //sx={{mb: 15}}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AirlineSeatReclineExtraIcon/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="Driver Name"
                                        placeholder={"Kamal"}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AirlineSeatReclineExtraIcon/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="Password"
                                        placeholder={"******"}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AirlineSeatReclineExtraIcon/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                    />
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>

                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <Card sx={{maxWidth: 1750}}>
                            <CardActionArea>
                                <div sx={{maxWidth: 120}}>
                                    <img src={user} alt=""/>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Kamal
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            D00_001
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            0786787987
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            L00_0001
                                        </Typography>
                                    </CardContent>
                                </div>
                                <Grid sx={{maxWidth: 1750}} >
                                    <Button variant="contained">Driver Details</Button>
                                </Grid>
                            </CardActionArea>
                        </Card>

                    </Grid>


                </Grid>



            </Fragment>

        )
    }


}

export default DriverDetail;