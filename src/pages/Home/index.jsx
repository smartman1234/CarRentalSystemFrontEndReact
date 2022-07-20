import React, {Component} from "react";
import AppBar from "../../components/common/NavBar";
import GDSEButton from "../../components/common/button";
import {Link} from "react-router-dom";
import CarList from "../../components/Home/CarList";


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AppBar/>
                <Link to="/user">
                    <GDSEButton
                        variant="contained"
                        label="Book Car"
                    />
                </Link>
            </div>
        );
    }
}

export default Home

