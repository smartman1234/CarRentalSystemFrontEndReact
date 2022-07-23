import React, {Component, Fragment} from "react";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AdminService from "../../services/AdminService";
import GDSEButton from "../../components/common/button";
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

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                aid: '',
                password: '',
                username: '',
                name: '',
                email: '',
                contactNo: '',

            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'Save',
            btnColor: "primary"

        }


    }

    deleteAdmin = async (aid) => {
        let params = {
            aid: aid
        }
        let res = await AdminService.deleteAdmin(params);
        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: "success"
            })
            this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: "error"
            });
        }
    }

    updateUser = (data) => {
        console.log(data);
        this.setState({
            btnLabel:"update",
            btnColor:"success",
            formData: {
                aid: data.aid,
                userName: data.userName,
                userEmail: data.userEmail,
                userAddress: data.userAddress,
                userContactNo: data.userContactNo,
                userIdentityCardImg: data.userIdentityCardImg,
                userDrivingLicenceImg: data.userDrivingLicenceImg,

            }
        })
    };
    clearFields = (e) => {
        this.setState({
            formData: {
                aid: '',
                password: '',
                username: '',
                name: '',
                email: '',
                contactNo: '',

            }
        });
    }


    submitAdmin = async () => {
        let formData = this.state.formData;
        if (this.state.btnLabel === "Save") {
            let res = await AdminService.putAdmin(formData);
            console.log(res);

            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: "success"
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: "error"
                });
            }

        } else {
            let res = await AdminService.putAdmin(formData);
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: "success",
                    btnLabel: "Save",
                    btnColor: "primary"
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: "error"
                });
            }
        }
    }


    exampleForMap = () => {
        this.state.data.map((value, index) => {
            // console.log(value.userName)
            // console.log(index)
            console.log(value)

            // this.state.data[index].id="U00_002"

        })
    }

    loadData = async () => {
        let res = await AdminService.fetchAdmin();
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
        return (
            <Fragment>
                <Typography variant="h2">Admin Manage</Typography>
                <ValidatorForm
                    ref="form"
                    className="pt-2"
                    onSubmit={this.submitAdmin()}

                >
                    <Grid container className="pt-2" spacing={3}>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">Admin Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Admin Id"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.aid}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.aid = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}

                            />


                        </Grid>


                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">Admin Password</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Admin Password"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.password}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.password = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}

                            />


                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">username</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="username"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.username}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.username = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}

                            />


                        </Grid>


                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">Admin Name</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Admin Name"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.name}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.name = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}

                            />

                        </Grid>


                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">Email</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Email"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.email}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.email = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}

                            />

                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">Contact No</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Contact No"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.contactNo}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.contactNo = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required',]}

                            />

                        </Grid>
                        <Grid container style={{marginTop: '10px'}} direction="row" justifyContent="flex-end"
                              alignItems="center">
                            <GDSEButton label={this.state.btnLabel} type="submit" size="small" color={this.state.btnColor}
                                        variant="contained"/>
                        </Grid>

                    </Grid>


                </ValidatorForm>



                <Grid container>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="user table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Admin Id</TableCell>
                                    <TableCell align="right">Password</TableCell>
                                    <TableCell align="right">Username</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">ContactNo</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="right">{row.aid}</TableCell>
                                            <TableCell align="right">{row.password}</TableCell>
                                            <TableCell align="right">{row.username}</TableCell>
                                            <TableCell align="right">{row.name}</TableCell>
                                            <TableCell align="right">{row.email}</TableCell>
                                            <TableCell align="right">{row.contactNo}</TableCell>
                                            <TableCell align="right">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            // this.updateAdmin(row);
                                                        }}
                                                    >
                                                        <EditIcon color={"primary"}/>
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                            <TableCell align="right">
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("delete icon clicked!")
                                                            this.deleteAdmin(row.aid);
                                                        }}
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

export default Admin