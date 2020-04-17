import React from "react"
import VsgEditor from "rsg-components-default/Editor"

export default function(props) {
  return React.createElement(VsgEditor, { ...props, editorPadding: 24 })
}
