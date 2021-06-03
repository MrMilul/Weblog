import React from 'react'
import QuilEditor from './QuilEditor'
export const CreatePost = () => {

    const onEditChange = ()=>{
        console.log("onEditChange")
    }
    const onFilesChange = ()=>{
        console.log("onFilesChange")
    }
    return (
        <div>
            <h1>Editor</h1>
            <QuilEditor
                placeholder={"Start Posting"}
                onEditChange={onEditChange}
                onFilesChange={onFilesChange}
            />
        </div>
       
    )
}
