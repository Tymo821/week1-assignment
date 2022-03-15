import React from "react";
import SubmitButton from "./submit-button";

export default class Login extends React.Component{
    render() {
        return (
        <div className="form-group">
            <input type="username" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" placeholder="Username"></input>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            <h3>User Login</h3>
            <SubmitButton />
        </div>
        
        )
    }
}