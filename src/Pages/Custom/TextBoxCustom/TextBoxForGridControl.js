
import React, { useContext, useEffect, useState } from 'react';
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import * as Constants from '../../../Constants'
import { GridParentContext } from "../../GridSyncCustom/InputGrid"

const TextBoxForGridControl = () => {
  const { textTenkh, setTextTenkh } = useContext(GridParentContext);
  return (
    <TextBoxComponent
      defaultValue = {''}
      onChange={({ value }) => {
        setTextTenkh(value);
      }}
      value={textTenkh}
    />
  );
}

export default TextBoxForGridControl;