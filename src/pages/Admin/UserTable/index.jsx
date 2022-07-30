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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";

class UserTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                uid: '',
                userName: '',
                userEmail: '',
                userAddress: '',
                userContactNo: '',
                userIdentityCardImg: '',
                userDrivingLicenceImg: '',

            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel:'Save',
            btnColor:"primary"


        }
        }
    loadData = async () => {
        let res = await UsersService.fetchUser();
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
                 User
             </Typography>
             <Grid container>
                 <TableContainer component={Paper}  className={classes.container}>
                     <Table sx={{minWidth: 650}} aria-label="user table">
                         <TableHead className={classes.TableHead}>
                             <TableRow>
                                 <TableCell align="right">User Id</TableCell>
                                 <TableCell align="right">User Name</TableCell>
                                 <TableCell align="right">User Email</TableCell>
                                 <TableCell align="right">User Address</TableCell>
                                 <TableCell align="right">User Contact No</TableCell>
                                 <TableCell align="right">User Identity Card Image</TableCell>
                                 <TableCell align="right">User Driving Licence Image</TableCell>
                                 <TableCell align="right">Action</TableCell>
                             </TableRow>
                         </TableHead>
                         <TableBody>
                             {
                                 this.state.data.map((row) => (
                                     <TableRow>
                                         <TableCell align="right">{row.uid}</TableCell>
                                         <TableCell align="right">{row.userName}</TableCell>
                                         <TableCell align="right">{row.userEmail}</TableCell>
                                         <TableCell align="right">{row.userAddress}</TableCell>
                                         <TableCell align="right">{row.userContactNo}</TableCell>
                                         <TableCell align="right">{row.userIdentityCardImg}</TableCell>
                                         <TableCell align="right">{row.userDrivingLicenceImg}</TableCell>
                                         <TableCell align="right">
                                             <Tooltip title="Edit">
                                                 <IconButton

                                                 >
                                                     <EditIcon color={"primary"}/>
                                                 </IconButton>
                                             </Tooltip>
                                         </TableCell>
                                         <TableCell align="right">
                                             <Tooltip title="Delete">
                                                 <IconButton

                                                 >
                                                     <DeleteIcon color={"error"}/>
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

export default withStyles(styleSheet)(UserTable)