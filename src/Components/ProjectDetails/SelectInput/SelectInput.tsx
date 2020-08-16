import React from "react";
import style from './SelectInput.module.scss'
import {useDispatch} from "react-redux";
import {changeProgressStatus} from "../../../Store/actions";

interface Props {
    valueProgress: string,
    id: number
}

const SelectInput: React.FC<Props> = ({valueProgress, id}) => {

    const dispatch = useDispatch();

    return (
        <select
            className={style.selectInput}
            defaultValue={valueProgress}
            onChange={(e) => dispatch(changeProgressStatus(id, e.target.value))}
        >
            <option value="planning"> Планирование</option>
            <option value="design"> Проектирование</option>
            <option value="implementation"> Реализация</option>
            <option value="balance"> Постановка баланс</option>
            <option value="closed"> Закрыт</option>
        </select>
    )
}

export default SelectInput;