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

class User extends Component{
    constructor(props) {
        super(props);

        this.state = {
            formData:{
                uid: "",
                userName: "",
                userEmail: "",
                userAddress: "",
                userContactNo: "",
                userIdentityCardImg: "",
                userDrivingLicenceImg: "",

            },
            alert: false,
            message: "",
            severity: "",


            data: [],
            loaded: false,

            //for data table
            columns: [
                {
                    field: 'uid',
                    headerName: 'User Id',
                    width: 120
                },
                {
                    field: 'userName',
                    headerName: 'userName',
                    width: 200
                },
                {
                    field: 'userEmail',
                    headerName: 'userEmail',
                    width: 200
                },
                {
                    field: 'userAddress',
                    headerName: 'userAddress',
                    width: 250
                },
                {
                    field: 'userContactNo',
                    headerName: 'userContactNo',
                    width: 250
                },
                {
                    field: 'userIdentityCardImg',
                    headerName: 'userIdentityCardImg',
                    width: 250
                },
                {
                    field: 'userDrivingLicenceImg',
                    headerName: 'userDrivingLicenceImg',
                    width: 250
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
        let response = await UsersService.createPost(formData);
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
                <Typography variant="h2">User Manage</Typography>
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
                            <Typography variant="body2">User Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Customer Id"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.userId}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.userId = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}

                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">User Name</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="User Name"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.userName}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.userName = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">userEmail</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="User Email"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.userEmail}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.userEmail = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">userAddress</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="userAddress"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.userAddress}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.userAddress = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">userContactNo</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="userContactNo"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.userContactNo}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.userContactNo = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">userIdentityCardImg</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="userIdentityCardImg"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.userIdentityCardImg}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.userIdentityCardImg = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="subtitle1">userDrivingLicenceImg</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="userDrivingLicenceImg"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.userDrivingLicenceImg}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.userDrivingLicenceImg = e.target.value
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

export default User;