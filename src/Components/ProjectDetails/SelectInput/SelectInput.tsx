import React from "react";
import {useDispatch} from "react-redux";
import {changeProgressStatus} from "../../../Store/actions";
import Form from 'react-bootstrap/Form'
import style from './SelectInput.module.scss'

interface Props {
    valueProgress: string,
    id: number,
    label: string
}

const SelectInput: React.FC<Props> = ({valueProgress, id,label}) => {

    const dispatch = useDispatch();

    return (
        <Form inline className={`${style.selectInput}`}>
            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                {label}
            </Form.Label>
            <Form.Control
                as="select"
                className={`my-1 mr-sm-2`}
                id="inlineFormCustomSelectPref"
                defaultValue={valueProgress}
                onChange={(e) => dispatch(changeProgressStatus(id, e.target.value))}
                custom
            >
                <option value="planning"> Планирование</option>
                <option value="design"> Проектирование</option>
                <option value="implementation"> Реализация</option>
                <option value="balance"> Постановка баланс</option>
                <option value="closed"> Закрыт</option>
            </Form.Control>
        </Form>

    )
}

export default SelectInput;
