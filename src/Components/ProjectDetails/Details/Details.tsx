import React from "react";
import {useParams} from 'react-router-dom';
import HeaderDetails from "../HeaderDetails/HeaderDetails";
import FactsAboutWorks from "../FactsAboutWorks/FactsAboutWorks";
import FormDetailsProject from "../FormDetailsProject/FormDetailsProject";
import TitleProjectDetails from "../TitleProjectDetails/TitleProjectDetails";
import style from './Details.module.scss';


const Details: React.FC = () => {

    const {id} = useParams();

    return (
        <div className={style.detailsWrapper}>

            <HeaderDetails id={Number(id)}/>

            <TitleProjectDetails id={Number(id)}/>

            <FormDetailsProject id={id}/>

            <FactsAboutWorks id={Number(id)}/>

        </div>
    );
}

export default Details;
