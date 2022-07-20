import React, {Component, Fragment} from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {styleSheet} from "./style";
import {withStyles} from '@mui/styles';
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import GDSEDataTable from "../../components/common/Table";
import GDSESnackBar from "../../components/common/snackBar";
import AdminService from "../../services/AdminService";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import styled from "@mui/material/styles/styled";
import MultiActionAreaCard from "../../components/Home/Card";


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
                contactNo: ''
            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            loaded: false,

            //for data table
            columns: [
                {
                    field: 'aid',
                    headerName: 'Admin Id',
                    width: 150
                },
                {
                    field: 'password',
                    headerName: 'password',
                    width: 150
                },
                {
                    field: 'username',
                    headerName: 'username',
                    width: 150
                },
                {
                    field: 'name',
                    headerName: 'name',
                    width: 150
                },
                {
                    field: 'email',
                    headerName: 'email',
                    width: 150
                },
                {
                    field: 'contactNo',
                    headerName: 'contactNo',
                    width: 150
                },
            ]
        }

    }

    async loadData() {
        let res = await AdminService.fetchPosts();
        if (res.status === 200) {
            this.setState({
                loaded: true,
                data: res.data
            })
            console.log("res: " + JSON.stringify(res.data))

        } else {
            console.log("fetching error: " + res)
        }
    }

    componentDidMount() {
        console.log('Post Screen Mounted!');
        this.loadData();
    }

    handleSubmit = async () => {
        console.log('save button clicked!!')
        console.log(this.state.formData)
        let formData = this.state.formData
        let response = await AdminService.createPost(formData);
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
        const {classes} = this.props;

        const Item = styled(Paper)(({ theme }) => ({
            // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            backgroundColor: theme.palette.mode === 'light' ? '#BBDEFB' : '#fff',
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'left',
            color: theme.palette.text.secondary,

        }));

        return (
            <Fragment>
                <Typography className={classes.columnHeaderTitleContainer} variant={"h4"}>
                    Admin Manager
                </Typography>


                <Grid Grid container spacing={2} item xs={8} sx={{ mb: 2 }}>
                    <Grid item lg={6} md={6} sm={6} xm={6} spacing={2} texta>
                        <div>
                            <Card variant="outlined">
                                <Typography className={classes.column} variant={"h5"}>
                                    <Item>Daily Rent</Item>
                                </Typography>
                                <Typography className={classes.column} variant={"h5"}>
                                    <Item>Monthly Rent</Item>
                            </Typography>
                                <Typography className={classes.column} variant={"h5"}>
                                    <Item>Daily Income</Item>
                            </Typography>
                                <Typography className={classes.column} variant={"h5"}>
                                    <Item>Monthly Income</Item>
                            </Typography>
                            </Card>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xm={6} spacing={2} justifyContent={"Right"} texta>
                        <div>
                            <Card variant="outlined">
                                <Typography className={classes.column} variant={"h5"}>
                                    <Item>Daily Rent</Item>
                                </Typography>
                                <Typography className={classes.column} variant={"h5"}>
                                    <Item>Monthly Rent</Item>
                            </Typography>
                                <Typography className={classes.column} variant={"h5"}>
                                    <Item>Daily Income</Item>
                            </Typography>
                                <Typography className={classes.column} variant={"h5"}>
                                    <Item>Monthly Income</Item>
                            </Typography>
                            </Card>
                        </div>
                    </Grid>

                </Grid>

                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >

                    <Grid container spacing={0.5}>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextValidator id='outline-basic'
                                           placeholder='Admin Id'
                                           label='Admin id'
                                           variant='outlined'
                                           size='small'
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

                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextValidator id='outline-basic'
                                           placeholder='Password'
                                           label='Password'
                                           variant='outlined'
                                           size='small'
                                           value={this.state.formData.numberOfPassengers}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.numberOfPassengers = e.target.value
                                               this.setState({formData})
                                           }}
                                           style={{width: '100%'}}
                                           validators={['required',]}

                            />

                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic"
                                       placeHolder="Username"
                                       label="Username"
                                       variant="outlined"
                                       size="small"
                                       value={this.state.formData.color}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.color = e.target.value
                                           this.setState({formData})
                                       }}
                                       style={{width: '100%'}}
                                       validators={['required',]}

                            />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic"
                                       placeHolder="Name"
                                       label="Name"
                                       variant="outlined"
                                       size="small"
                                       value={this.state.formData.registrationNumber}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.registrationNumber = e.target.value
                                           this.setState({formData})
                                       }}
                                       style={{width: '100%'}}
                                       validators={['required',]}
                            />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic"
                                       placeHolder="Email"
                                       label="Email"
                                       variant="outlined"
                                       size="small"
                                       value={this.state.formData.brand}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.brand = e.target.value
                                           this.setState({formData})
                                       }}
                                       style={{width: '100%'}}
                                       validators={['required',]}
                            />
                        </Grid>


                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic"
                                       placeHolder="Contact"
                                       label="Contact"
                                       variant="outlined"
                                       size="small"
                                       value={this.state.formData.status}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.status = e.target.value
                                           this.setState({formData})
                                       }}
                                       style={{width: '100%'}}
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
                <Grid container style={{height: 400, width: '100%', marginTop: '40px'}}>
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
                        this.setState({open: false})
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

export default withStyles(styleSheet)(Admin);