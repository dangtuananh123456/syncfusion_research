import React from 'react';
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import { Query } from '@syncfusion/ej2-data';

const ComboBoxControl = ({ dataSource, select, value, fieldDisplay, textDisplay }) => {
    // maps the appropriate column to fields property
    const fields = fieldDisplay ? fieldDisplay : { text: "text", value: "value" };
    // sort the resulted items
    const sortOrder = 'Ascending';
    // filtering event handler to filter a Country
    const onFiltering = (args) => {
        let query = new Query();
        // frame the query based on search string with filter type.
        query = (args.text !== "") ? query.where(fields.text, "contains", args.text, true) : query;
        // pass the filter data source, filter query to updateData method.
        args.updateData(dataSource, query);
    };

    const handleChange = (itemData) => {
        select(itemData.value);
        // console.log(itemData.value);
    }

    return (
        // specifies the tag for render the ComboBox component
        <ComboBoxComponent
            id="comboelement"
            popupHeight="250px"
            fields={fields}
            autofill={true}
            filtering={onFiltering}
            allowFiltering={true}
            sortOrder={sortOrder}
            dataSource={dataSource}
            value={value}
            change={handleChange}
        />
    );
}

export default ComboBoxControl;
