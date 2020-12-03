import React from "react"
import parse, {domToReact} from "html-react-parser"
import {useSelector} from "react-redux"

const DataDisplay = (props) => {
  const images = useSelector(state => state.images)
  const video = useSelector(state => state.video)

  const options = {
      replace: (domNode) => {
        if (!domNode.attribs) {
          return
        }
        if (domNode.attribs.src) {
            // Extracting the name of the photo from the src attrib
            const mediaItems = domNode.attribs.src.split('/')
            // The name is the last item after being split by "/"
            const mediaItem = mediaItems.pop()

            if (domNode.name === 'img') {
              images.map((file) => {

                if (file.name === mediaItem) {
                  return domNode.attribs.src = file.data
                }
                // The src attribs with the url "" were the ones giving me trouble
                // The file name can still be extracted from src just in a different way then mediaItem
                else if (domNode.attribs.src.includes("interncache")) {
                  let completeSrc = domNode.attribs.src.split('/')
                  let srcFragement = completeSrc[5].split("?")
                  let srcID = srcFragement[0].split(".")
                  if (file.name.includes(srcID[0])) {
                    return domNode.attribs.src = file.data
                  }
                }
              })
            }
            else if (domNode.name === "video") {
              video.map((file) => {
                if (file.name === mediaItem) {
                  domNode.attribs.src = file.data
                }
                else if (domNode.attribs.src.includes("interncache")) {
                  let completeSrc = domNode.attribs.src.split('/')
                  let srcFragement = completeSrc[5].split("?")
                  let srcID = srcFragement[0].split(".")
                  if (file.name.includes(srcID[0])) {
                    domNode.attribs.src = file.data
                  }
                }
              })
            }
          }
        if (domNode.name === "a") {
          return (
            <a onClick={(e) => {
              e.preventDefault()
              let pathSplit = domNode.attribs.href.split('/')
              props.history.push(pathSplit[2])
            }} style={{cursor: "pointer"}}>{domToReact(domNode.children, options)}</a>
          )
        }
      }
    }
  
      
  
    return (
      parse(props.data, options)
    )
}

export default DataDisplay