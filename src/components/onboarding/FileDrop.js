import React, {useState} from "react"
import {useDropzone} from "react-dropzone"
import { useSelector, useDispatch } from 'react-redux'
import {GET_USER_DATA, GET_USER_NAME, GET_JUNK_DATA, SHOW_DATA} from "../../store/Actions"
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
                    // console.log(event.target)
                    // if (typeof(event.target.result) == 'string') {
                    //     try {
                    //         dispatch({type: GET_USER_DATA, payload:{
                    //            data: JSON.parse(event.target.result),
                    //            name: file.name
                    //         }}) 
                    //     } catch (e) {
                    //         dispatch({type: GET_JUNK_DATA, payload:{
                    //             data: event.target.result,
                    //             name: file.name
                    //          }}) 
                    //     }
                    // }
                    // else if (typeof(file.type == 'jpg')) {
                    //     console.log("JPGGGGG")
                    // }
                    console.log(file.name)
                    dispatch({type: GET_USER_DATA, payload: {
                        data: JSON.stringify(event.target.result),
                        name: file.name
                    }})
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
        props.history.push('/explorer')
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