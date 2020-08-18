import React from "react";
import {useDispatch} from "react-redux";
import Form from "react-bootstrap/Form";
import style from './Input.module.scss'

interface Props {
    id: number
    type: string
    label: string
    value?: string | number,
    placeholder?: string,
    action?: any,
    className?: string
}

const Input: React.FC<Props> = ({
                                    id,
                                    value,
                                    type,
                                    placeholder,
                                    label,
                                    action,
                                    className
                                }) => {
    const dispatch = useDispatch();

    return (
        <div className={`${style.input} ${className || null}`}>
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