import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import {useSelector} from "react-redux";
import style from './Projects.module.scss';
import {ProjectItemType} from "../../Store/types";


const Project: React.FC = () => {

    const projects: ProjectItemType[] = useSelector((state: ProjectItemType[]) => state)

    return (
        <div className={style.projects}>
            {projects.map((item: ProjectItemType) => <ProjectItem project={item}/>)}
        </div>
    )
}

export default Project;