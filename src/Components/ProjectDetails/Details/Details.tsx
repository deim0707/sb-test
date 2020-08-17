import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changePriceAction} from "../../../Store/actions";
import {useParams} from 'react-router-dom';
import {ProjectItemType} from "../../../Store/types";
import SelectInput from "../SelectInput/SelectInput";
import QuantityInput from "../QuantityInput/QuantityInput";
import FactsAboutWorks from "../FactsAboutWorks/FactsAboutWorks";
import {findItemInState} from "../../../helpers";
import HeaderDetails from "../HeaderDetails/HeaderDetails";
import style from './Details.module.scss';
import Input from "../Input/Input";


const Details: React.FC = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

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
                <div>
                    <h2>{project.title}</h2>
                    <SelectInput valueProgress={project.progress} id={project.id} label={'Статус проекта:'}/>
                </div>
                <p>{project.description}</p>
            </div>

            <div className={style.details}>

                <div className={style.inputsFirstLine}>
                    {/*<FactsAboutWorks facts={project.factsAboutWork} id={project.id}/>*/}
                    <Input id={project.id} type={'string'} label={'Факт работы:'}/>
                    <SelectInput valueProgress={project.progress} id={project.id} label={'Статус проекта:'}/>
                </div>

                <div className={style.inputsSecondLine}>
                    <Input id={project.id} type={'number'} label={'Колличество:'} value={project.quantity}/>
                    {/*changePriceAction*/}
                    <Input id={project.id} type={'number'} label={'Цена:'} value={project.price} placeholder={'Введите цену'}/>
                    <Input id={project.id} type={'date'} label={'Крайний срок:'} />


                </div>

            </div>
        </div>
    )
}

export default Details;
