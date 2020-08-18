import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addFactAboutWork, deleteFactAboutWork} from "../../../Store/actions";
import ListGroup from "react-bootstrap/ListGroup";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import trash from
import {findItemInState} from "../../../helpers";
import style from "./FactsAboutWorks.module.scss";
import {ProjectItemType} from "../../../Store/types";


interface Props {
    id: number
}

const FactsAboutWorks: React.FC<Props> = ({id}) => {


    const facts = useSelector((state: ProjectItemType[]) => state[0].factsAboutWork)

    return (
        <div className={style.facts}>

            {/*<ListGroup className={style.facts}>*/}
            {/*    {*/}
            {/*        facts.map((item: string, idx: number): JSX.Element => {*/}
            {/*            return (*/}
            {/*                <ListGroup.Item key={`idProj:${id}idFact:${idx}`} className={style.listGroupItem}>*/}
            {/*                    <span>{item}</span>*/}
            {/*                    <img*/}
            {/*                        src={trash}*/}
            {/*                        alt="trash"*/}
            {/*                        onClick={() => {*/}
            {/*                            console.log(`удалить айтем: ${idx}`)*/}
            {/*                            dispatch(deleteFactAboutWork(id,idx))*/}
            {/*                        }}*/}
            {/*                    />*/}
            {/*                </ListGroup.Item>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</ListGroup>*/}


        </div>
    )
}

export default FactsAboutWorks;
