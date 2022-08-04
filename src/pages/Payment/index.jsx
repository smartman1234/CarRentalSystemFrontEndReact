import PaymentService from "../../services/PaymentService";
import React, {Component, Fragment} from "react";
import Typography from "@mui/material/Typography";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Grid from "@mui/material/Grid";
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
import GDSESnackBar from "../../components/common/snackBar";

import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import logo from "../../assets/img/carLogo.jpg";
import UserPayment from "./UserPayment";

class Payment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                pid: '',
                dropOffDate: '',
                dropOffLastDate: '',
                cid: '',
                uid: '',
                did: '',
                rentPrice: '',
                damagingPrice: '',
                discount: '',
                totalPrice: ''
            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'Save',
            btnColor: "primary"


        }

    }

    deletePayment = async (pid) => {
        let params = {
            pid: pid
        }
        let res = await PaymentService.deletePayment(params);
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

    updatePayment = (data) => {
        console.log(data);
        this.setState({
            btnLabel: "update",
            btnColor: "success",
            formData: {
                pid: data.pid,
                dropOffDate: data.dropOffDate,
                dropOffLastDate: data.dropOffLastDate,
                cid: data.cid,
                uid: data.uid,
                did: data.did,
                rentPrice: data.rentPrice,
                damagingPrice: data.damagingPrice,
                discount: data.discount,
                totalPrice: data.totalPrice

            }
        })
    };

    clearFields = (e) => {
        this.setState({
            formData: {
                pid: '',
                dropOffDate: '',
                dropOffLastDate: '',
                cid: '',
                uid: '',
                did: '',
                rentPrice: '',
                damagingPrice: '',
                discount: '',
                totalPrice: ''

            }
        });
    }

    submitPayment = async () => {
        let formData = this.state.formData;
        if (this.state.btnLabel === "Save") {
            let res = await PaymentService.postPayment(formData);
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
            let res = await PaymentService.putPayment(formData);
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
        let res = await PaymentService.fetchPayment();
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


                <Grid container className="pt-7" spacing={2}>

                    <Grid item xs={11} sm={11} md={11} lg={11}>
                        <Typography variant="h2" className={classes.columnHeaderTitleContainer} sx={{mb: 5}}>
                           Payment Manage
                        </Typography>
                    </Grid>

                    <Grid item xs={1} sm={1} md={1} lg={1}>
                        <Stack direction="row" spacing={2}>
                            <Avatar
                                alt="Remy Sharp"
                                src={logo} alt=""
                                sx={{width: 100, height: 100}}
                            />
                        </Stack>

                    </Grid>
                    <UserPayment/>

                </Grid>

                <ValidatorForm
                    ref="form"
                    className="pt-2"
                    onSubmit={this.submitPayment}

                >
                    <Grid container className="pt-2" spacing={3}>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">Payment Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="P00_001"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.pid}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.pid = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required','matchRegexp:^(P00_)[0-9]{3,4}$']}

                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">Drop Off Date</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="2022-07-27"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.dropOffDate}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.dropOffDate = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required','isString']}

                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">Drop Off Last Date</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="2022-07-27"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.dropOffLastDate}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.dropOffLastDate = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required','isString']}

                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">Car Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="C00_001"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.cid}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.cid = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required','matchRegexp:^(C00_)[0-9]{3,4}$']}

                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">User Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="U00_001"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.uid}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.uid = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required','matchRegexp:^(U00_)[0-9]{3,4}$']}

                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">Driver Id</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="D00_001"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.did}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.did = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required','matchRegexp:^(D00_)[0-9]{3,4}$']}

                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">Rent Price</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="20000"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.rentPrice}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.rentPrice = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required','isPositive']}

                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">Damaging Price</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="25000"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.damagingPrice}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.damagingPrice = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required','isPositive']}

                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">Discount</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="1000"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.discount}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.discount = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required','isPositive']}

                            />
                        </Grid>


                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body2">Total Price</Typography>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="12000"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.totalPrice}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.totalPrice = e.target.value
                                    this.setState({formData})
                                }}
                                style={{width: '100%'}}
                                validators={['required','isPositive']}

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
                    <TableContainer component={Paper} className={classes.container}>
                        <Table sx={{minWidth: 650}} aria-label="user table">
                            <TableHead className={classes.TableHead}>
                                <TableRow>
                                    <TableCell align="right">Payment Id</TableCell>
                                    <TableCell align="right">Drop Off Date</TableCell>
                                    <TableCell align="right">Drop Off Last Date</TableCell>
                                    <TableCell align="right">Car Id</TableCell>
                                    <TableCell align="right">User Id</TableCell>
                                    <TableCell align="right">Driver Id</TableCell>
                                    <TableCell align="right">Rent Price</TableCell>
                                    <TableCell align="right">Damaging Price</TableCell>
                                    <TableCell align="right">Discount</TableCell>
                                    <TableCell align="right">Total Price</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="right">{row.pid}</TableCell>
                                            <TableCell align="right">{row.dropOffDate}</TableCell>
                                            <TableCell align="right">{row.dropOffLastDate}</TableCell>
                                            <TableCell align="right">{row.cid}</TableCell>
                                            <TableCell align="right">{row.uid}</TableCell>
                                            <TableCell align="right">{row.did}</TableCell>
                                            <TableCell align="right">{row.rentPrice}</TableCell>
                                            <TableCell align="right">{row.damagingPrice}</TableCell>
                                            <TableCell align="right">{row.discount}</TableCell>
                                            <TableCell align="right">{row.totalPrice}</TableCell>
                                            <TableCell align="right">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            this.updatePayment(row);
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
                                                            this.deletePayment(row.pid);
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

                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({alert: false})
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

export default  withStyles(styleSheet) (Payment)