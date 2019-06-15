import React from "react";
import ExpStyles from "./Experience.module.css";

const Experience = (props) => {
    const imgWidth = props.width;
    const top = props.top;
    const textColor = props.color;
    const comp = props.company;
    let expTitle;
    if (comp === `HXOUSE`) {
        expTitle = <div style={{ display: `inline-block` }} className={ExpStyles.HXOUSE}>
            <h2 className={ExpStyles.company}>{props.company}</h2>
        </div>;
    } else if (comp == `TANGERINE`) {
        expTitle = <div style={{ display: `inline-block` }} className={ExpStyles.TANGERINE}>
            <h2 className={ExpStyles.company}>{props.company}</h2>
        </div>;
    } else if (comp === `CIPHER`) {
        expTitle = <div style={{ display: `inline-block` }} className={ExpStyles.CIPHER}>
            <h2 className={ExpStyles.company}>{props.company}</h2>
        </div>;
    }
    return (
        <div className={ExpStyles.container}>
            <img src={props.image} className={ExpStyles.image} style={{ width: `${imgWidth}%` }}></img>
            <div className={ExpStyles.textContainer} style={{ top: `${top}%` }}>
                {expTitle}
                <h5 className={ExpStyles.position}>{props.position}</h5>
                <p className={ExpStyles.summary}>{props.summary}</p>
            </div>
        </div>
    )
}

export default Experience;