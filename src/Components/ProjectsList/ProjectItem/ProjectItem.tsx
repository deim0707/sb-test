import React from "react";
import {Link} from "react-router-dom";
import {ProjectItemType} from '../../../Store/types';
import Progress from "../Progress/Progress";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from './ProjectItem.module.scss'

interface Props {
    project: ProjectItemType
}

const ProjectItem: React.FC<Props> = ({project}) => {

    return (
        <section className={style.projectItem}>
            <Row>
                <Col lg={12} sm={12}>
                    <Progress progress={project.progress}/>
                </Col>
            </Row>

            <Row className={style.description}>
                <Col lg={9} md={9} sm={12} className={style.titleDescriptionWrapper}>
                    <div>
                        <h3><Link to={`/projects/${project.id}`}>{project.title}</Link></h3>
                        <p>{project.description}</p>
                    </div>
                </Col>
                <Col lg={3} md={3} sm={12} className={style.buttonWrapper}>
                    <Link to={`/projects/${project.id}`} className={'btn btn-outline-dark'}>Подробности</Link>
                </Col>

            </Row>
        </section>
    )
}

export default ProjectItem;
