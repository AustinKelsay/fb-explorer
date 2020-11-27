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
        // if (domNode.attribs.href) {
        //   console.log(domNode)
        //   return (
        //     <a href={domNode.attribs.href} onClick={(e) => {
        //       e.preventDefault()
        //       props.history.push(domNode.attribs.href)
        //     }} style={{cursor: "pointer"}}>{domNode.children[0] ? domNode.children[0] : null}</a>
        //   )
        //   }
        
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