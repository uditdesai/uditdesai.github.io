import React from "react";
import RSStyles from "./RSDivider.module.css";

const RSDivider = (props) => {
    return (
        <div className={RSStyles.container}>
            <div className={RSStyles.section}>
                <h3 className={RSStyles.text}>{props.text}</h3>
            </div>
        </div>
    )
}

export default RSDivider;
