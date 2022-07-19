import React, { Component } from "react";
import GDSEButton from "../../components/common/button";
import AppBar from "../../components/common/NavBar";
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppBar/>
        <h1>Hello</h1>
        <GDSEButton variant="contained" label="Back to home page" />
        <h1>Haai</h1>
       
      </div>
    );
  }
}

export default Home;
