import React from "react";
import SkillStyles from "./Skill.module.css";

const Skill = (props) => {
    const translate = props.translateY;
    const skills = props.skills;
    const skillsList = skills.map(skill => {
        return <p className={SkillStyles.skill}>{skill}</p>
    });
    return (
        <div className={SkillStyles.container}>
            <div className={SkillStyles.skillTitle}>
                <h4 className={SkillStyles.title}>{props.section}</h4>
            </div>
            <div className={SkillStyles.skillSection}>
                {skillsList}
            </div>
        </div>
    )
}

export default Skill;