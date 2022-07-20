import React, {Component, Fragment} from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GDSEButton from "../../components/common/button";
import UsersService from "../../services/UsersService";
import Button from "@mui/material/Button";
import GDSEDataTable from "../../components/common/Table";
import GDSESnackBar from "../../components/common/snackBar";
import BasicTable from "../../components/Car";
import DriverService from "../../services/DriverService";

class Driver extends Component{
    constructor(props) {
        super(props);

        this.state = {
            formData:{
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
            message: "",
            severity: "",


            data: [],
            loaded: false,

            //for data table
            columns: [
                {
                    field: 'did',
                    headerName: 'Driver Id',
                    width: 70
                },
                {
                    field: 'driverName',
                    headerName: 'driverName',
                    width: 100
                },
                {
                    field: 'driverAge',
                    headerName: 'driverAge',
                    width: 100
                },
                {
                    field: 'driverPassword',
                    headerName: 'driverPassword',
                    width: 70
                },
                {
                    field: 'driverLicence',
                    headerName: 'driverLicence',
                    width: 100
                },
                {
                    field: 'driverEmail',
                    headerName: 'driverEmail',
                    width: 70
                },
                {
                    field: 'driverContactNo',
                    headerName: 'driverContactNo',
                    width: 100
                },
                {
                    field: 'driverAddress',
                    headerName: 'driverAddress',
                    width: 100
                },
                {
                    field: 'driverStatus',
                    headerName: 'driverStatus',
                    width: 100
                },
            ]
        }
    }

    async loadData() {
        let res = await UsersService.fetchPosts();
        console.log("row response: " + JSON.stringify(res))
        if (res.status === 200) {
            this.setState({
                loaded: true,
                data: res.data
            })
            // console.log("res: " + JSON.stringify(res.data))

        } else {
            console.log("fetching error: " + res)
        }
    }
    componentDidMount() {
        console.log('Post Screen Mounted!');
        this.loadData();

        console.log(this.state.data)
    }

    handleSubmit = async () => {
        console.log('save button clicked!!')
        console.log(this.state.formData)
        let formData = this.state.formData  // not compulsory
        let response = await DriverService.createPost(formData);
        if (response.status === 201) {
            this.setState({
                alert: true,
                message: 'Post created succesfully!',
                severity: 'success'
            })
        } else {
            this.setState({
                alert: true,
                message: 'Post created Unsuccesfully!',
                severity: 'error'
            })
        }
    }
    render() {
        const { classes } = this.props;
        return(
            <Fragment>
                <Typography variant="h2">Driver Manage</Typography>
                <ValidatorForm
                    ref="form"
                    className="pt-2"
                    onSubmit={this.submitUser}
                >
                    <Grid container className="pt-2" spacing={3}>
                        {/*<Grid item lg={12} xs={12} sm={12} md={12}>*/}
                        {/*    <Typography variant="body2">User Id</Typography>*/}
                        {/*</Grid>*/}
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">Driver Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Id"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.did}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.did = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}

                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Name</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Name"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.userName}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverName = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Age</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Age"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.driverAge}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverAge = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Password</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Password"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.driverPassword}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverPassword = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Licence</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Licence"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.driverPassword}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverPassword = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Licence</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Licence"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.driverLicence}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverLicence = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Email</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Email"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.driverEmail}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverEmail = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver ContactNo</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver ContactNo"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.driverContactNo}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverContactNo = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Address</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Address"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.driverAddress}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverAddress = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">Driver Status</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Driver Status"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.driverStatus}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.driverStatus = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xm={6} style={{display: 'flex'}} justifyContent="flex-end"
                              spacing-xs-6>
                            <Button variant="outlined" color="success">
                                Clear
                            </Button>
                            <div style={{width: "10px"}}></div>

                            <Button variant="outlined" color="primary">
                                Save
                            </Button>

                            <div style={{width: "10px"}}></div>

                            <Button variant="outlined" color="warning">
                                Update
                            </Button>
                            <div style={{width: "10px"}}></div>

                            <Button variant="outlined" color="error">
                                Delete
                            </Button>
                        </Grid>

                    </Grid>
                </ValidatorForm>

                <Grid container style={{ height: 400, width: '100%', marginTop: '50px' }}>
                    {/* <BasicPostTable data={this.state.data} /> */}
                    <GDSEDataTable
                        columns={this.state.columns}
                        rows={this.state.data}
                        rowsPerPageOptions={5}
                        pageSize={5}
                        // checkboxSelection={true}
                    />
                </Grid>
                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({ open: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />

            </Fragment>


        )
    }
}

export default Driver;