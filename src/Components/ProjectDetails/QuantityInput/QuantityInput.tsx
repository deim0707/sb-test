import React from "react";

interface Props {
    quantity: number
}

const QuantityInput:React.FC<Props> = ({quantity}) => {
    return(
        <div>
            <button>-</button>
            <input type="number" value={quantity}/>
            <button>+</button>
        </div>
    )
}
export default QuantityInput;