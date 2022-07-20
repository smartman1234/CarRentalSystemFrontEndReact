import React from "react";
import moment from "moment";
import './NameListitem.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function List(props) {
    return (
        <li className={"list-group-item shadow-sm p-3 mb-5 bg-body rounded"}>
            <div className={"row align-items-center"}>
                <div className={"col-2"}>
                    <img src={props.avatar} alt={props.name} className={"border border-success rounded-circle shadow-sm"} />
                </div>
                <div className={"col-10"}>
                    <p style={{color: "green"}}>

                    </p>
                    <h3>{props.name}</h3>
                    <p>{props.city} | {props.email}</p>
                    <small>{moment(props.birthday).format('DD-MM-YYYY')}</small>


                </div>
            </div>

        </li>


    );
}

export default List;
