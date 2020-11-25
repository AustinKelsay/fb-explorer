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
              const mediaName = mediaItem.split('.')
              console.log(`blob:https://localhost:3000/${mediaName[0]}`)

            //   return(
            //       <img src={`blob:https://localhost:3000/${mediaName[0]}`} className={domNode.attribs.class} />
            //   )
            }
          }
        }
  
      
  
      return (
        parse(props.data, options)
      )
}

export default DataDisplay