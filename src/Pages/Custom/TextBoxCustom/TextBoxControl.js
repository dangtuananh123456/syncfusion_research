
import React, { useContext, useEffect, useState } from 'react';
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import * as Constants from '../../../Constants'

const TextBoxControl = ({ value, setValue }) => {
  return (
    <TextBoxComponent
      defaultValue = {''}
      onChange={({ value }) => {
        setValue(value);
      }}
      value={value}
    />
  );
}

export default TextBoxControl;