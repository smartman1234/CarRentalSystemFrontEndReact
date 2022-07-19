import React, { Component } from "react";
import GDSEButton from "../../components/common/button";
import NavBar from "../../components/Home/grid";
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
         <NavBar />
        <h1>Hello</h1>
        <GDSEButton variant="contained" label="Back to home page" />
        <h1>Haai</h1>
       
      </div>
    );
  }
}

export default Home;
