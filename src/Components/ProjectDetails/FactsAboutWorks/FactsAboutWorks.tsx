import React from "react";
import {useSelector} from "react-redux";
import Table from "react-bootstrap/Table";
import {findItemInState} from "../../../helpers";
import style from "./FactsAboutWorks.module.scss";
import {ProjectItemType, factAboutWork} from "../../../Store/types";


interface Props {
    id: number
}

const FactsAboutWorks: React.FC<Props> = ({id}) => {


    const state = useSelector((state: ProjectItemType[]) => state);
    const currentIdx = findItemInState(state, id);
    const currentProject = state[currentIdx].factsAboutWork;


    const returnDateString = (dateNumber: number): string => {
        let date = new Date(dateNumber)
        const year = date.getFullYear()
        let month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        let day = date.getDate();

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
                </tr>
                </thead>
                <tbody>
                {
                    currentProject.map((item: factAboutWork, idx: number): JSX.Element => {
                        return (
                            <tr>
                                <td>{idx + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.qt}</td>
                                <td>{item.price}</td>
                                <td>
                                    {returnDateString(item.date)}
                                </td>
                                <td>{returnNameStatus(item.status)}</td>
                            </tr>

                        )
                    })
                }
                </tbody>
            </Table>
        </div>
    )
}

export default FactsAboutWorks;
