
import { useContext } from 'react';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { GridParentContext } from "../../GridSyncCustom/InputGrid"

const NumericTextBoxForPriceGridControl = () => {
    const { price, setPrice, quantity, setTotal} = useContext(GridParentContext);
    return (
        <NumericTextBoxComponent
            value={price}
            onChange={(e) => {
                const value = e.target.value;
                setPrice(value);
                setTotal(value * quantity)
            }}
        />
    );
}

export default NumericTextBoxForPriceGridControl;