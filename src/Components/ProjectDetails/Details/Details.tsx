import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changePriceAction} from "../../../Store/actions";
import {useParams} from 'react-router-dom';
import {ProjectItemType} from "../../../Store/types";
import SelectInput from "../SelectInput/SelectInput";
import QuantityInput from "../QuantityInput/QuantityInput";
import FactsAboutWorks from "../FactsAboutWorks/FactsAboutWorks";
import Form from 'react-bootstrap/Form'
import {findItemInState} from "../../../helpers";
import style from './Details.module.scss';
import HeaderDetails from "../HeaderDetails/HeaderDetails";


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
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>

            <div className={style.details}>

                <FactsAboutWorks facts={project.factsAboutWork} id={project.id}/>

                <div className={style.inputs}>
                    <SelectInput valueProgress={project.progress} id={project.id}/>
                    <QuantityInput quantity={project.quantity} id={project.id}/>
                    <div className={style.priceInput}>
                        <Form.Label htmlFor="inputPrice" className="my-1 mr-2">
                            Цена:
                        </Form.Label>
                        <Form.Control
                            placeholder='Введите цену'
                            type='number'
                            id="inputPrice"
                            value={project.price}
                            onChange={(e) => dispatch(changePriceAction(project.id, Number(e.target.value)))}
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Details;
