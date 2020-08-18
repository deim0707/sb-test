import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import {useSelector} from "react-redux";
import {ProjectItemType} from "../../../Store/types";


const Projects: React.FC = () => {

    const projects: ProjectItemType[] = useSelector((state: ProjectItemType[]) => state)

    return (
        <section>
            {projects.map((project: ProjectItemType): JSX.Element => <ProjectItem key={project.id} project={project}/>)}
        </section>
    )
}

export default Projects;
