
import React, {useContext} from 'react';
import Editor from '@monaco-editor/react';
import { DynamicContext } from './Dynamic';

const MonacoEdittor = () => {
    const { dynamicForm, setDynamicForm } = useContext(DynamicContext);
    function handleEditorChange(value, event) {
        console.log('here is the current model value:', value);
        // console.log(value);
        setDynamicForm(JSON.parse(value));
    }

    return (
        <Editor
            height="90vh"
            defaultLanguage="json"
            defaultValue={JSON.stringify(dynamicForm)}
            // defaultValue={dynamicForm}
            // value={dynamicForm}
            theme='light'
            onChange={handleEditorChange}
        />
    );
}

export default MonacoEdittor;