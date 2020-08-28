import React, {useState} from "react"
import {useDropzone} from "react-dropzone"
import { useSelector, useDispatch } from 'react-redux'
import {GET_USER_DATA, GET_USER_NAME, GET_JUNK_DATA, SHOW_DATA} from "../../store/Actions"
import './onboarding.css'


const FileDrop = () => {

    const dispatch = useDispatch()

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
        accept: '/*',
        onDrop: (acceptedFiles) => {
            acceptedFiles.map((file) => {
                const reader = new FileReader()
                reader.onload = function(event) {
                    console.log(file.type)
                    if (typeof(event.target.result) == 'string') {
                        try {
                            dispatch({type: GET_USER_DATA, payload:{
                               data: JSON.parse(event.target.result),
                               name: file.name
                            }}) 
                        } catch (e) {
                            dispatch({type: GET_JUNK_DATA, payload:{
                                data: event.target.result,
                                name: file.name
                             }}) 
                        }
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
        dispatch({type: GET_USER_NAME})
        dispatch({type: SHOW_DATA})
    }

    return(
        <div className='file-drop'>
            <h3>3: Drop your entire file here!</h3>
            <div className='file-box' {...getRootProps()}>
                <input {...getInputProps()} />
            </div>
            <button onClick={handleLog}>Dashboard</button>
        </div>
        )
}

export default FileDrop