
import { useContext } from 'react';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { GridParentContext } from "../../GridSyncCustom/InputGrid"

const NumericTextBoxForQuantityGridControl = () => {
    const { quantity, setQuantity, price, setTotal} = useContext(GridParentContext);
    return (
        <NumericTextBoxComponent
            value = {quantity}
            onChange={(e) => {
                const value = e.target.value;
                setQuantity(value);
                setTotal(value * price);
            }}
        />
    );
}

export default NumericTextBoxForQuantityGridControl;