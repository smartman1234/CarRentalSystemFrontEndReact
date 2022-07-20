import * as React from 'react';
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Component} from "react";
import Grid from "@mui/material/Grid";

class Card extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                       <h2>Hello</h2>
                </CardContent>

            </Card>
        )
    }
}
export default  Card;