

import { DatePickerComponent, Inject, MaskedDateTime } from "@syncfusion/ej2-react-calendars";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-react-dropdowns/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-react-popups/styles/material.css";
import "@syncfusion/ej2-react-calendars/styles/material.css";
import "@syncfusion/ej2-react-buttons/styles/material.css"

const DatePickerControl = ({setValue, value }) => {
  return (
    <DatePickerComponent
      // format='M/d/yyyy' 
      format="dd/MM/yyyy"
      enableMask={true}
      onChange={(e) => {
        console.log(e);
        setValue(e.value);
      }}

      onBlur={(e) => {
        const value = e.target.value;
        console.log({ value: value });
        var flag = false;
        const currDate = new Date();
        console.log({ currDate: currDate });
        var [day, month, year] = value.split('/');
        if (day === 'day') {
          const currDay = currDate.getDay();
          day = currDay.toString();
          flag = true;
        }

        if (month === 'month') {
          const currMonth = currDate.getMonth() + 1;
          month = currMonth.toString();
          flag = true;
        }

        if (year === 'year') {
          const currYear = currDate.getFullYear();
          year = currYear.toString();
          flag = true;
        }
        if (flag) setValue(new Date(`${year}-${month}-${day}`));
      }}
      defaultValue={new Date().toISOString().slice(0, 10).split('-').reverse().join('/')}
      value={value}
    >
      <Inject services={[MaskedDateTime]} />
    </DatePickerComponent>
  );
}

export default DatePickerControl;