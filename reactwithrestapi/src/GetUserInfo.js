import axios from 'axios';
import React, { Component, useState } from 'react';

class GetUserInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            title : "",
            id: "",
            Completed: "",
            userAdded: false,
        };
    }
    

    render(){
        const handleAdd = () => {
            const newUser = { title: this.state.title,id:this.state.id, Completed:this.state.Completed};
            axios.post('https://jsonplaceholder.typicode.com/todos',newUser)
            .then((res) => {
                console.log(res)
                alert("New User Added")
                this.setState({userAdded : true})
            })
        }

        return(
            <div>
                <h1>
                    Enter User data
                </h1>
                Title <input type="text" onChange={(event) => {this.setState({title:event.target.value})}}/>
                ID <input type="text" onChange={(event) => {this.setState({id:event.target.value})}}/>
                Completed <input type="text" onChange={(event) => {this.setState({Completed:event.target.value})}}/>
                <button onClick={handleAdd}>Add</button>
                {this.state.userAdded &&
                <div>
                    <p>{this.state.title}</p>
                    <p>{this.state.id}</p>
                    <p>{this.state.Completed}</p>
                    </div>
                }
            </div>
        );
    }
}

export default GetUserInfo;