import axios from 'axios'
import React, { useState } from 'react'
import QuilEditor from './QuilEditor'

export const CreatePost = () => {

    const [content, setContent] = useState("")
    const [files, setFiles] = useState([])


    const onEditChange = (value)=>{
        setContent(value)
        console.log(value)
    }
    const onFilesChange = (value)=>{
       setFiles(value)

    }
    const onSubmit = (e)=>{
        e.preventDefault()

        axios.post("/api/createPost", content).
        then(response=>{
            if(response){
                console.log("content is posted")
            }
        }).catch(err=>{
            console.log("content error")
        })
    }
    return (
        <div className="quil__editor">
            <h1>Editor</h1><br/>
            <QuilEditor
                placeholder={"Start Posting"}
                onEditorChange={onEditChange}
                onFilesChange={onFilesChange}
            />
            <form onSubmit={onSubmit}>
                <button>Submit</button>
            </form>
        </div>
        
    )
}
