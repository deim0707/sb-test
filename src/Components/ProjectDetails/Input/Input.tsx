import React from "react";
import Form from "react-bootstrap/Form";
import style from './Input.module.scss'

interface Props {
    type: string
    label: string
    value: string | number,
    onChange: Function,
    placeholder?: string,
    className?: string
}

const Input: React.FC<Props> = ({
                                    type,
                                    label,
                                    onChange,
                                    value,
                                    placeholder,
                                    className
                                }) => {

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
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}

export default Input;
