import React from "react";
import ExpStyles from "./Experience.module.css";

const Experience = (props) => {
    const imgWidth = props.width;
    const top = props.top;
    return (
        <div className={ExpStyles.container}>
            <img src={props.image} className={ExpStyles.image} style={{ width: `${imgWidth}%` }}></img>
            <div className={ExpStyles.textContainer} style={{ top: `${top}%` }}>
                <h2 className={ExpStyles.company}>{props.company}</h2>
                <h5 className={ExpStyles.position}>{props.position}</h5>
                <p className={ExpStyles.summary}>{props.summary}</p>
            </div>
        </div>
    )
}

export default Experience;