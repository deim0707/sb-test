import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {ProjectItemType, factAboutWork} from "../../../Store/types";
import {deleteFactAboutWork} from "../../../Store/actions";
import {findItemInState} from "../../../helpers";
import Table from "react-bootstrap/Table";
import trash from '../../../img/trash.svg'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from "./FactsAboutWorks.module.scss";


interface Props {
    id: number
}

const FactsAboutWorks: React.FC<Props> = ({id}) => {

    const dispatch = useDispatch()
    const state = useSelector((state: ProjectItemType[]) => state);
    const currentIdx = findItemInState(state, id);
    const currentProject = state[currentIdx].factsAboutWork;

    const returnDateString = (dateNumber: number): string => {
        const date = new Date(dateNumber)
        const year = date.getFullYear()
        const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

        return `${day}.${month}.${year}`
    }

    const returnNameStatus = (status: string): string => {
        if (status === 'planning') return 'Планирование'
        if (status === 'design') return 'Проектирование'
        if (status === 'implementation') return 'Реализация'
        if (status === 'balance') return 'Постановка на баланс'
        if (status === 'closed') return 'Закрыт'
        else return ''
    }

    return (

        <Row>
            <Col>
                <div className={style.facts}>
                    <Table striped bordered>
                        <thead>
                        <tr>
                            <td>№</td>
                            <td>Заголовок</td>
                            <td>Колличество</td>
                            <td>Цена</td>
                            <td>Дедлайн</td>
                            <td>Статус</td>
                            <td/>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            currentProject.map((item: factAboutWork, idx: number): JSX.Element => {
                                return (
                                    <tr key={`pr${id}fact${idx}`}>
                                        <td>{idx + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.qt}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            {returnDateString(item.date)}
                                        </td>
                                        <td>{returnNameStatus(item.status)}</td>
                                        <td>
                                            <img
                                                src={trash}
                                                alt="delete item"
                                                className={style.delete}
                                                onClick={() => dispatch(deleteFactAboutWork(id, idx))}
                                            />
                                        </td>
                                    </tr>

                                )
                            })
                        }
                        </tbody>
                    </Table>
                </div>
            </Col>
        </Row>

    )
}

export default FactsAboutWorks;
