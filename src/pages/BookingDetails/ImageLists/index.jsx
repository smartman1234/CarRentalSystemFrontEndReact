import React, {Component, Fragment} from "react";

class ImageLists extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const wrapper = document.querySelector(".wrapper");
        const fileName = document.querySelector(".file-name");
        const cancelBtn = document.querySelector("#cancel-btn");
        const defaultBtn = document.querySelector("#default-btn");
        const customBtn = document.querySelector("#custom-btn");
        const img =  document.querySelector("img");
        let regExp = /[0-9a-zA-Z\^\&\'@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

        function defaultBtnActive() {
            defaultBtn.click();
        }
        defaultBtn.addEventListener("change", function () {
            const file = this.files[0];
            if (file){
                const reader = new FileReader();
                reader.onload = function () {
                    const result = reader.result;
                    img.src = result;
                    wrapper.classList.add("active");
                }
                cancelBtn.addEventListener("click", function () {
                    img.src = "";
                    wrapper.classList.remove("active");
                })
                reader.readAsDataURL(file);
            }
            if (this.value){
                let valueStore = this.value.match(regExp);
                fileName.textContent = valueStore;
            }
        })

        return (
            <Fragment>
                <div id="carForm_container">
                    <div className="wrapper">
                        <div className="image">
                            <img src="" alt=""/>
                        </div>

                        <div className="content">
                            <div className="icon"><i className="fa-solid fa-cloud-arrow-up"></i></div>
                            <div className="text">No file chosen, yet!</div>
                        </div>

                        <div id="cancel-btn"><i className="fa-solid fa-xmark"></i></div>
                        <div className="file-name">File name here</div>
                    </div>
                </div>

                <div>
                    <input id="default-btn" type="file" hidden/>
                    <button onClick="defaultBtnActive()" id="custom-btn">Choose a file</button>

                </div>

            </Fragment>
    )
    }
    }

    export default ImageLists