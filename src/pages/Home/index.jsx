import React, { Component } from "react";
import AppBar from "../../components/common/NavBar";
import Grid from "@mui/material/Grid";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppBar/>

        <Grid container spacing={2} className={"row"}>

        </Grid>
      </div>
    );
  }
}

export default Home

