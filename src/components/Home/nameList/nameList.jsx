import React, {Component, Fragment} from "react";
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
import Home from "../../../pages/Home";

class  NameList extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let {classes} = this.props
        return(
        <Fragment>
            <Grid container spacing={0.5}>
                <Grid item lg={3} md={3} sm={3} xm={3}>
                    <Card sx={{maxWidth: 345}}>
                        <CardActionArea className={classes.container}>
                            <div className={classes.img__container}>
                                <img  {props.name} alt=""/>
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" >
                                   Car is {props.car}
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

        )
    }

}

export default NameList