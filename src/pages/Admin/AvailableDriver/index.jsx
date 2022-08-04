import React, {Component, Fragment} from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import BookingDetailService from "../../../services/BookingDetailService";
import DriverService from "../../../services/DriverService";

class DriverTable extends Component{
    constructor(props) {
        super(props);

        this.state = {

            formData: {

                did: "",
                driverName: "",
                driverAge: "",
                driverPassword: "",
                driverLicence: "",
                driverEmail: "",
                driverContactNo: "",
                driverAddress: "",
                driverStatus: "",
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
        let res = await DriverService.fetchDriver();
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
                   <Grid item xs={6} sm={6} md={6} lg={6}>
                       <Card sx={{minWidth: 900, minHeight: 250}} style={{backgroundColor:'green'}}>
                           <CardActionArea>
                               <CardContent>
                                 <Typography>
                                     Drivers
                                 </Typography>
                                   <Grid item xs={12} sm={12} md={12} lg={12}>
                                       <TableContainer component={Paper} sx={{minHeight: 200}}>
                                           <Table sx={{minWidth: 600}} aria-label="user table">
                                               <TableHead>
                                                   <TableRow>

                                                       <TableCell align="left">Driver Id</TableCell>
                                                       <TableCell align="right">Driver Name</TableCell>
                                                       <TableCell align="right">Driver Status</TableCell>


                                                   </TableRow>
                                               </TableHead>
                                               <TableBody>
                                                   {
                                                       this.state.data.map((row) => (
                                                   <TableRow>
                                                       <TableCell align="left">{row.did}</TableCell>
                                                       <TableCell align="right">{row.driverName}</TableCell>
                                                       <TableCell align="right">{row.driverStatus}</TableCell>

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

export default DriverTable