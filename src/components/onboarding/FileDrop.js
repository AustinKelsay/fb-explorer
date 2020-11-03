import React, {useState} from "react"
import {useDropzone} from "react-dropzone"
import { useSelector, useDispatch } from 'react-redux'
import {GET_INDEX_HTML, POPULATE_CATEGORIES, POPULATE_FILES, SHOW_STORE} from "../../store/Actions"
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
                    dispatch({type: POPULATE_CATEGORIES, payload: path[2]})
                    dispatch({type: POPULATE_FILES, payload: {name: file.name, data: event.target.result}})
                    console.log(event.target)

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
        dispatch({type: SHOW_STORE})
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