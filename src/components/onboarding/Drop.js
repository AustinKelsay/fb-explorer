import React, {useState} from "react"
import {Link} from "react-router-dom"
import {useDropzone} from "react-dropzone"
import {useDispatch } from 'react-redux'
import {GET_INDEX_HTML, POPULATE_CATEGORIES, USER_DATA, POPULATE_IMAGES, POPULATE_VIDEO} from "../../store/Actions"
import {FaFileUpload} from "react-icons/fa"
import { Ring } from 'react-spinners-css';
import {FaHandPointDown} from "react-icons/fa"
import Zoom from 'react-reveal/Zoom';

const Drop = (props) => {
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

    const handleLog = (e) => {
        e.preventDefault()
        alert("Pages with many photos/videos may experience a delay when rendering")
        dispatch({type: USER_DATA})
        props.history.push('/categories')
    }

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
        onDrop: (acceptedFiles) => {
            acceptedFiles.map((file) => {
                ringTimer()
                const reader = new FileReader()
                reader.onload = function(event) {
                    
                    //split up into multiple cases
                    if (file.type === "image/jpeg" || file.type === "image/png" || file.type.includes("image")) {
                        dispatch({type: POPULATE_IMAGES, payload: {name: file.name, data: URL.createObjectURL(file)}})
                    }
                    if (file.type === "video/mp4" || file.type.includes('video') || file.type.includes('mp4')) {
                        dispatch({type: POPULATE_VIDEO, payload: {name: file.name, data: URL.createObjectURL(file)}})
                    }                    
                    if (file.name === 'index.html') {
                        dispatch({type: GET_INDEX_HTML, payload: event.target.result})
                    }
                    else if (file.name.includes('.html')) {
                        const path = file.path.split("/")
                        dispatch({type: POPULATE_CATEGORIES, payload: {path: path[2], name: file.name, data: event.target.result}})
                    }
                    else {
                        if (file.type && file.type.includes("image")) {
                            try {
                                dispatch({type: POPULATE_IMAGES, payload: {name: file.name, data: URL.createObjectURL(file)}})
                            }
                            catch {
                                console.log(file)
                            }
                        }
                        else if (file.type && file.type.includes("video")) {
                            try {
                                dispatch({type: POPULATE_VIDEO, payload: {name: file.name, data: URL.createObjectURL(file)}})
                            }
                            catch {
                                console.log(file)
                            }
                        }
                        else {
                            console.log(file)
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

    return (
        <div className="landing">
            <h1 className="logo" >fbexplorer</h1>

            <div className="description">
                <p>You can now take the folder with all of your Facebook data and drop it into the file input below.</p>
                <p>fbexplorer WILL render whatever Facebook data is dropped in but will NOT remember it.</p>
                <p>Your Facebook information will NEVER be stored or collected in this app.</p>
                <h2 className="step-drop">Step 3: Drop your data below and start exploring!</h2>

                <div className='file-drop'>
                <FaHandPointDown className='icon-hand-point-down' />
                    <div className='file-box' {...getRootProps()}>
                    <div className="ring-container">
                            {
                                ring ?
                                <Zoom>
                                    <Ring/>
                                </Zoom>
                                : <FaFileUpload className='icon-file-drop' />
                                
                            }
                    </div>
                        <input {...getInputProps()} />
                    </div>
                    
                </div>
                <div className="button-container-download">
                    <Link to='/' className='next-drop'>Back</Link>
                    <Link style={!dataReady ? {opacity: '0.4', cursor: 'default'} : null} onClick={dataReady ? handleLog : null} className={dataReady ? 'glowing' : 'next-drop'}>Explore</Link>
                </div>
            </div>
        </div>
    )
}

export default Drop