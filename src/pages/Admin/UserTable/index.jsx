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
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import GDSEButton from "../../../components/common/button";
import GDSESnackBar from "../../../components/common/snackBar";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";

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
    deleteUser=async (uid)=>{
        let params={
            uid:uid
        }
        let res=await UsersService.deleteUser(params);
        if (res.status===200){
            this.setState({
                alert: true,
                message: res.data.message,
                severity: "success"
            })
            this.loadData();
        }else {
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
                uid: data.uid,
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
                uid: '',
                userName: '',
                userEmail: '',
                userAddress: '',
                userContactNo: '',
                userIdentityCardImg: '',
                userDrivingLicenceImg: '',

            }
        });
    }

    submitUser = async () => {
        let formData = this.state.formData;
        if (this.state.btnLabel==="Save"){
            let res = await UsersService.postUser(formData);
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

        }else {
            let res=await UsersService.putUser(formData);
            if (res.status===200){
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: "success",
                    btnLabel:"Save",
                    btnColor:"primary"
                });
                this.clearFields();
                this.loadData();
            }else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: "error"
                });
            }
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


             <Grid container className="pt-2" spacing={3}>
                 <Grid item xs={4} sm={4} md={4} lg={4}>
                     <Card sx={{maxWidth: 1500, maxHeight: 700}}>
                         <CardActionArea>

                             {/*<Typography variant="h5" >Car Manage</Typography>*/}
                             <CardContent>
                                 <ValidatorForm
                                     ref="form"
                                     className="pt-2"
                                     onSubmit={this.submitUser}


                                 >
                                 <TextValidator
                                     id="input-with-icon-textfield"
                                     label="User Id"
                                     placeholder={"U00_001"}
                                     sx={{mb: 3}}
                                     // disabled={'true'}
                                     InputProps={{
                                         startAdornment: (
                                             <InputAdornment position="start">
                                             </InputAdornment>
                                         ),
                                     }}
                                     variant="standard"
                                     value={this.state.formData.uid}
                                     onChange={(e) => {
                                         let formData = this.state.formData
                                         formData.uid = e.target.value
                                         this.setState({formData})
                                     }}
                                     validators={['required','matchRegexp:^(U00_)[0-9]{3,4}$']}

                                     //validators={['required','matchRegexp:^(B00_)[0-9]{3,4}$']}
                                 />
                                 <TextValidator
                                     id="input-with-icon-textfield"
                                     label="UserName"
                                     placeholder={"amal"}
                                     //sx={{mb: 15}}
                                     InputProps={{
                                         startAdornment: (
                                             <InputAdornment position="start">
                                                 {/*<LocationOnIcon/>*/}
                                             </InputAdornment>
                                         ),
                                     }}
                                     variant="standard"

                                     value={this.state.formData.userName}
                                     onChange={(e) => {
                                         let formData = this.state.formData
                                         formData.userName = e.target.value
                                         this.setState({formData})
                                     }}
                                     validators={['required', 'matchRegexp:^[a-zA-Z ]+$']}

                                 />


                                 <TextValidator
                                     id="input-with-icon-textfield"
                                     label="userEmail"
                                     //type={"date"}
                                     placeholder={"amal@gmail.com"}
                                     InputProps={{
                                         startAdornment: (
                                             <InputAdornment position="start">
                                                 {/*<TodayIcon/>*/}
                                             </InputAdornment>
                                         ),
                                     }}
                                     variant="standard"
                                     value={this.state.formData.userEmail}
                                     onChange={(e) => {
                                         let formData = this.state.formData
                                         formData.userEmail = e.target.value
                                         this.setState({formData})
                                     }}
                                     validators={['required', 'isEmail']}

                                 />
                                 <TextValidator
                                     id="input-with-icon-textfield"
                                     label="User Address"
                                     placeholder={"D00_001"}
                                     // type={"time"}
                                     InputProps={{
                                         startAdornment: (
                                             <InputAdornment position="start">
                                                 {/*<AccessTimeIcon/>*/}
                                             </InputAdornment>
                                         ),
                                     }}
                                     variant="standard"
                                     value={this.state.formData.userAddress}
                                     onChange={(e) => {
                                         let formData = this.state.formData
                                         formData.userAddress = e.target.value
                                         this.setState({formData})
                                     }}
                                     validators={['required', 'isString']}

                                 />
                                 <TextValidator
                                     id="input-with-icon-textfield"
                                     label="User ContactNo"
                                     placeholder={"0778787890"}
                                     // type={"time"}
                                     InputProps={{
                                         startAdornment: (
                                             <InputAdornment position="start">
                                                 {/*<AccessTimeIcon/>*/}
                                             </InputAdornment>
                                         ),
                                     }}
                                     variant="standard"
                                     value={this.state.formData.userContactNo}
                                     onChange={(e) => {
                                         let formData = this.state.formData
                                         formData.userContactNo = e.target.value
                                         this.setState({formData})
                                     }}
                                     validators={['required', 'isPositive']}

                                 />
                                 <TextValidator
                                     id="input-with-icon-textfield"
                                     label="DropOff"
                                     placeholder={"idImage"}
                                     InputProps={{
                                         startAdornment: (
                                             <InputAdornment position="start">
                                                 {/*<AccessTimeIcon/>*/}
                                             </InputAdornment>
                                         ),
                                     }}
                                     variant="standard"
                                     value={this.state.formData.userIdentityCardImg}
                                     onChange={(e) => {
                                         let formData = this.state.formData
                                         formData.userIdentityCardImg = e.target.value
                                         this.setState({formData})
                                     }}
                                     validators={['required',]}

                                 />
                                 <TextValidator
                                     id="input-with-icon-textfield"
                                     label="LicenceImg"
                                     placeholder={"Yes"}
                                     InputProps={{
                                         startAdornment: (
                                             <InputAdornment position="start">
                                                 {/*<AccessTimeIcon/>*/}
                                             </InputAdornment>
                                         ),
                                     }}
                                     variant="standard"
                                     value={this.state.formData.userDrivingLicenceImg}
                                     onChange={(e) => {
                                         let formData = this.state.formData
                                         formData.userDrivingLicenceImg = e.target.value
                                         this.setState({formData})
                                     }}
                                     validators={['required',]}

                                 />
                                 </ValidatorForm>
                                 <Grid container style={{marginTop: '10px'}} direction="row" justifyContent="flex-end"
                                       alignItems="center">
                                     <GDSEButton label={this.state.btnLabel} onClick={this.submitUser} size="small"
                                                 color={this.state.btnColor}
                                                 variant="contained"/>
                                 </Grid>
                             </CardContent>
                         </CardActionArea>

                     </Card>

                 </Grid>

                 <Grid  item xs={8} sm={8} md={8} lg={8}>
                     <TableContainer component={Paper}  className={classes.container}>
                         <Table sx={{minWidth: 650}} aria-label="user table">
                             <TableHead className={classes.TableHead}>
                                 <TableRow>
                                     <TableCell align="right">User Id</TableCell>
                                     <TableCell align="right">User Name</TableCell>
                                     <TableCell align="right">User Email</TableCell>
                                     <TableCell align="right">User Address</TableCell>
                                     <TableCell align="right">User Contact No</TableCell>
                                     <TableCell align="right">User Id</TableCell>
                                     <TableCell align="right">User DL</TableCell>
                                     {/*<TableCell align="right">Action</TableCell>*/}
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
                                                         onClick={() => {
                                                             console.log("edit icon clicked!")
                                                             this.updateUser(row);
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
                                                             this.deleteUser(row.uid);
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

export default withStyles(styleSheet)(UserTable)