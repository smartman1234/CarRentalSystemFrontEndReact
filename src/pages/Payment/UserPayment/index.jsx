import React, {Component, Fragment} from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import BookingDetailService from "../../../services/BookingDetailService";
import PaymentService from "../../../services/PaymentService";

class UserPayment extends Component{
    constructor(props) {
        super(props);

        this.state = {

            formData: {
                bdid: '',
                uid: '',
                userName: '',
                userEmail: '',
                userAccountNo:'',
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
        return(
            <Fragment>
                <Grid  container className="pt-2" spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Card sx={{minWidth: 600, minHeight: 250}} style={{backgroundColor:'green'}}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography>
                                        Booking Details
                                    </Typography>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <TableContainer component={Paper} sx={{minHeight: 200}}>
                                            <Table sx={{minWidth: 600}} aria-label="user table">
                                                <TableHead>
                                                    <TableRow>

                                                        <TableCell align="right">User Id</TableCell>
                                                        <TableCell align="right">Booking Id</TableCell>
                                                        <TableCell align="right">Rent Price</TableCell>
                                                        <TableCell align="right">Pickup</TableCell>
                                                        <TableCell align="right">DropOff</TableCell>
                                                        <TableCell align="right">Pickup Date</TableCell>
                                                        <TableCell align="right">DropOff Date</TableCell>
                                                        <TableCell align="right">Pickup Time</TableCell>
                                                        <TableCell align="right">DropOff Time</TableCell>


                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {
                                                        this.state.data.map((row) => (
                                                            <TableRow>
                                                                <TableCell align="right">{row.uid}</TableCell>
                                                                <TableCell align="right">{row.bdid}</TableCell>
                                                                <TableCell align="right">{row.rentPrice}</TableCell>
                                                                <TableCell align="right">{row.pickUp}</TableCell>
                                                                <TableCell align="right">{row.dropOff}</TableCell>
                                                                <TableCell align="right">{row.pickUpDate}</TableCell>
                                                                <TableCell align="right">{row.dropOffDate}</TableCell>
                                                                <TableCell align="right">{row.pickUpTime}</TableCell>
                                                                <TableCell align="right">{row.dropOffTime}</TableCell>

                                                            </TableRow>
                                                        ))
                                                    }
                                                </TableBody>


                                            </Table>

                                        </TableContainer>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>

                        </Card>

                    </Grid>

                </Grid>

            </Fragment>
        )
    }

}

export default UserPayment