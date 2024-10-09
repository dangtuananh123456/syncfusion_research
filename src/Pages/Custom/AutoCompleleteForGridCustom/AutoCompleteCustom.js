import React, { useContext, useEffect } from 'react';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import "./AutoCompleteCustom.css"
import { GridParentContext } from '../../GridSyncCustom/InputGrid'

const AutoCompleteCustom = ({ dataSource, value, fieldDisplay, displayColumnList }) => {
    const { typeEvent, indexRow, setDisplayData } = useContext(GridParentContext);
    const fields = { value: fieldDisplay };

    const headerTemplate = () => {
        return (
            <div className="header-container">
                {displayColumnList.map(item =>
                    <div className="header-item">{item.text}</div>
                )}
            </div>
        );
    };

    const itemTemplate = (data) => {
        return (
            <div className="item-container">
                {displayColumnList.map(item =>
                    <div className="item">{data[item.value]}</div>
                )}
            </div>
        );
    };

    const handleSelect = ({ itemData }) => {
        if (setDisplayData) {
            if (typeEvent === 'beginEdit') {
                if (indexRow === -1) return;
                setDisplayData(prev => prev.map((item, index) => index === indexRow ? { ...item, ...itemData, id: index, ma_kho : item.ma_kho ? item.ma_kho : itemData.ma_kho} : item));
            }
            else {
                setDisplayData(prev => [...prev, { ...itemData, id: prev.length }]);
            }
        }
    };

    // Handle open event to modify the popup position
    const handleOpen = (event) => {
        const popupElement = event.popup.element;
        const inputElement = document.getElementById('employees');
        const rect = inputElement.getBoundingClientRect();

        // Adjust the popup position to be directly below the input field
        popupElement.style.position = 'absolute';
        popupElement.style.top = `${rect.bottom + window.scrollY}px`; // Below the input
        popupElement.style.left = `${rect.left}px`; // Align with input's left side
        popupElement.style.width = `${rect.width}px`; // Match the width of input field
    };

    return (
        <AutoCompleteComponent
            id="employees"
            ignoreAccent={true}
            dataSource={dataSource}
            fields={fields}
            itemTemplate={itemTemplate}
            headerTemplate={headerTemplate}
            popupHeight="auto"
            select={handleSelect}
            open={handleOpen}
            defaultValue={''}
            value={value}
        />
    );
};

export default AutoCompleteCustom;
