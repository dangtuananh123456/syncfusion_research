import React, { useEffect, useRef, useState, useContext} from 'react';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';
import { DynamicContext } from './Dynamic';


const JsonEditorComponent = () => {
    const {dynamicForm, setDynamicForm} = useContext(DynamicContext);

  const editorRef = useRef(null);
  const jsonEditorRef = useRef(null);

  useEffect(() => {
    // Khởi tạo JSONEditor
    const options = {
      mode: 'code', // Các chế độ: 'tree', 'view', 'form', 'code', 'text'
      onChange: () => {
        const updatedJson = jsonEditorRef.current.get(); // Lấy JSON sau khi chỉnh sửa
        setDynamicForm(updatedJson);
      }
    };

    // Gắn JSONEditor vào ref
    jsonEditorRef.current = new JSONEditor(editorRef.current, options);

    // Cài đặt dữ liệu JSON ban đầu
    jsonEditorRef.current.set(dynamicForm);

    // Dọn dẹp JSONEditor khi component bị hủy
    return () => {
      if (jsonEditorRef.current) {
        jsonEditorRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h4>Chỉnh sửa JSON</h4>
      <div ref={editorRef} style={{ height: '400px' }}></div> {/* JSONEditor sẽ được render tại đây */}
      {/* <h5>JSON Hiện Tại:</h5>
      <pre>{JSON.stringify(dynamicForm, null, 2)}</pre> */}
    </div>
  );
};

export default JsonEditorComponent;
