import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import {useSelector} from "react-redux";
import {ProjectItemType} from "../../../Store/types";
import style from './Projects.module.scss'


const Projects: React.FC = () => {

    const projects: ProjectItemType[] = useSelector((state: ProjectItemType[]) => state)

    return (
        <div className={style.projects}>
            {projects.map((project: ProjectItemType): JSX.Element => <ProjectItem key={project.id} project={project}/>)}
        </div>
    )
}

export default Projects;
