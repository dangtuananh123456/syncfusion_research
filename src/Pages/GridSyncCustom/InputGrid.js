
import React, { useState, createContext, useEffect } from 'react';
import { CommandColumn, GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Edit, Toolbar, Sort, Filter, change, row } from '@syncfusion/ej2-react-grids';
import AutoCompleteForGridControl from '../Custom/AutoCompleleteForGridCustom/AutoCompleteForGridControl'
// import { DatePickerComponent, Inject as Inject1, MaskedDateTime } from '@syncfusion/ej2-react-calendars';
import DatePickerForGridControl from '../Custom/DatePickerCustom/DatePickerForGridControl';
import TextBoxForGridControl from '../Custom/TextBoxCustom/TextBoxForGridControl'
import * as Contants from "../../Constants"
import { set } from 'react-hook-form';
import NumericTextBoxForPriceGridControl from '../Custom/NumericTexBoxCustom/NumericTextBoxForPriceGridControl';
import NumericTextBoxForQuantityGridControl from '../Custom/NumericTexBoxCustom/NumericTextBoxForQuantityGridControl';
import NumericTextBoxForTotalridControl from "../Custom/NumericTexBoxCustom/NumericTextBoxForTotalridControl.js"
import "./InputGrid.css"
export const GridParentContext = createContext();

const fieldDisplayGrid = 'ma_vt';
// const key1 = "text1";

const displayColumnListForMaVT = [
  { value: 'ma_vt', text: "Mã vật tư" },
  { value: 'ten_vt', text: "Tên vật tư" },
  { value: 'dvt', text: "Đơn vị tính" }
]

const displayColumnListForMaKho = [
  { value: 'ma_kho', text: "Mã kho" },
  { value: 'ten_kho', text: "Tên kho" },
]

const dataMaKho = [
  { ma_kho: "KCT", ten_kho: "Kho hàng (kho chính)", kho_dl: false, tk_dl: "", stt_ntxt: 0, dia_chi: "" },
  { ma_kho: "KHO.Q7", ten_kho: "Kho hàng quận 7", kho_dl: false, tk_dl: "", stt_ntxt: 0 }
]


const InputGrid = () => {
  let gridInstance;
  const dataMaVt = [
    {
      "ma_vt": "DV01",
      "ten_vt": "Dịch vụ sửa chữa điện máy",
      "dvt": "KG",
      "nha_sx": "",
      "nha_pp": "",
      "ts_gtgt": 0,
      "ma_kho": "",
      "ma_thue": "",
      "gia_ton": "1",
      "ton_kho": false,
      "tk_dt": "",
      "tk_vt": "",
      "tk_gv": "",
      "tk_ck": "",
      "tk_tl": "",
      "loai": "4",
      "ma_nhvat": "N01"
    },
    {
      "ma_vt": "HH01",
      "ten_vt": "Hàng hóa 01",
      "dvt": "m",
      "nha_sx": "",
      "nha_pp": "",
      "ts_gtgt": 0,
      "ma_kho": "",
      "ma_thue": "",
      "gia_ton": "1",
      "ton_kho": true,
      "tk_dt": "",
      "tk_vt": "",
      "tk_gv": "",
      "tk_ck": "",
      "tk_tl": "",
      "loai": "1",
      "ma_nhvat": "N01"
    },
    {
      "ma_vt": "HH02",
      "ten_vt": "Hàng hóa 02",
      "dvt": "Kg",
      "nha_sx": "",
      "nha_pp": "",
      "ts_gtgt": 0,
      "ma_kho": "",
      "ma_thue": "",
      "gia_ton": "1",
      "ton_kho": true,
      "tk_dt": "",
      "tk_vt": "",
      "tk_gv": "",
      "tk_ck": "",
      "tk_tl": "",
      "loai": "1",
      "ma_nhvat": "N02"
    },
    {
      "ma_vt": "HH03",
      "ten_vt": "Hàng hóa 03",
      "dvt": "CHAI",
      "nha_sx": "",
      "nha_pp": "",
      "ts_gtgt": 0,
      "ma_kho": "",
      "ma_thue": "",
      "gia_ton": "1",
      "ton_kho": true,
      "tk_dt": "",
      "tk_vt": "",
      "tk_gv": "",
      "tk_ck": "",
      "tk_tl": "",
      "loai": "1",
      "ma_nhvat": "N02"
    },
    {
      "ma_vt": "VT02",
      "ten_vt": "Vật tư 02",
      "dvt": "CAI",
      "nha_sx": "",
      "nha_pp": "",
      "ts_gtgt": 0,
      "ma_kho": "",
      "ma_thue": "",
      "gia_ton": "1",
      "ton_kho": true,
      "tk_dt": "",
      "tk_vt": "",
      "tk_gv": "",
      "tk_ck": "",
      "tk_tl": "",
      "loai": "1",
      "ma_nhvat": "N01"
    },
    {
      "ma_vt": "VT1",
      "ten_vt": "Vật tư 1",
      "dvt": "CAI",
      "nha_sx": "",
      "nha_pp": "",
      "ts_gtgt": 0,
      "ma_kho": "",
      "ma_thue": "",
      "gia_ton": "1",
      "ton_kho": true,
      "tk_dt": "",
      "tk_vt": "",
      "tk_gv": "",
      "tk_ck": "",
      "tk_tl": "",
      "loai": "2",
      "ma_nhvat": "N02"
    },
    {
      "ma_vt": "VT2",
      "ten_vt": "Vật tư 2",
      "dvt": "THUNG",
      "nha_sx": "",
      "nha_pp": "",
      "ts_gtgt": 0,
      "ma_kho": "",
      "ma_thue": "",
      "gia_ton": "1",
      "ton_kho": false,
      "tk_dt": "",
      "tk_vt": "",
      "tk_gv": "",
      "tk_ck": "",
      "tk_tl": "",
      "loai": "4",
      "ma_nhvat": "N01"
    },
    {
      "ma_vt": "VT3",
      "ten_vt": "Vật tư 3",
      "dvt": "CAI",
      "nha_sx": "",
      "nha_pp": "",
      "ts_gtgt": 0,
      "ma_kho": "",
      "ma_thue": "",
      "gia_ton": "1",
      "ton_kho": true,
      "tk_dt": "",
      "tk_vt": "",
      "tk_gv": "",
      "tk_ck": "",
      "tk_tl": "",
      "loai": "1",
      "ma_nhvat": ""
    }
  ];
  const [typeEvent, setTypeEvent] = useState(null);
  const [indexRow, setIndexRow] = useState(-1);
  const [displayData, setDisplayData] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10).split('-').reverse().join('/'));
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const filterSettings = { type: 'Excel' };
  const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, showAddNewRow: true, newRowPosition: 'Bottom' };
  const editparams = { params: { popupHeight: '300px' } };
  const customeridRule = { required: true, minLength: 5 };
  const freightRule = { required: true, min: 0 };
  const MAKHRule = { required: true };
  const validSL = { required: true, number: true };
  const pageSettings = { pageCount: 5 };
  const format = { type: 'dateTime', format: 'dd/MM/yyyy' };

  const editColumnMaVT = (args) => {
    return (
      <AutoCompleteForGridControl value={args.ma_vt} dataSource={dataMaVt} fieldTarget={'ma_vt'} fieldDisplay={'ma_vt'} displayColumnList={displayColumnListForMaVT} />
    );
  }

  const editColumnMaKho = (args) => {
    return (
      <AutoCompleteForGridControl value={args.ma_kho} dataSource={dataMaKho} fieldTarget={'ma_kho'} fieldDisplay={'ma_kho'} displayColumnList={displayColumnListForMaKho} />
    );
  }

  const EditColumnQuantity = (args) => {
    return (
      <NumericTextBoxForQuantityGridControl value={args.so_luong} />
    );
  }

  const EditColumnPrice = (args) => {
    return (
      <NumericTextBoxForPriceGridControl value={args.gia} />
    );
  }

  const EditColumnTotal = (args) => {
    return (
      <NumericTextBoxForTotalridControl value={args.thanh_tien} />
    );
  }

  const actionBegin = (args) => {
    if (args.requestType === 'save') {
      if (gridInstance.pageSettings.currentPage !== 1 && gridInstance.editSettings.newRowPosition === 'Top') {
        args.index = (gridInstance.pageSettings.currentPage * gridInstance.pageSettings.pageSize) - gridInstance.pageSettings.pageSize;
      }
      else if (gridInstance.editSettings.newRowPosition === 'Bottom') {
        args.index = (gridInstance.pageSettings.currentPage * gridInstance.pageSettings.pageSize) - 1;
      }
    }
    if (args.requestType === "beginEdit" && args && Object.keys(args.rowData).length > 0) {
      console.log("args => ", args);
      setIndexRow(args.rowIndex);
      setTypeEvent('beginEdit');
      setPrice(args.rowData['gia']);
      setQuantity(args.rowData['so_luong']);
      setTotal(args.rowData['thanh_tien']);
    }
    else {
      setTypeEvent(null);
      setIndexRow(-1);
      setPrice(0);
      setQuantity(0);
      setTotal(0);
    }
  }

  function actionComplete(args) {
    console.log("sự kiện => ", args);
    if (args.action === 'edit' && args.type === 'actionComplete') {
      console.log("data binding from ui=> ", args.data);
    }
  }

  // const editOptions = { allowEditing: true, allowDeleting: true };
  const commands = [
    // { type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' } },
    { type: 'Delete', buttonOption: { cssClass: 'e-flat', iconCss: 'e-delete e-icons' } },
    { type: 'Save', buttonOption: { cssClass: 'e-flat', iconCss: 'e-update e-icons' } },  
    // { type: 'Cancel', buttonOption: { cssClass: 'e-flat', iconCss: 'e-cancel-icon e-icons' } }
  ];

  const commandClick = (args) => {
    console.log("args in command => ", args);
    const desIndexRow = args.rowData.id;
    if (args.commandColumn.type === 'Delete') {
      // console.log('desIndexRow => ', desIndexRow);
      setDisplayData(prev => {
        const updatedData = prev.filter((item, index) => index !== desIndexRow);
        return updatedData.map((item, index) => ({ ...item, id: index }));
      })
    }
    else if (args.commandColumn.type === 'Save') {
      console.log("SAve event");
      setDisplayData(prev => {
        return prev.map((item, index) => index === desIndexRow ? { ...item, so_luong: quantity, gia: price, thanh_tien: quantity * price } : item);
      })
    }
    else if (args.commandColumn.type === 'Cancel') {
      setDisplayData(prev => [...prev]);
    }
  }

  return (
    <GridParentContext.Provider value={{
      typeEvent, setTypeEvent, indexRow, setIndexRow,
      displayData, setDisplayData, quantity,
      setQuantity, price, setPrice, total, setTotal,
    }}
    >
      <GridComponent
        height={'500px'}
        dataSource={displayData}
        allowSorting={true}
        allowFiltering={true}
        filterSettings={filterSettings}
        editSettings={editSettings}
        pageSettings={pageSettings}
        actionComplete={actionComplete}
        actionBegin={actionBegin}
        commandClick={commandClick}
        ref={grid => gridInstance = grid}
      >
        <ColumnsDirective>
          <ColumnDirective field='id' headerText='Id' width='100' isPrimaryKey={true} visible={false} />
          <ColumnDirective field='ma_vt' headerText='Mã hàng' width='100' validationRules={MAKHRule} editTemplate={editColumnMaVT}></ColumnDirective>
          <ColumnDirective field='ten_vt' headerText='Tên hàng' width='100'></ColumnDirective>
          <ColumnDirective field='ma_kho' headerText='Mã kho' width='100' editTemplate={editColumnMaKho}></ColumnDirective>
          <ColumnDirective field='dvt' headerText='Đơn vị tính' width='100'></ColumnDirective>
          <ColumnDirective field='so_luong' headerText='Số lượng' width='100' editTemplate={EditColumnQuantity}></ColumnDirective>
          <ColumnDirective field='gia' headerText='Giá' width='100' editTemplate={EditColumnPrice}></ColumnDirective>
          <ColumnDirective field='thanh_tien' headerText='Thành tiền' width='100' editTemplate={EditColumnTotal}></ColumnDirective>
          {/* <ColumnDirective field='nhom_nganh' headerText='Nhóm ngành' width='100'></ColumnDirective> */}
          <ColumnDirective headerText='' width='35' commands={commands} freeze='Right' />
        </ColumnsDirective>
        <Inject services={[Edit, CommandColumn, Toolbar]} />
      </GridComponent>
    </GridParentContext.Provider>
  );
}
export default InputGrid;
