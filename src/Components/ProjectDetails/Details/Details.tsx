import React from "react";
import {useSelector} from "react-redux";
import {ProjectItemType} from "../../../Store/types";
import style from './Details.module.scss';
import SelectInput from "../SelectInput/SelectInput";
import QuantityInput from "../QuantityInput/QuantityInput";

interface Props {
    id: number
}

const Details: React.FC = () => {

    const project = useSelector((state: ProjectItemType[]) => state[0])


    return (
        <div className={style.detailsWrapper}>
            <div className={style.name}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>

            <div className={style.details}>

                <div className={style.works}>
                    <input type="text"/>
                    {project.factsAboutWork}
                </div>

                <div className={style.inputs}>
                    <SelectInput valueProgress={project.progress}/>
                    <QuantityInput quantity={project.quantity}/>
                    <input
                        type='number'
                        value={project.price}
                        placeholder='Введите цену'
                        // onChange={onChange} //меняем значение в редаксе
                    />
                </div>

            </div>
        </div>
    )
}

export default Details;