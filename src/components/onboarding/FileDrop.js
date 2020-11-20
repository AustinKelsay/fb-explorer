import React, {useState, useEffect} from "react"
import {useDropzone} from "react-dropzone"
import {useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap';
import {GET_INDEX_HTML, POPULATE_CATEGORIES, USER_DATA} from "../../store/Actions"
import {FaFileUpload} from "react-icons/fa"
import { Ring } from 'react-spinners-css';
import Zoom from 'react-reveal/Zoom';
import './onboarding.css'


const FileDrop = (props) => {
    const [ring, setRing] = useState(false);
    const [dataReady, setDataReady] = useState(false);
    const dispatch = useDispatch()

    const ringTimer = () => {
        setRing(true)
        setTimeout(() => {
            setRing(false)
            setDataReady(true)
        }, 6000)
    }

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
        accept: '/*',
        onDrop: (acceptedFiles) => {
            acceptedFiles.map((file) => {
                ringTimer()
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
            <p>(None of your data will be stored)</p>
            <div className='file-box' {...getRootProps()}>
                <FaFileUpload className='icon-file-drop' />
                <input {...getInputProps()} />
            </div>
            <div className="ring-container">
                    {
                        ring ?
                        <Zoom>
                            <Ring/>
                        </Zoom>
                        : null
                    }
            </div>
            <Button style={!dataReady ? {opacity: '0.4', cursor: 'default'} : null} onClick={dataReady ? handleLog : null} variant="outline-primary">Categories</Button>
        </div>
        )
}

export default FileDrop