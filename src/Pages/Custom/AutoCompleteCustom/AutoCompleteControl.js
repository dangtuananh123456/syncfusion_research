import React, { useState, useContext, useEffect } from 'react';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Sort, Edit, Inject, Filter } from '@syncfusion/ej2-react-grids';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { CiTextAlignJustify } from "react-icons/ci";
import AutoCompleteCustom from './AutoCompleteCustom';
import './AutoCompleteControl.css'

// const displayColumnList = [
//   { value: 'tk', text: 'Mã TK' },
//   { value: 'ten_tk', text: 'Tên tài khoản' },
// ]

const AutoCompleteControl = ({ setValue, value, dataSource, fieldTarget, fieldDisplay, displayColumnList}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedValueText, setSelectedValueText] = useState(null);
  const filterSettings = { type: 'Excel' };
  const toolbarOptions = ['Add', 'Edit', 'Delete'];
  const pageSettings = { pageSize: 5 };
  // Xử lý chọn dòng trong Grid
  const handleRowSelect = (args) => {
    if (typeof setValue === 'function') {
      setValue(args.data[fieldTarget]);
    }
    // onChange(args.data[fieldTarget]);
    setSelectedValueText(args.data[fieldDisplay]);
    setOpenDialog(false);
  };
  // Hiển thị dialog khi click vào TextBox
  const handleIconClick = () => {
    setOpenDialog(true);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div
          className='hoverIconFormWithGridDropdown'
        >
          <CiTextAlignJustify
            size={25}
            onClick={handleIconClick}
          />
        </div>
        <AutoCompleteCustom
          setValue={setValue}
          dataSource={dataSource}
          value={value}
          fieldTarget={fieldTarget}
          fieldDisplay={fieldDisplay}
          selectedValueText={selectedValueText}
          setSelectedValueText={setSelectedValueText}
          displayColumnList={displayColumnList}
          className='AutoCompleteCustom'
        />
      </div>
      <DialogComponent
        visible={openDialog}
        width='700px'
        height='800px'
        showCloseIcon={true}
        isModal={true}
        close={() => setOpenDialog(false)}
      >
        <GridComponent
          dataSource={dataSource}
          allowPaging={true}
          pageSettings={pageSettings}
          rowSelected={handleRowSelect}
          toolbar={toolbarOptions}
          allowSorting={true}
          allowFiltering={true}
          filterSettings={filterSettings}
        >
          <ColumnsDirective>
            {displayColumnList.map((item, index) =>
              <ColumnDirective field={item.value} headerText={item.text} width={'200'} textAlign="Left" />
            )}
          </ColumnsDirective>
          <Inject services={[Page, Toolbar, Sort, Filter, Edit]} />
        </GridComponent>
      </DialogComponent>
    </div>
  );
};

export default AutoCompleteControl;
