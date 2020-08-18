import React from "react";
import {useSelector} from "react-redux";
import {useParams} from 'react-router-dom';
import {ProjectItemType} from "../../../Store/types";
import {findItemInState} from "../../../helpers";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import SelectInput from "../SelectInput/SelectInput";
import HeaderDetails from "../HeaderDetails/HeaderDetails";
import FactsAboutWorks from "../FactsAboutWorks/FactsAboutWorks";
import FormDetailsProject from "../FormDetailsProject/FormDetailsProject";
import style from './Details.module.scss';


const Details: React.FC = () => {
    const {id} = useParams();

    const project: ProjectItemType = useSelector((state: ProjectItemType[]) => {
        const idxItemInState = findItemInState(state, Number(id));
        return state[idxItemInState];
    })

    return (
        <div className={style.detailsWrapper}>

            <HeaderDetails id={Number(id)}/>

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
    );
}

export default Details;
