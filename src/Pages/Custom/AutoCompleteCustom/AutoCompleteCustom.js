import React, { useContext, useEffect } from 'react';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import "./AutoCompleteCustom.css"

const AutoCompleteCustom = ({ dataSource, setValue, value, fieldDisplay, selectedValueText, fieldTarget, setSelectedValueText, displayColumnList }) => {
    const fields = { value: fieldDisplay };
    console.log({ displayColumnList: displayColumnList })
    // Header template using flexbox
    const headerTemplate = () => {
        return (
            <div className="header-container">
                {displayColumnList.map((item, index) =>
                    <div className="header-item">{item.text}</div>)}
            </div>
        );
    };

    // Item template using flexbox
    const itemTemplate = (data) => {
        return (
            <div className="item-container">
                {displayColumnList.map((item, index) => 
                    <div className="item">{data[item.value]}</div>
                )}
            </div>
        );
    };

    const handleSelect = ({ itemData }) => {
        // console.log(itemData);
        if (typeof setValue === 'function') setValue(itemData[fieldTarget]);
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
            popupHeight="auto" // Set a max height to trigger scrolling
            // popupWidth="800px"
            // change={handleChange}
            select={handleSelect}
            open={handleOpen} // Event to handle popup positioning
            defaultValue={''}
            value={selectedValueText}
        />
    );
};

export default AutoCompleteCustom;
