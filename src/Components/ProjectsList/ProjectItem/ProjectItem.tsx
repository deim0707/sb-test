import React from "react";
import {ProjectItemType} from '../../../Store/types';
import Progress from "../Progress/Progress";
import Button from "react-bootstrap/Button";
import style from './ProjectItem.module.scss'

interface Props {
    project: ProjectItemType
}

const ProjectItem: React.FC<Props> = ({project}) => {


    const title = project.title;
    const description = project.description;
    const progress = project.progress;


    return (
        <section className={style.projectItem}>
            <Progress progress={progress}/>


            <div className={style.description}>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <Button variant="dark">Подробности</Button>
            </div>
        </section>
    )
}

export default ProjectItem;
