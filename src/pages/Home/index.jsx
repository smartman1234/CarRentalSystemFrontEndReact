import React, { Component } from "react";
import GDSEButton from "../../components/common/button";
class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>Hello</h1>
                <GDSEButton
                 variant="contained"
                 label="Back to home page"
                />
                <h1>Haai</h1>
            
            </div>
        )
    }
}

export default Home;