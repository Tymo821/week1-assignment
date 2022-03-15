import React from "react";
import Login from "./login";
import Navbar from "./navbar";

export default class LoginPage extends React.Component{
    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                <br></br>
                <Login />
            </div>
        );
    }
}