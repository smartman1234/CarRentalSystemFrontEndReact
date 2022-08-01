import React, {Component, Fragment} from "react";
import Grid from "@mui/material/Grid";

class ImageChanger extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(

            <Fragment>

                <Grid  id="carForm_container">
                    <div className="wrapper">
                        <div className="image">
                            <img src="" alt=""/>
                        </div>
                        <Grid className={"content"}>
                            <div className="icon"><i className="fa-solid fa-cloud-arrow-up"></i></div>
                            <div className="text">No file chosen, yet!</div>
                            <div id="cancel-btn"><i class="fa-solid fa-xmark"></i></div>
                           <div className={'file-name'}>FileName Here</div>
                        </Grid>

                    </div>
                    <input id="default-btn" type="file" hidden/>
                    <button onClick="defaultBtnActive()" id="custom-btn">Choose a file</button>
                </Grid>

            </Fragment>
        )
    }

}

export default ImageChanger