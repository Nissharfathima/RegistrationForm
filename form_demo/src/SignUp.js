import React, { Component } from 'react';
import {FormGroup,Button} from 'react-bootstrap';
import './SignUp.scss';
const intialState = {email: "",
    emailError: false,
    isValid:true} ;
class SignUp extends Component{
    
    

    constructor(props){
        super(props);
        this.state={
            email: "",
            emailError: false,
            isValid:true,
        };
    }
    render(){
        const handleEmailInput =(event)=>{
            this.setState({email:event.target.value})

            if(!this.state.email.includes('@'))
            {
                this.setState({emailError:true,})
                
            }
            else{
                this.setState(intialState)
            }
        
        }
        return(<React.Fragment>
            <div className='container'>
                <div className='childcontainer'>
                    <div className='title'>Anmelden
                   <FormGroup>
                        <input className='textbox email' type="text" placeholder="E-mail" onChange={handleEmailInput}></input>
                        <input className='textbox password' type="text"  placeholder="Passwort"/><br/>
                        <Button type="button" class="btn btn-default">Sign In</Button>
                    </FormGroup>  
                    </div>
                    </div>
                 </div>
        </React.Fragment>);
    }
}

export default SignUp;