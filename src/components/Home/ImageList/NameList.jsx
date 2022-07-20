import React, {useEffect, useState} from "react";
import List from "./List";

function NameList() {
    const [loadData,setLoadData]=useState(new Date())
    const [NameList, SetNameList] = useState([
        {
            id: 1,
            name: {title: "Miss", first: "Jennie", last: "Nichols",},
            location: {city: "Billings",},
            email: "jennie.nichols@example.com",
            dob: {date: "1992-03-08T15:13:16.688Z", age: 30,},
            picture: {medium: "https://randomuser.me/api/portraits/med/women/71.jpg",},
        },

        {
            id: 2,
            name: {title: "Miss", first: "Jennie", last: "Nichols",},
            location: {city: "Billings",},
            email: "jennie.nichols@example.com",
            dob: {date: "1992-03-08T15:13:16.688Z", age: 30,},
            picture: {medium: "https://randomuser.me/api/portraits/med/women/78.jpg",},
        },
        {
            id: 3,
            name: {title: "Miss", first: "Jennie", last: "Nichols",},
            location: {city: "Billings",},
            email: "jennie.nichols@example.com",
            dob: {date: "1992-03-08T15:13:16.688Z", age: 30,},
            picture: {medium: "https://randomuser.me/api/portraits/med/women/70.jpg",},
        },

    ])
    useEffect(()=>{
        fetch("https://randomuser.me/api").then((response)=>{
            return response.json();
        }).then(responseData=>{
            // console.log(responseData.results[0])
            SetNameList((NameList)=>[...NameList,responseData.results[0]])
        })
    },[loadData]);

    const name_list_component = () => {
        return NameList.map((aName) => {
            return (
                <List
                    key={aName.id}
                    name={`${aName.name.first} ${aName.name.last}`}
                    city={aName.location.city}
                    email={aName.email}
                    birthday={aName.dob.date}
                    avatar={aName.picture.medium}
                />
            );
        })

    }

    const addUserHandler = () => {
        setLoadData(new Date());
    };


    return (
        <React.Fragment>
            <div className={"container mt-4"}>
                <ul className={"list-group"}>
                    {name_list_component()}
                </ul>
            </div>

        </React.Fragment>
    );
}

export default NameList;
