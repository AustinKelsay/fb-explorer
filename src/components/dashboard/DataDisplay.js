import React, {useState} from "react"
import parse from "html-react-parser"
import {useSelector} from "react-redux"

const DataDisplay = (props) => {
  const media = useSelector(state => state.media)

  const options = {
      replace: (domNode) => {
        if (!domNode.attribs) {
          return
        }
        if (domNode.attribs.src) {
            const mediaItems = domNode.attribs.src.split('/')
            const mediaItem = mediaItems.pop()

            media.map((file) => {
              if (file.name == mediaItem) {
                domNode.attribs.src = file.data
              }
            })
          }
        }
      }
  
      
  
    return (
      parse(props.data, options)
    )
}

export default DataDisplay