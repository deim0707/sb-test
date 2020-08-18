import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useParams} from 'react-router-dom';
import {ProjectItemType} from "../../../Store/types";
import {findItemInState} from "../../../helpers";
import SelectInput from "../SelectInput/SelectInput";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import FactsAboutWorks from "../FactsAboutWorks/FactsAboutWorks";
import FormDetailsProject from "../FormDetailsProject/FormDetailsProject";
import style from './Details.module.scss';


const Details: React.FC = () => {
    const {id} = useParams();

    const project: ProjectItemType = useSelector((state: ProjectItemType[]) => {
        const idxItemInState = findItemInState(state, Number(id));
        return state[idxItemInState];
    })

    // useEffect(() => {
    //     console.log(project)
    // })

    return (
        <div className={style.detailsWrapper}>

            {/*<HeaderDetails id={Number(id)}/>*/}

            <div className={style.name}>
                <Row>
                    <Col><h2>{project.title}</h2></Col>
                    <Col> <SelectInput valueProgress={project.progress} id={project.id}
                                       label={'Статус проекта:'}/></Col>
                </Row>
                <p>{project.description}</p>
            </div>

            <FormDetailsProject id={id}/>

            <Row>
                <Col>
                    <FactsAboutWorks id={id}/>
                </Col>
            </Row>

        </div>
    )
}

export default Details;
