import React, {Component, Fragment} from "react";
import UsersService from "../../services/UsersService";
import DriverService from "../../services/DriverService";
import BookingDetailService from "../../services/BookingDetailService";
import Typography from "@mui/material/Typography";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Grid from "@mui/material/Grid";
class BookingDetails extends Component{
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                bdid: "",
                uid: "",
                cid: "",
                did: "",
                pickUp: "",
                dropOff: "",
                pickUpDate: "",
                dropOffDate: "",
                pickUpTime: "",
                dropOffTime: "",
                rentPrice: "",

            },
            alert: false,
            message: "",
            severity: "",

            data: [],
            loaded: false,

            columns: [
                {
                    field: 'bdid',
                    headerName: 'bdid',
                    width: 70
                },
                {
                    field: 'uid',
                    headerName: 'uid',
                    width: 100
                },
                {
                    field: 'cid',
                    headerName: 'cid',
                    width: 100
                },
                {
                    field: 'did',
                    headerName: 'did',
                    width: 70
                },
                {
                    field: 'pickUp',
                    headerName: 'pickUp',
                    width: 100
                },
                {
                    field: 'dropOff',
                    headerName: 'dropOff',
                    width: 70
                },
                {
                    field: 'pickUpDate',
                    headerName: 'pickUpDate',
                    width: 100
                },
                {
                    field: 'dropOffDate',
                    headerName: 'dropOffDate',
                    width: 100
                },
                {
                    field: 'pickUpTime',
                    headerName: 'pickUpTime',
                    width: 100
                },
                {
                    field: 'dropOffTime',
                    headerName: 'dropOffTime',
                    width: 100
                },
                {
                    field: 'rentPrice',
                    headerName: 'rentPrice',
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
        let response = await BookingDetailService.createPost(formData);
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
                <Typography variant="h2">Booking Details Manage</Typography>
                <ValidatorForm>
                    <Grid container className="pt-2" spacing={3}>
                        <Grid item lg={3} md={3} sm={3} xm={3}>
                            <TextValidator id='outline-basic'
                                           placeholder='Booking Detail Id'
                                           label='Booking Detail Id'
                                           variant='outlined'
                                           size='small'
                                           value={this.state.formData.bdid}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.bdid = e.target.value
                                               this.setState({ formData })
                                           }}
                                           style={{ width: '100%' }}
                                           validators={['required',]}
                            />

                        </Grid>

                        <Grid item lg={3} md={3} sm={3} xm={3}>
                            <TextValidator id='outline-basic'
                                           placeholder='User Id'
                                           label='User id'
                                           variant='outlined'
                                           size='small'
                                           value={this.state.formData.uid}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.uid = e.target.value
                                               this.setState({ formData })
                                           }}
                                           style={{ width: '100%' }}
                                           validators={['required',]}
                            />
                        </Grid>

                            <Grid item lg={3} md={3} sm={3} xm={3}>
                            <TextValidator id='outline-basic'
                                           placeholder='Customer Id'
                                           label='Customer id'
                                           variant='outlined'
                                           size='small'
                                           value={this.state.formData.cid}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.cid = e.target.value
                                               this.setState({ formData })
                                           }}
                                           style={{ width: '100%' }}
                                           validators={['required',]}
                            />


                        </Grid>

                    </Grid>

                </ValidatorForm>
            </Fragment>
        )
    }
}

export default BookingDetails;