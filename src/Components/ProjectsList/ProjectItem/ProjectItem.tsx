import React from "react";
import {Link} from "react-router-dom";
import {ProjectItemType} from '../../../Store/types';
import Progress from "../Progress/Progress";
import Button from "react-bootstrap/Button";
import style from './ProjectItem.module.scss'

interface Props {
    project: ProjectItemType
}

const ProjectItem: React.FC<Props> = ({project}) => {

    return (
        <section className={style.projectItem}>
            <Progress progress={project.progress}/>


            <div className={style.description}>
                <div>
                    <h3><Link to={`/projects/${project.id}`}>{project.title}</Link></h3>

                    <p>{project.description}</p>
                </div>
                <Button variant="dark">
                    <Link to={`/projects/${project.id}`}>Подробности</Link>
                </Button>
            </div>
        </section>
    )
}

export default ProjectItem;
