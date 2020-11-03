import React, {useState} from "react"
import {useDropzone} from "react-dropzone"
import { useSelector, useDispatch } from 'react-redux'
import {GET_USER_DATA, GET_USER_NAME, GET_JUNK_DATA, SHOW_DATA, GET_INDEX_HTML} from "../../store/Actions"
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
                    // Regex to find the category name (any character between two forward slashes but also the forward slashes)
                    // \/(.+)\/
                    // Regex to remove the forward slashes
                    // [^/]+
                    const wordPattern = /\/(.+)\//i

                    const path = file.path
                    let test
                    const firstMatch = path.replace(wordPattern, (match) => {
                        console.log(match)
                    })
        
                    

                    console.log(file.name)
                    dispatch({type: GET_USER_DATA, payload: {
                        data: JSON.stringify(event.target.result),
                        name: file.name
                    }})
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
        dispatch({type: SHOW_DATA})
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