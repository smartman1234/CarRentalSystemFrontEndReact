import React, {Component, Fragment} from "react";
import AppBar from "../../components/common/NavBar";
import {Link} from "react-router-dom";
import Grid from "@mui/material/Grid";
import {Button, CardActionArea, CardActions} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import {withStyles} from "@mui/styles";
import benze from "../../assets/img/benze.jpg"
import prius from "../../assets/img/prius.jpg"
import Toyota from "../../assets/img/Toyota.jpg"
import BMWM5 from "../../assets/img/BMWM5.jpg"
import BMWMz4 from "../../assets/img/BMWz4.jpg"
import ToyotaCorollaAltis from "../../assets/img/ToyotaCorollaAltis.jpg"
import mitsubishi from "../../assets/img/mitsubishi.jpg"
import mitsubishiEvo from "../../assets/img/mitsubishiEvo.jpg"
import mitsubishiLanzerRed from "../../assets/img/mitsubishiLanzerRed.jpg"

const styleSheet = () => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img__container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '500px'
    }
})


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {classes} = this.props
        return (
            <Fragment>
                <AppBar/>

                <Grid container spacing={0.5}>

                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <Card sx={{maxWidth: 345}}>
                            <CardActionArea className={classes.container}>
                                <div className={classes.img__container}>
                                    <img src={prius} alt=""/>
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link to={"/bookingDetails"}>
                                    <Button size="small" color="primary">
                                        Booking
                                    </Button>
                                </Link>

                            </CardActions>
                        </Card>

                    </Grid>

                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <Card sx={{maxWidth: 345}}>
                            <CardActionArea className={classes.container}>
                                <div className={classes.img__container}>
                                    <img src={benze} alt=""/>
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Benze
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link to={"/bookingDetails"}>
                                    <Button size="small" color="primary">
                                        Booking
                                    </Button>
                                </Link>

                            </CardActions>
                        </Card>

                    </Grid>

                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <Card sx={{maxWidth: 345}}>
                            <CardActionArea className={classes.container}>
                                <div className={classes.img__container}>
                                    <img src={Toyota} alt=""/>
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Toyota
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link to={"/bookingDetails"}>
                                    <Button size="small" color="primary">
                                        Booking
                                    </Button>
                                </Link>

                            </CardActions>
                        </Card>

                    </Grid>

                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <Card sx={{maxWidth: 345}}>
                            <CardActionArea className={classes.container}>
                                <div className={classes.img__container}>
                                    <img src={BMWM5} alt=""/>
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        BMWM5
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link to={"/bookingDetails"}>
                                    <Button size="small" color="primary">
                                        Booking
                                    </Button>
                                </Link>

                            </CardActions>
                        </Card>

                    </Grid>


                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <Card sx={{maxWidth: 345}}>
                            <CardActionArea className={classes.container}>
                                <div className={classes.img__container}>
                                    <img src={BMWMz4} alt=""/>
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        BMWMz4
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link to={"/bookingDetails"}>
                                    <Button size="small" color="primary">
                                        Booking
                                    </Button>
                                </Link>

                            </CardActions>
                        </Card>

                    </Grid>


                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <Card sx={{maxWidth: 345}}>
                            <CardActionArea className={classes.container}>
                                <div className={classes.img__container}>
                                    <img src={ToyotaCorollaAltis} alt=""/>
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        ToyotaCorollaAltis
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link to={"/bookingDetails"}>
                                    <Button size="small" color="primary">
                                        Booking
                                    </Button>
                                </Link>

                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <Card sx={{maxWidth: 345}}>
                            <CardActionArea className={classes.container}>
                                <div className={classes.img__container}>
                                    <img src={BMWMz4} alt=""/>
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        BMWMz4
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link to={"/bookingDetails"}>
                                    <Button size="small" color="primary">
                                        Booking
                                    </Button>
                                </Link>

                            </CardActions>
                        </Card>

                    </Grid>

                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <Card sx={{maxHeight:350}}>
                            <CardActionArea className={classes.container}>
                                <div className={classes.img__container}>
                                    <img src={mitsubishiEvo} alt=""/>
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        mitsubishiEvo
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link to={"/bookingDetails"}>
                                    <Button size="small" color="primary">
                                        Booking
                                    </Button>
                                </Link>

                            </CardActions>
                        </Card>

                    </Grid>


                </Grid>


            </Fragment>
        );
    }
}

export default withStyles(styleSheet)(Home)

