import React from "react";
import Form from 'react-bootstrap/Form'
import style from './SelectInput.module.scss'

interface Props {
    label: string
    id?: number,
    valueProgress?: string,
    onChange?: any
}

const SelectInput: React.FC<Props> = ({valueProgress, id, label, onChange}) => {

    return (
        <Form inline className={`${style.selectInput}`}>
            <Form.Label className="my-1 mr-2" htmlFor={`${label}-inlineFormCustomSelectPref`}>
                {label}
            </Form.Label>
            <Form.Control
                as="select"
                className={`my-1 mr-sm-2`}
                id={`${label}-inlineFormCustomSelectPref`}
                defaultValue={valueProgress}
                onChange={(e) => onChange(e.target.value)}
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
