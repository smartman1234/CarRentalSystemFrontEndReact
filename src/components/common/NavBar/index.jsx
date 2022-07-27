import React, {Component} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import logo from "../../../assets/img/carLogo.jpg";
class AppBar extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5 bg-body rounded" >

                <Grid item xs={1} sm={1} md={1} lg={1}>
                    <Stack direction="row" spacing={2}>
                        <Avatar
                            alt="Remy Sharp"
                            src={logo} alt=""
                            sx={{width: 100, height: 100}}
                        />
                    </Stack>

                </Grid>

                <span className={"navbar-brand mb-0 h1"}>Car Rental System</span>
                <ul className={"navbar-nav"}>
                    <li className={"nav-item"}><Link className={"nav-link"} to={"/"}>Home</Link></li>
                    {/*<li className={"nav-item"}><Link className={"nav-link"} to={"/car"}>Car</Link></li>*/}
                    <li className={"nav-item"}><Link className={"nav-link"} to={"/driverDetail"}>Driver</Link></li>
                    {/*<li className={"nav-item"}><Link className={"nav-link"} to={"/driverDetail"}>DriverDetail</Link></li>*/}
                    {/*<li className={"nav-item"}><Link className={"nav-link"} to={"/payment"}>Payment</Link></li>*/}
                    {/*<li className={"nav-item"}><Link className={"nav-link"} to={"/user"}>User</Link></li>*/}
                    {/*<li className={"nav-item"}><Link className={"nav-link"} to={"/bookingDetails"}>BookingDetails</Link></li>*/}
                    <li className={"nav-item"}><Link className={"nav-link"} to={"/admin"}>Admin</Link></li>

                </ul>
            </nav>

        )
    }
}

export default AppBar