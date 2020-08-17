import React from "react";
import style from './QuantityInput.module.scss'
import {useDispatch} from "react-redux";
import {changeQuantityAction} from "../../../Store/actions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


interface Props {
    quantity: number,
    id: number
}

const QuantityInput: React.FC<Props> = ({quantity, id}) => {
    const dispatch = useDispatch();

    return (
        <div className={style.quantityInput}>

            <Form.Label htmlFor="inputQuantity" className="my-1 mr-2">
                Колличество:
            </Form.Label>


            <Button
                variant='primary'
                onClick={() => dispatch(changeQuantityAction(id, quantity - 1))}
            >
                -
            </Button>


            <Form.Control
                placeholder='Введите цену'
                id="inputQuantity"
                type='number'
                value={quantity}
                onChange={(e) => dispatch(changeQuantityAction(id, Number(e.target.value)))}
            />

            <Button
                variant='primary'
                onClick={() => dispatch(changeQuantityAction(id, quantity + 1))}
            >
                +
            </Button>

        </div>
    )
}
export default QuantityInput;
