import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ProjectItemType} from "../../../Store/types";
import style from './Details.module.scss';
import SelectInput from "../SelectInput/SelectInput";
import QuantityInput from "../QuantityInput/QuantityInput";
import {changePriceAction} from "../../../Store/actions";
import FactsAboutWorks from "../FactsAboutWorks/FactsAboutWorks";

interface Props {
    id: number
}

const Details: React.FC = () => {

    const project: ProjectItemType = useSelector((state: ProjectItemType[]) => state[0])
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log(project)
    // })

    return (
        <div className={style.detailsWrapper}>
            <div className={style.name}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>

            <div className={style.details}>

                <FactsAboutWorks facts={project.factsAboutWork} id={project.id}/>

                <div className={style.inputs}>
                    <SelectInput valueProgress={project.progress} id={project.id}/>
                    <QuantityInput quantity={project.quantity} id={project.id}/>
                    <input
                        type='number'
                        value={project.price}
                        placeholder='Введите цену'
                        onChange={(e) => dispatch(changePriceAction(project.id, Number(e.target.value)))}
                    />
                </div>

            </div>
        </div>
    )
}

export default Details;