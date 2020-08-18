import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeProgressStatus} from "../../../Store/actions";
import {ProjectItemType} from "../../../Store/types";
import {findItemInState} from "../../../helpers";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SelectInput from "../SelectInput/SelectInput";
import style from "./TitleProjectDetails.module.scss";

interface Props {
    id: number
}

const TitleProjectDetails: React.FC<Props> = ({id}) => {

    const dispatch = useDispatch();

    const currentProject: ProjectItemType = useSelector((state: ProjectItemType[]) => {
        const idxItemInState = findItemInState(state, Number(id));
        return state[idxItemInState];
    })

    const changeStatus = (value: string) => {
        dispatch(changeProgressStatus(id, value))
    }


    return (
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
    )
}

export default TitleProjectDetails;