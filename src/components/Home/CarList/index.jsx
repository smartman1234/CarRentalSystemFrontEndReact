import React, {Component} from "react";
import {Grid} from "@mui/material";
import BasicCard from "../Card";
import Card from "../Card";

class CarList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid className={"container"} >
                <Grid item lg={4} md={4} sm={4} xm={4}>
                    <Card/>
                </Grid>
            </Grid>


        )
    }
}

export default CarList