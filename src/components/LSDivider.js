import React from "react";
import LSStyles from "./LSDivider.module.css";

const LSDivider = (props) => {
    return (
        <div className={LSStyles.container}>
            <div className={LSStyles.section}>
                <h3 className={LSStyles.text}>{props.text}</h3>
            </div>
        </div>
    )
}

export default LSDivider;