import React from "react";
import {useParams} from 'react-router-dom';
import HeaderDetails from "../HeaderDetails/HeaderDetails";
import FactsAboutWorks from "../FactsAboutWorks/FactsAboutWorks";
import FormDetailsProject from "../FormDetailsProject/FormDetailsProject";
import TitleProjectDetails from "../TitleProjectDetails/TitleProjectDetails";
import {ProjectItemType} from "../../../Store/types";
import {useSelector} from "react-redux";
import {findItemInState} from "../../../helpers";
import style from './Details.module.scss';


const Details: React.FC = () => {

    const {id:idFromUrl} = useParams();

    const id:number = Number(idFromUrl)

    const lengthFactsArrayCurrentProject = useSelector((state: ProjectItemType[]) => {
        const idxItemInState = findItemInState(state, Number(id));
        return state[idxItemInState].factsAboutWork.length;
    })


    return (
        <div className={style.detailsWrapper}>

            <HeaderDetails id={id}/>

            <TitleProjectDetails id={id}/>

            <FormDetailsProject id={idFromUrl}/>

            {lengthFactsArrayCurrentProject > 0 && <FactsAboutWorks id={id}/>}

        </div>
    );
}

export default Details;
