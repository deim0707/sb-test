import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeProgressStatus} from "../../../Store/actions";
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

    const currentProject: ProjectItemType = useSelector((state: ProjectItemType[]) => {
        const idxItemInState = findItemInState(state, Number(id));
        return state[idxItemInState];
    })

    const dispatch = useDispatch();
    //РЕЛИЗОВАТЬ
    //Можно вынести тайтл, статус пректа и дескрипшн в отдельный компонент. а тут их объеденить
    const changeStatus = (value:string) => {
        dispatch(changeProgressStatus(id, value))
    }

    return (
        <div className={style.detailsWrapper}>

            <HeaderDetails id={Number(id)}/>

            <div className={style.name}>
                <Row>
                    <Col><h2>{currentProject.title}</h2></Col>
                    <Col> <SelectInput valueProgress={currentProject.progress}
                                       label={'Статус проекта:'}
                                       onChange={changeStatus}
                    /></Col>
                </Row>
                <p>{currentProject.description}</p>
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
