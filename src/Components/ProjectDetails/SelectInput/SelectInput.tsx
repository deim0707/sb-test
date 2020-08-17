import React from "react";
import style from './SelectInput.module.scss'
import {useDispatch} from "react-redux";
import {changeProgressStatus} from "../../../Store/actions";
import Form from 'react-bootstrap/Form'

interface Props {
    valueProgress: string,
    id: number
}

const SelectInput: React.FC<Props> = ({valueProgress, id}) => {

    const dispatch = useDispatch();

    return (
        <Form inline>
            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                Статус:
            </Form.Label>
            <Form.Control
                as="select"
                className={`my-1 mr-sm-2 ${style.selectInput}`}
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
