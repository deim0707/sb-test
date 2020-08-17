import React from "react";
import Form from "react-bootstrap/Form";
import {useDispatch} from "react-redux";
import style from './Input.module.scss'

interface Props {
    id: number
    type: string
    label: string
    value?: string | number,
    placeholder?: string,
    action?: any
}

const Input: React.FC<Props> = ({id, value, type, placeholder, label,action}) => {
    const dispatch = useDispatch();

    return (
        <div className={style.input}>
            <Form.Label htmlFor={`${label}${type}${placeholder}`} className="my-1 mr-2">
                {label}
            </Form.Label>
            <Form.Control
                placeholder={placeholder}
                type={type}
                id={`${label}${type}${placeholder}`}
                value={value}
                onChange={(e) => dispatch(action(id, Number(e.target.value)))}
            />
        </div>
    )
}

export default Input;