"use client"
import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import type { Snippet } from '@/generated/prisma'
import { Button } from './ui/button'
import { saveSnippet } from '@/actions'

const EditSnippetForm = ({snippet}: {snippet: Snippet}) => {
  const [code,setcode] =useState(snippet.code);
  const changeEvent=(value:string = '')=>{
    setcode(value);
  }

  const saveSnippetAction = saveSnippet.bind(null,snippet.id,code);


  return (
    <div className='flex flex-col gap-4'>
        <form action={saveSnippetAction} className='flex items-center justify-between'>
            <h1 className='font-bold text-xl'>Edit Snippet</h1>
            <Button type="submit">Save</Button>
        </form>
        <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={changeEvent}
      />
    </div>
  )
}

export default EditSnippetForm