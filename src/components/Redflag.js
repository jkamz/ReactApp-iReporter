import React, { Component } from "react";
import RedFlagList from "./RedflagsMany";
import AuthHelper from './Auth';
import Authenticated from "./Authenticated";
import styles from "../styles/redflag.css";

class Redflags extends Component {

    Auth = new AuthHelper();

    state = {
        redflags: []
    }

    componentDidMount() {
        const url = "https://ireporter-drf-api-staging.herokuapp.com/api/redflags/";

        this.Auth.fetch(url, {
            method: 'GET',
        })
        .then(res => {
            this.setState({redflags: res.results})
            
        })

    }


    render() {

        return (
            <div className="main-content">
                <RedFlagList data={this.state.redflags} /> 
            </div>
        );
    }
}

export default Authenticated(Redflags);