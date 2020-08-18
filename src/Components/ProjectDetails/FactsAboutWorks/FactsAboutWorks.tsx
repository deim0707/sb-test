import React, { FC } from "react";
import { useSelector } from "react-redux";
import { ProjectItemType, factAboutWork } from "../../../Store/types";
import { findItemInState } from "../../../helpers";
import Table from "react-bootstrap/Table";
import trash from '../../../img/trash.svg'
import s from "./FactsAboutWorks.module.scss";


interface Props {
  id: number
}

const FactsAboutWorks: FC<Props> = ({
  id
}) => {
  const state = useSelector((state: ProjectItemType[]) => state);
  const currentIdx = findItemInState(state, id);
  const { factsAboutWork: currentProject } = state[currentIdx];

  // Можно вынести в хелперы
  const returnDateString = (dateNumber: number): string => {
    const date = new Date(dateNumber)
    const year = date.getFullYear()
    // Определись, string или number
    const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
    const day = date.getMonth() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;

    return `${day}.${month}.${year}`
  }

  const returnNameStatus = (status: string): string => {
    switch (status) {
      case 'planning':
        return 'Планирование'
      case 'design':
        return 'Проектирование'
      case 'implementation':
        return 'Реализация'
      case 'balance':
        return 'Постановка на баланс'
      case 'balance':
        return 'closed'
      default:
        return ''
    }
  }

  return (
    <div className={s.facts}>
      <Table striped bordered>
        <thead>
          <tr>
            <td>№</td>
            <td>Заголовок</td>
            <td>Колличество</td>
            <td>Цена</td>
            <td>Дедлайн</td>
            <td>Статус</td>
            <td />
          </tr>
        </thead>
        <tbody>
          {
            currentProject.map((item: factAboutWork, idx: number): JSX.Element =>
              (
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
                      src={trash} alt="delete item" className={s.delete}
                      onClick={() => console.log(`удалить айтем с айди: ${id} и факт с айди ${idx}`)} />
                  </td>
                </tr>
              )
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default FactsAboutWorks;
