import React, {useState, useEffect} from "react"
import { useSelector } from 'react-redux'

const ImageData = (props) => {
    //get images and set to src
    const [src, setSrc] = useState((props.un ? props.un : ""));
    if (props.uri) {
        const dataLocation = "facebook-" + props.un + "-JSON/"
        import("../../" + dataLocation + props.uri.uri).then(img => setSrc(img.default));
        console.log("SRC", src)
    }

    return (
        (src && props.un.length > 2)
        ?
        <div className="image-container">
            <img src={src} />
        </div>
        :
        null
    )
}

const mapStateToProps = (state) => {
    return{
        un: state.user_fb_name
    }
}

export default ImageData;