import axios from 'axios';
import React, { Component } from 'react';
import {useState,useEffect} from 'react';

function UserDetails(props){
    const [userData,saveUserData] = useState({});
    const [updateData,setUpdateData] = useState(false);
    var userId = props.match.params.id;

    function handleUpdate() {
        const name = {title : "Nisha"}
        axios.put(`https://jsonplaceholder.typicode.com/todos/${userId}`, name)
        .then((res) => {
            console.log(res.data)
            setUpdateData(true)
            saveUserData(res.data)
        });
    }

    useEffect(() => {
           axios.get(`https://jsonplaceholder.typicode.com/todos/${userId}`)
        .then((res) => {
            console.log("data")
            console.log(res.data)
            saveUserData(res.data)
        })
            },[setUpdateData]);
    return(<div>
        <h1>User Details</h1>
        <div>Name : {userData.title}</div>
        <div>Status : {userData.id}</div>
        <button onClick={handleUpdate}>Update</button>
    </div>);
}

export default UserDetails;
