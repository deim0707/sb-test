import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useParams} from 'react-router-dom';
import {ProjectItemType} from "../../../Store/types";
import {findItemInState} from "../../../helpers";
import HeaderDetails from "../HeaderDetails/HeaderDetails";
import SelectInput from "../SelectInput/SelectInput";
import Input from "../Input/Input";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import style from './Details.module.scss';


const Details: React.FC = () => {
    const {id} = useParams();

    const project: ProjectItemType = useSelector((state: ProjectItemType[]) => {
        const idxItemInState = findItemInState(state, Number(id));
        return state[idxItemInState];
    })

    useEffect(() => {
        console.log(project)
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

            <div className={style.details}>

                <Row>
                    <Col>
                        <Input id={project.id} type={'string'} label={'Факт работы:'}
                               className={style.longLabel}/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Input id={project.id} type={'number'} label={'Колличество:'} value={project.quantity}/>
                    </Col>
                    <Col>
                        {/*changePriceAction*/}
                        <Input id={project.id} type={'number'} label={'Цена:'} value={project.price}
                               placeholder={'Введите цену'}/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Input id={project.id} className={style.longLabel} type={'date'} label={'Крайний срок:'}/>

                    </Col>
                    <Col>
                        <SelectInput valueProgress={project.progress} id={project.id} label={'Статус проекта:'}/>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default Details;
