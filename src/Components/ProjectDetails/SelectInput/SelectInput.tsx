import React from "react";

interface Props {
    valueProgress: string
}

const SelectInput: React.FC<Props> = ({valueProgress}) => {
    const isSelectedStatus = (type: string): boolean => valueProgress === type;

    return (
        <select>
            <option
                value="planning"
                selected={isSelectedStatus('planning')}
            >
                Планирование
            </option>
            <option
                value="design"
                selected={isSelectedStatus('design')}
            >
                Проектирование
            </option>
            <option
                value="implementation"
                selected={isSelectedStatus('implementation')}
            >
                Реализация
            </option>
            <option
                value="balance"
                selected={isSelectedStatus('balance')}
            >
                Постановка на баланс
            </option>
            <option
                value="closed"
                selected={isSelectedStatus('closed')}
            >
                Закрыт
            </option>

        </select>
    )
}

export default SelectInput;