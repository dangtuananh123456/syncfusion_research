import React, { useState, useContext, useEffect } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Sort, Edit, Inject, Filter } from '@syncfusion/ej2-react-grids';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { CiTextAlignJustify } from "react-icons/ci";
import AutoCompleteCustom from './AutoCompleteCustom';
import './AutoCompleteForGridControl.css'
import { GridParentContext } from "../../GridSyncCustom/InputGrid"

const AutoCompleteForGridControl = ({ value, dataSource, fieldTarget, fieldDisplay, displayColumnList }) => {

  const { typeEvent, indexRow, setDisplayData } = useContext(GridParentContext);
  const [openDialog, setOpenDialog] = useState(false);
  const filterSettings = { type: 'Excel' };
  const toolbarOptions = ['Add', 'Edit', 'Delete'];
  const pageSettings = { pageSize: 5 };

  // Xử lý chọn dòng trong Grid
  const handleRowSelect = (args) => {
    if (setDisplayData) {
      console.log({ typeEvent: typeEvent, indexRow: indexRow })
      if (typeEvent === 'beginEdit') {
        if (indexRow === -1) return;
        console.log("begin edit");
        setDisplayData(prev => prev.map((item, index) => index === indexRow ?
          { ...item, ...args.data, id: index, ma_kho: item.ma_kho ? item.ma_kho : args.data.ma_kho } : item));
      }
      else {
        console.log('rest');
        setDisplayData(prev => [...prev, { ...args.data, id: prev.length }]);
      }
    }
    setOpenDialog(false);
  };
  
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
          dataSource={dataSource}
          setDisplayData={setDisplayData}
          value={value}
          fieldTarget={fieldTarget}
          fieldDisplay={fieldDisplay}
          displayColumnList={displayColumnList}
          className='AutoCompleteCustom'
          typeEvent={typeEvent}
          indexRow={indexRow}
        />
      </div>
      <DialogComponent
        visible={openDialog}
        width='60%'
        height='80%'
        showCloseIcon={true}
        isModal={true}
        close={() => setOpenDialog(false)}
        header='Chọn đối tượng'
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
            {displayColumnList.map(item =>
              <ColumnDirective field={item.value} headerText={item.text} width='120' textAlign="Left" />
            )}
          </ColumnsDirective>
          <Inject services={[Page, Toolbar, Sort, Filter, Edit]} />
        </GridComponent>
      </DialogComponent>
    </div>
  );
};

export default AutoCompleteForGridControl;
