import React, { useState, createContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextAreaComponent, TextBoxComponent, NumericTextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DatePickerComponent, Inject, MaskedDateTime  } from '@syncfusion/ej2-react-calendars';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import {
  CheckBoxComponent,
  RadioButtonComponent,
  ButtonComponent,
} from "@syncfusion/ej2-react-buttons";
import 'jsoneditor-react/es/editor.min.css';
import "../App.css";
import { FaCog } from 'react-icons/fa';
import 'jsoneditor/dist/jsoneditor.css';
// import JsonEditorComponent from './JsonEditor'
import MonacoEdittor from "./MonacoEdittor"
import FormWithGridDropdown from './Custom/AutoCompleleteForGridCustom/AutoCompleteForGridControl'
import ComboboxCustom from './Custom/ComboBoxCustom/ComboBoxControl'

export const DynamicContext = createContext();

const Error = ({ children }) => <p style={{ color: "red" }}>{children}</p>;

const Input = ({ value, onChange, type, ...rest }) => {
  switch (type) {
    case "text":
      return (
        <TextBoxComponent
          placeholder={rest?.placeholder}
          change={({ value }) => onChange(value)}
          value={value}
        />
      );

    case "number":
      return (
        <NumericTextBoxComponent
          placeholder={rest?.placeholder}
          change={({ value }) => onChange(value)}
          value={value}
        />
      );
    case "radio":
      return rest?.options.map((e) => (
        <RadioButtonComponent
          key={e}
          label={e}
          value={e}
          onChange={(value) => onChange(value)}
          checked={value === e}
        />
      ));
    case "dropdown":
      return (
        <DropDownListComponent
          dataSource={rest?.options}
          select={({ itemData }) => {
            onChange(itemData.value);
          }}
          value={value}
          readOnly={false}
        />
      );

    case "select":
      return (
        // <DropDownListComponent
        //   dataSource={rest?.options}
        //   select={({ itemData }) => {
        //     onChange(itemData.value);
        //   }}
        //   value={value}
        // />
        <ComboboxCustom
          dataSource={rest?.options}
          select={(value) => {
            onChange(value);
          }}
          value={value}
        />
      );

    case "checkbox":
      return (
        <CheckBoxComponent
          label={rest?.checkboxLabel}
          onChange={(e) => onChange(e.target.checked)}
          checked={value}
        />
      );

    case "date":
      // const handleBlur = (e) => {
      //   // console.log(e.target.value);
      //   const value = e.target.value;
      //   const currDate = new Date();
      //   if(value.includes('day')){
      //     const currDay = currDate.getDay();
      //     value.replace('day', currDay);
      //   }

      //   if(value.includes('month')){
      //     const currDay = currDate.getDay();
      //     value.replace('month', currDay);
      //   }

      //   if(value.includes('year')){
      //     const currDay = currDate.getDay();
      //     value.replace('year', currDay);
      //   }
      //   onChange(value);
      // }
      return (
        <DatePickerComponent 
          // format='M/d/yyyy' 
          format="dd/MM/yyyy"
          enableMask={true}
          label={rest?.checkboxLabel}
          change={(e) => {
            console.log(e);
            onChange(e.element.value);
            
          }}
          onBlur={(e) => {
            // console.log(e.target.value);
            const value = e.target.value;
            console.log(value);
            var flag = false;
            const currDate = new Date();
            var [day, month, year] = value.split('/');
            if(day === 'day'){
              const currDay = currDate.getDay();
              day = currDay.toString();
              flag = true;
            }

            if(month === 'month'){
              const currMonth = currDate.getMonth() + 1;
              month = currMonth.toString();
              flag = true;
            }
    
            if(year === 'year'){
              const currYear = currDate.getFullYear();
              year = currYear.toString();
              flag = true;
            }
            if(flag) onChange(new Date(`${year}-${month}-${day}`));
          }}
          defaultValue = {new Date().toISOString().slice(0, 10).split('-').reverse().join('/')}
          value={value}
        >
            <Inject services={[MaskedDateTime]}/>   
        </DatePickerComponent>
      );

    // case "lookup":
    //   return (
    //     <FormWithGridDropdown
    //       label={rest?.label}
    //       dataSource={rest?.options}
    //       value={value}
    //       select={(value) => {
    //         onChange(value);
    //       }}
    //       fieldTarget = {'ma_kh'}
    //       fieldDisplay = {'ten_kh'}
    //     />
    //   );

    default:
      return null;
  }
};

const Dynamic = () => {
  const { handleSubmit, control, // watch, 
    formState: { errors }, } = useForm();

  const [dynamicForm, setDynamicForm] = useState({
    "loai_phan_bon": {
      "type": "select",
      "label": "Loại phân bón",
      "options": [
        { "text": "Phân Vô Cơ", "value": "Phân Vô Cơ" },
        { "text": "Phân Hữu Cơ", "value": "Phân Hữu Cơ" },
        { "text": "Phân Sinh Học", "value": "Phân Sinh Học" }
      ]
    },
    "ten_phan_bon": { "type": "text", "label": "Tên phân bón" },
    "so_luong": {
      "type": "number",
      operator: ">",
      "label": "Số lượng (Kg)",
      "decimalScale": 2
    },
    "phuong_phap": {
      "type": "select",
      "label": "Phương pháp",
      operator: '=',
      "options": [
        { "text": "Bón qua rễ", "value": "Bón qua rễ" },
        { "text": "Bón qua lá", "value": "Bón qua lá" }
      ]
    },
    "ngay_sx": {
      "type": "date",
      "label": "Ngày sản xuất",
      "operator": ">"
    },
    "ma_kh": {
      type: "lookup",
      label: "Khách hàng",
      code: 'ma_kh',
      "operator": "=",
      options: [
        {
          "ma_kh": "00014. NHAP",
          "ten_kh": "Test thử",
          "ten_kh0": "Test thu",
          "dia_chi": "Quang tri",
          "ma_so_thue": "0100101308-032",
          "tel": "",
          "email": "",
          "ma_tt": "",
          "ma_httt": "131"
        },
        {
          "ma_kh": "0100101308",
          "ten_kh": "TỔNG CÔNG TY MAY 10-CTCP",
          "ten_kh0": "TONG CONG TY MAY 10-CTCP",
          "dia_chi": "Sài Đồng, Long Biên, Hà Nội",
          "ma_so_thue": "0100101308",
          "tel": "",
          "email": "",
          "ma_tt": "",
          "ma_httt": "131"
        },
        {
          "ma_kh": "0100101308.032",
          "ten_kh": "CHI NHÁNH TỔNG CÔNG TY MAY 10 - CÔNG TY CP GARCO DRAGON HOTEL",
          "ten_kh0": "CHI NHANH TONG CONG TY MAY 10 - CONG TY CP GARCO DRAGON HOTEL",
          "dia_chi": "765A Nguyễn Văn Linh, P. Sài Đồng, Q. Long Biên, TP. Hà Nội",
          "ma_so_thue": "0100101308-032",
          "tel": "",
          "email": "",
          "ma_tt": "",
          "ma_httt": "131"
        },
        {
          "ma_kh": "0100101308.032",
          "ten_kh": "CHI NHÁNH TỔNG CÔNG TY MAY 10 - CÔNG TY CP GARCO DRAGON HOTEL",
          "ten_kh0": "CHI NHANH TONG CONG TY MAY 10 - CONG TY CP GARCO DRAGON HOTEL",
          "dia_chi": "765A Nguyễn Văn Linh, P. Sài Đồng, Q. Long Biên, TP. Hà Nội",
          "ma_so_thue": "0100101308-032",
          "tel": "",
          "email": "",
          "ma_tt": "",
          "ma_httt": "131"
        },
        {
          "ma_kh": "0100101308.032",
          "ten_kh": "CHI NHÁNH TỔNG CÔNG TY MAY 10 - CÔNG TY CP GARCO DRAGON HOTEL",
          "ten_kh0": "CHI NHANH TONG CONG TY MAY 10 - CONG TY CP GARCO DRAGON HOTEL",
          "dia_chi": "765A Nguyễn Văn Linh, P. Sài Đồng, Q. Long Biên, TP. Hà Nội",
          "ma_so_thue": "0100101308-032",
          "tel": "",
          "email": "",
          "ma_tt": "",
          "ma_httt": "131"
        },
        {
          "ma_kh": "0100101308.032",
          "ten_kh": "CHI NHÁNH TỔNG CÔNG TY MAY 10 - CÔNG TY CP GARCO DRAGON HOTEL",
          "ten_kh0": "CHI NHANH TONG CONG TY MAY 10 - CONG TY CP GARCO DRAGON HOTEL",
          "dia_chi": "765A Nguyễn Văn Linh, P. Sài Đồng, Q. Long Biên, TP. Hà Nội",
          "ma_so_thue": "0100101308-032",
          "tel": "",
          "email": "",
          "ma_tt": "",
          "ma_httt": "131"
        },
        {
          "ma_kh": "0100101308.032",
          "ten_kh": "CHI NHÁNH TỔNG CÔNG TY MAY 10 - CÔNG TY CP GARCO DRAGON HOTEL",
          "ten_kh0": "CHI NHANH TONG CONG TY MAY 10 - CONG TY CP GARCO DRAGON HOTEL",
          "dia_chi": "765A Nguyễn Văn Linh, P. Sài Đồng, Q. Long Biên, TP. Hà Nội",
          "ma_so_thue": "0100101308-032",
          "tel": "",
          "email": "",
          "ma_tt": "",
          "ma_httt": "131"
        },
        {
          "ma_kh": "0100101308.032",
          "ten_kh": "CHI NHÁNH TỔNG CÔNG TY MAY 10 - CÔNG TY CP GARCO DRAGON HOTEL",
          "ten_kh0": "CHI NHANH TONG CONG TY MAY 10 - CONG TY CP GARCO DRAGON HOTEL",
          "dia_chi": "765A Nguyễn Văn Linh, P. Sài Đồng, Q. Long Biên, TP. Hà Nội",
          "ma_so_thue": "0100101308-032",
          "tel": "",
          "email": "",
          "ma_tt": "",
          "ma_httt": "131"
        },
        {
          "ma_kh": "0100101308.032",
          "ten_kh": "CHI NHÁNH TỔNG CÔNG TY MAY 10 - CÔNG TY CP GARCO DRAGON HOTEL",
          "ten_kh0": "CHI NHANH TONG CONG TY MAY 10 - CONG TY CP GARCO DRAGON HOTEL",
          "dia_chi": "765A Nguyễn Văn Linh, P. Sài Đồng, Q. Long Biên, TP. Hà Nội",
          "ma_so_thue": "0100101308-032",
          "tel": "",
          "email": "",
          "ma_tt": "",
          "ma_httt": "131"
        }, {
          "ma_kh": "0100101308.032",
          "ten_kh": "CHI NHÁNH TỔNG CÔNG TY MAY 10 - CÔNG TY CP GARCO DRAGON HOTEL",
          "ten_kh0": "CHI NHANH TONG CONG TY MAY 10 - CONG TY CP GARCO DRAGON HOTEL",
          "dia_chi": "765A Nguyễn Văn Linh, P. Sài Đồng, Q. Long Biên, TP. Hà Nội",
          "ma_so_thue": "0100101308-032",
          "tel": "",
          "email": "",
          "ma_tt": "",
          "ma_httt": "131"
        },
      ]
    },
    "su_dung": {
      "type": "radio",
      "label": "sử dụng",
      "operator": "LIKE",
      "decimalScale": 2,
      options: [
        "sử dụng", "không sử dụng"
      ]
    },
  });

  const [visible, setVisible] = useState(false);

  const formInputs = Object.keys(dynamicForm).map((e) => {
    const { rules, defaultValue, label, operator } = dynamicForm[e];

    return (
      <div>
        <section key={e}>
          <label>{label}</label>
          <Controller
            name={e}
            control={control}
            rules={rules}
            defaultValue={defaultValue}
            render={({ field }) => (
              <div>
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  {...dynamicForm[e]}
                />
              </div>
            )}
          />
          {errors[e] && <Error>This field is required</Error>}
        </section>
        <Controller
          name={`${e}_operator`}
          control={control}
          rules={rules}
          defaultValue={operator}
          visible={false}
          render={({ field }) => ('')}
        />
      </div>
    );
  });

  const onSubmit = (data) => {
    console.log(data);

  };

  const openPopup = () => {
    setVisible(true);
  };

  const closePopup = () => {
    setVisible(false);
  };

  return (
    <DynamicContext.Provider value={{ dynamicForm, setDynamicForm }}>
      <div className="wrapper">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div><b>Dynamic Form Example</b></div>
          <FaCog onClick={openPopup} />
        </div>
        <DialogComponent
          header="Thông báo"
          visible={visible}
          showCloseIcon={true}
          isModal={true}
          width="60%"
          height="80%"
          close={closePopup}
        >
          <MonacoEdittor />
        </DialogComponent>
        <form onSubmit={handleSubmit(onSubmit)}>
          {formInputs}
          <div style={{ textAlign: "center" }}>
            <ButtonComponent type="submit" cssClass="e-success">
              Success
            </ButtonComponent>
          </div>
        </form>
      </div>
    </DynamicContext.Provider>
  );
};

export default Dynamic;
