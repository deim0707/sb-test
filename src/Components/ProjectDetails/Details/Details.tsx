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

    const {id} = useParams();

    const currentProject: ProjectItemType = useSelector((state: ProjectItemType[]) => {
        const idxItemInState = findItemInState(state, Number(id));
        return state[idxItemInState];
    })

    return (
        <div className={style.detailsWrapper}>

            <HeaderDetails id={Number(id)}/>

            <TitleProjectDetails id={Number(id)}/>

            <FormDetailsProject id={id}/>

            {currentProject.factsAboutWork.length > 0 && <FactsAboutWorks id={Number(id)}/>}

        </div>
    );
}

export default Details;
