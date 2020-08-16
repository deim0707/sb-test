import React from "react";
import style from './QuantityInput.module.scss'
import {useDispatch} from "react-redux";
import {changeQuantityAction} from "../../../Store/actions";

interface Props {
    quantity: number,
    id: number
}

const QuantityInput:React.FC<Props> = ({quantity,id}) => {
    const dispatch = useDispatch();

    return(
        <div className={style.quantityInput}>
            <button
                onClick={()=>dispatch(changeQuantityAction(id, quantity-1))}
            >
                -
            </button>

            <input
                type="number"
                value={quantity}
                onChange={(e)=>dispatch(changeQuantityAction(id, Number(e.target.value)))}
            />

            <button
                onClick={()=>dispatch(changeQuantityAction(id, quantity+1))}
            >
                +
            </button>
        </div>
    )
}
export default QuantityInput;