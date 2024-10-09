
import { useContext } from 'react';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { GridParentContext } from "../../GridSyncCustom/InputGrid"

const NumericTextBoxForQuantityGridControl = () => {
    const { total, setTotal} = useContext(GridParentContext);
    return (
        <NumericTextBoxComponent
            value = {total}
        />
    );
}

export default NumericTextBoxForQuantityGridControl;