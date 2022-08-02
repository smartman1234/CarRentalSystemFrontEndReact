import React, {Component, Fragment} from "react";
import UsersService from "../../../services/UsersService";
import Grid from "@mui/material/Grid";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
// import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MailIcon from '@mui/icons-material/Mail';
import Typography from "@mui/material/Typography";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import BookingDetailService from "../../../services/BookingDetailService";

class BookingDetailTable extends Component{
    constructor(props) {
        super(props);
        this.state = {

            formData: {
                bdid: '',
                uid: '',
                cid: '',
                did: '',
                pickUp: '',
                dropOff: '',
                driverNeed: '',
                pickUpDate: '',
                dropOffDate: '',
                pickUpTime: '',
                dropOffTime: '',
                rentPrice: ''
            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'Save',
            btnColor: 'primary',

            file: null,


        }
    }
    loadData = async () => {
        let res = await BookingDetailService.fetchBookingDetails();
        if (res.status === 200) {
            this.setState({
                data: res.data.data
            })
        }
        console.log(this.state.data)
        this.exampleForMap();
    }

    componentDidMount() {
        this.loadData();

        console.log(this.state.data)
    }


    render() {
        const {classes} = this.props;
        return(
            <Fragment>
                <Typography variant="h2"  sx={{mb: 0}} className={classes.columnHeaderTitleContainer}>
                 Booking Details
                </Typography>
                <Grid container>
                    <TableContainer component={Paper}  className={classes.container}>
                        <Table sx={{minWidth: 650}} aria-label="user table">
                            <TableHead className={classes.TableHead}>
                                <TableRow>
                                    <TableCell align="right">Booking Details Id</TableCell>
                                    <TableCell align="right">User Id</TableCell>
                                    <TableCell align="right">Car Id</TableCell>
                                    <TableCell align="right">Driver Id</TableCell>
                                    <TableCell align="right">PickUp</TableCell>
                                    <TableCell align="right">DropOff</TableCell>
                                    <TableCell align="right">Driver Need</TableCell>
                                    <TableCell align="right">PickUpDate</TableCell>
                                    <TableCell align="right">DropOffDate</TableCell>
                                    <TableCell align="right">PickUpTime</TableCell>
                                    <TableCell align="right">DropOffTime</TableCell>
                                    <TableCell align="right">RentPrice</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                    {/*<TableCell align="right">Action</TableCell>*/}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="right">{row.bdid}</TableCell>
                                            <TableCell align="right">{row.uid}</TableCell>
                                            <TableCell align="right">{row.cid}</TableCell>
                                            <TableCell align="right">{row.did}</TableCell>
                                            <TableCell align="right">{row.pickUp}</TableCell>
                                            <TableCell align="right">{row.dropOff}</TableCell>
                                            <TableCell align="right">{row.driverNeed}</TableCell>
                                            <TableCell align="right">{row.pickUpDate}</TableCell>
                                            <TableCell align="right">{row.dropOffDate}</TableCell>
                                            <TableCell align="right">{row.pickUpTime}</TableCell>
                                            <TableCell align="right">{row.dropOffTime}</TableCell>
                                            <TableCell align="right">{row.rentPrice}</TableCell>
                                            <TableCell align="right">
                                                <Tooltip title="MailIcon">
                                                    <IconButton
                                                        // onClick={() => {
                                                        //     console.log("edit icon clicked!")
                                                        //     this.updateCar(row);
                                                        // }}
                                                    >
                                                        <MailIcon color={"error"}/>
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }

                            </TableBody>
                        </Table>

                    </TableContainer>
                </Grid>
            </Fragment>
        )
    }
}

export default withStyles(styleSheet)(BookingDetailTable)