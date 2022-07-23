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
                                <Link to={"/user"}>
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
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link to={"/user"}>
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
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link to={"/user"}>
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

