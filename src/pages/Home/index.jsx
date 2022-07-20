import React, {Component} from "react";
import AppBar from "../../components/common/NavBar";
import GDSEButton from "../../components/common/button";
import {Link} from "react-router-dom";
import MultiActionAreaCard from "../../components/Home/Card";
import Grid from "@mui/material/Grid";


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AppBar/>
                <Grid container spacing={0.5}>
                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <MultiActionAreaCard/>

                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <MultiActionAreaCard/>

                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <MultiActionAreaCard/>

                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <MultiActionAreaCard/>

                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <MultiActionAreaCard/>

                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <MultiActionAreaCard/>

                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <MultiActionAreaCard/>

                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xm={3}>
                        <MultiActionAreaCard/>

                    </Grid>

                </Grid>


            </div>
        );
    }
}

export default Home

