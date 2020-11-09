import React, {useState} from "react"
import {useDropzone} from "react-dropzone"
import { useSelector, useDispatch } from 'react-redux'
import {GET_INDEX_HTML, POPULATE_CATEGORIES, USER_DATA} from "../../store/Actions"
import {FaFileUpload} from "react-icons/fa"
import './onboarding.css'


const FileDrop = (props) => {

    const dispatch = useDispatch()

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
        accept: '/*',
        onDrop: (acceptedFiles) => {
            acceptedFiles.map((file) => {
                const reader = new FileReader()
                reader.onload = function(event) {
                    // Splitting the pathnames by forward slashes so I can grab the category name                    
                    const path = file.path.split("/")
                    dispatch({type: POPULATE_CATEGORIES, payload: {path: path[2], name: file.name, data: event.target.result}})

                    if (file.name == 'index.html') {
                        dispatch({type: GET_INDEX_HTML, payload: event.target.result})
                    }
                  };
                reader.readAsText(file);

                Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            })
        }
    })

    const handleLog = (e) => {
        e.preventDefault()
        dispatch({type: USER_DATA})
        props.history.push('/categories')
    }

    return(
        <div className='file-drop'>
            <h3>3: Drop your entire folder here!</h3>
            <div className='file-box' {...getRootProps()}>
                <FaFileUpload className='icon-file-drop' />
                <input {...getInputProps()} />
            </div>
            <button onClick={handleLog}>Dashboard</button>
        </div>
        )
}

export default FileDrop