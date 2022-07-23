// import * as React from 'react';
// import {Component, Fragment} from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import {Button, CardActionArea, CardActions} from '@mui/material';
// import {Link} from "react-router-dom";
// import not_found from "../../../assets/img/not_found.jpg";
// import {withStyles} from "@mui/styles";
//
//
// const styleSheet = () => ({
//     container: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     img__container: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         maxWidth: '10px'
//     }
// })
//
//
// class MultiActionAreaCard extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         let {classes} = this.props
//         return (
//             <Fragment>
//
//                 <Card sx={{maxWidth: 345}}>
//                     <CardActionArea className={classes.container}>
//                         <div className={classes.img__container}>
//                             <img src={not_found} alt=""/>
//                         </div>
//                         <CardContent>
//                             <Typography gutterBottom variant="h5" component="div">
//                                 Lizard
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 Lizards are a widespread group of squamate reptiles, with over 6,000
//                                 species, ranging across all continents except Antarctica
//                             </Typography>
//                         </CardContent>
//                     </CardActionArea>
//                     <CardActions>
//                         <Link to={"/user"}>
//                             <Button size="small" color="primary">
//                                 Booking
//                             </Button>
//                         </Link>
//
//                     </CardActions>
//                 </Card>
//
//                 <Card sx={{maxWidth: 345}}>
//                     <CardActionArea className={classes.container}>
//                         <div className={classes.img__container}>
//                             <img src={not_found} alt=""/>
//                         </div>
//                         <CardContent>
//                             <Typography gutterBottom variant="h5" component="div">
//                                 Lizard
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 Lizards are a widespread group of squamate reptiles, with over 6,000
//                                 species, ranging across all continents except Antarctica
//                             </Typography>
//                         </CardContent>
//                     </CardActionArea>
//                     <CardActions>
//                         <Link to={"/user"}>
//                             <Button size="small" color="primary">
//                                 Booking
//                             </Button>
//                         </Link>
//
//                     </CardActions>
//                 </Card>
//             </Fragment>
//
//         )
//     }
//
// }
//
//
// export default withStyles(styleSheet)(MultiActionAreaCard)
