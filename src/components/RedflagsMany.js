import React from "react";
import RedflagCard from "./RedflagCard";
import styles from "../styles/redflag.css";

const RedFlagList = (props) => {

    const results = props.data;
    let redflags = results.map(redflag => 
            <RedflagCard
            title = {redflag.title}
            status = {redflag.status}
            createdBy = {redflag.createdBy}
            comment = {redflag.comment}
            key = {redflag.id}
            />
        );

    return (
        <ul className="card-list">
            {redflags}
        </ul>
    );

}

export default RedFlagList;