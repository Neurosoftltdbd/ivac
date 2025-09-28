"use client"
import { useEffect } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import toast from 'react-hot-toast'
import { ivacCodeState } from '@/state/ivacCodeState'
export default function IvacCodePage() {
  const { ivacCode, getIvacCode, ivacCodeOnChange, saveIvacCode, ivacCodeResponse } = ivacCodeState();

  useEffect(() => {
    (async () => {
      await getIvacCode();
    })()
  }, []);

  const handleSave = async () => {
    const response = await saveIvacCode(ivacCode);
    if (response.status === 'success') {
      toast.success('Ivac code saved successfully');
      await getIvacCode();
    } else {
      toast.error('Failed to save Ivac code');
    }
  }

  return (
    <>
      <h1 className='text-3xl font-bold text-gray-800'>Ivac Code</h1>
      <p className='text-gray-600'>Edit the Ivac code below.</p>
      <div className='my-3 overflow-hidden'>
        <CodeMirror
          value={ivacCode}
          height="80vh"
          width='90vw'
          maxWidth='1600px'
          autoSave='true'
          lang='javascript'
          className='rounded p-2'
          extensions={[javascript({
            jsx: true, 
            typescript: true, 
            jsxBracketSameLine: true, 
            closeBrackets: true, 
            lintKeymap: true,
            autoCloseBrackets: true, 
            autoCloseTags: true, 
            matchBrackets: true, 
            highlightSelectionMatches: true, 
            closeTags: true,
            highlightActiveLine: true, 
            indentOnInput: true, 
            bracketMatching: true, 
            foldGutter: true, 
            defaultKeymap: true, 
            history: true,
            lineNumbers: true, 
            highlightSpecialChars: true, 
            drawSelection: true, 
            dropCursor: true, 
            rectangularSelection: true,
            crosshairCursor: true,
            highlightActiveLineGutter: true,
            wrapOnInput: true, 
            allowMultipleSelections: true,
            indentUnit: '    ',
            tabSize: 4,
            useTab: true,
            smartIndent: true,
            wordWrap: 'on',

          })]}
          onChange={ivacCodeOnChange}
          theme="dark"
        />
        <div className='flex justify-between items-center'>
        <button onClick={handleSave} className='bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600 mt-3 cursor-pointer'>Save Code</button>
          {ivacCodeResponse && <p className='mt-2 text-sm text-gray-500'>Last updated by: {ivacCodeResponse.data?.user?.role} ( {ivacCodeResponse.data?.user?.name} - {ivacCodeResponse.data?.user?.email})</p>}
        </div>
      </div>
    </>
  )
}
