import React from "react";
import ProjectStyles from "./Project.module.css";

const Project = (props) => {
    const margin = props.margin;
    const skills = props.skills;
    const github = props.github;
    const tags = skills.map(skill => {
        return <span className={ProjectStyles.tag} style={{ marginRight: `${margin}px` }}>{skill}</span>;
    });
    return (
        <div className={ProjectStyles.container}>
            <a style={{ display: `block`, textDecoration: `none` }} href={github}>
                <h2 className={ProjectStyles.name}>{props.name}</h2>
                <div className={ProjectStyles.tagLimit}>
                    <div className={ProjectStyles.tagContainer}>
                        <div className={ProjectStyles.marquee}>
                            <div className={ProjectStyles.innerM}>
                                {tags}
                            </div>
                            <div className={ProjectStyles.innerM}>
                                {tags}
                            </div>
                        </div>
                    </div>
                </div>
                <p className={ProjectStyles.summary}>{props.summary}</p>
            </a>
        </div >
    )
}

export default Project;