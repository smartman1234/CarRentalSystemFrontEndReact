import * as React from 'react';
import {Component, Fragment} from 'react';
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import user from "../../assets/img/user.png"
import Button from "@mui/material/Button";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

class DriverDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            formData:{
                ddid: '',
                cid: '',
                did: '',
                driverName: '',
                driverPassword: '',
                pickUp: '',
                dropOff: '',
                pickUpDate: '',
                dropOffDate: '',
                pickUpTime: '',
                dropOffTime: ''
            },
            alert:false,
            message:'',
            severity:'',

            data:[],
            btnLabel:'Save',
            btnColor:'primary'
        }

    }

    render() {
        const {classes} = this.props;
        return (

            <Fragment>
                <Typography variant="h2" className={classes.columnHeaderTitleContainer} sx={{mb: 5}}>Driver Details</Typography>
                <Grid container className="pt-7" sx={{mb: 8}} spacing={2} >

                    <Grid item lg={5} md={5} sm={5} xm={5} sx={{mb: 8}}>
                        <Card sx={{maxWidth: 800}} >
                            <CardActionArea>
                                <div sx={{maxWidth: 120}}>
                                    <CardContent sx={{mb: 6}} >
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
                                            value={this.state.formData.did}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.did = e.target.value
                                                this.setState({formData})
                                            }}
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
                                            value={this.state.formData.driverName}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.driverName = e.target.value
                                                this.setState({formData})
                                            }}
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
                                            value={this.state.formData.driverPassword}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.driverPassword = e.target.value
                                                this.setState({formData})
                                            }}
                                        />

                                    </CardContent>
                                    <Grid sx={{maxWidth: 1750}}>
                                        <Button variant="contained">Driver Details</Button>
                                    </Grid>
                                </div>

                            </CardActionArea>
                        </Card>

                    </Grid>

                    <Grid item lg={4} md={4} sm={4} xm={4}>
                        <Card sx={{maxWidth: 800}}>
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

                            </CardActionArea>
                        </Card>

                    </Grid>
                    {/*<Grid item lg={5} md={5} sm={5} xm={5}>*/}
                    {/*    <Card sx={{maxWidth: 800}} >*/}
                    {/*        <CardActionArea>*/}
                    {/*            <div sx={{maxWidth: 120}}>*/}
                    {/*                <CardContent sx={{mb: 10}}>*/}
                    {/*                    <TextField*/}
                    {/*                        id="input-with-icon-textfield"*/}
                    {/*                        label="Driver Id"*/}
                    {/*                        placeholder={"D00_001"}*/}
                    {/*                        //sx={{mb: 15}}*/}
                    {/*                        InputProps={{*/}
                    {/*                            startAdornment: (*/}
                    {/*                                <InputAdornment position="start">*/}
                    {/*                                    <AirlineSeatReclineExtraIcon/>*/}
                    {/*                                </InputAdornment>*/}
                    {/*                            ),*/}
                    {/*                        }}*/}
                    {/*                        variant="standard"*/}
                    {/*                    />*/}
                    {/*                    <TextField*/}
                    {/*                        id="input-with-icon-textfield"*/}
                    {/*                        label="Driver Name"*/}
                    {/*                        placeholder={"Kamal"}*/}
                    {/*                        InputProps={{*/}
                    {/*                            startAdornment: (*/}
                    {/*                                <InputAdornment position="start">*/}
                    {/*                                    <AirlineSeatReclineExtraIcon/>*/}
                    {/*                                </InputAdornment>*/}
                    {/*                            ),*/}
                    {/*                        }}*/}
                    {/*                        variant="standard"*/}
                    {/*                    />*/}
                    {/*                    <TextField*/}
                    {/*                        id="input-with-icon-textfield"*/}
                    {/*                        label="Password"*/}
                    {/*                        placeholder={"******"}*/}
                    {/*                        InputProps={{*/}
                    {/*                            startAdornment: (*/}
                    {/*                                <InputAdornment position="start">*/}
                    {/*                                    <AirlineSeatReclineExtraIcon/>*/}
                    {/*                                </InputAdornment>*/}
                    {/*                            ),*/}
                    {/*                        }}*/}
                    {/*                        variant="standard"*/}
                    {/*                    />*/}

                    {/*                </CardContent>*/}
                    {/*                <Grid sx={{maxWidth: 1750}} className={classes.rightForm}>*/}
                    {/*                    <Button variant="contained">Driver Details</Button>*/}
                    {/*                </Grid>*/}
                    {/*            </div>*/}

                    {/*        </CardActionArea>*/}
                    {/*    </Card>*/}

                    {/*</Grid>*/}

                    <Grid item lg={12} md={12} sm={12} xm={12} >
                        <TableContainer component={Paper} className={classes.container} >
                            <Table sx={{minWidth: 650}} aria-label="user table">
                                <TableHead className={classes.TableHead} >
                                    <TableRow>
                                        <TableCell align="right">Driver Id</TableCell>
                                        <TableCell align="right">driverName</TableCell>
                                        <TableCell align="right">driverPassword</TableCell>
                                        <TableCell align="right">pickUp</TableCell>
                                        <TableCell align="right">dropOff</TableCell>
                                        <TableCell align="right">pickUpDate</TableCell>
                                        <TableCell align="right">dropOffDate</TableCell>
                                        <TableCell align="right">pickUpTime</TableCell>
                                        <TableCell align="right">dropOffTime</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                            <TableRow>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                            </TableRow>

                                    }

                                </TableBody>
                            </Table>

                        </TableContainer>


                    </Grid>
                </Grid>


            </Fragment>

        )
    }


}

export default withStyles(styleSheet)(DriverDetail);