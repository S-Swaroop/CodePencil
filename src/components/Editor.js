import React , { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlEditor} from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt , faExpandAlt } from '@fortawesome/free-solid-svg-icons'

function Editor(props) {
    const [open , setOpen] = useState(true) ; 
    const {
        language , 
        displayName ,
        value , 
        onChange , 
    } = props ; 

    function handleChange(editor , data , value){
        onChange(value) ; 
    }

    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">
                {displayName}
                <button onClick={()=>setOpen(!open)} type="button" className="btn"> <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} /></button>
            </div>
            <ControlEditor 
                onBeforeChange={handleChange}
                value={value} 
                className="codemirror-wrapper"
                options={{
                    lineWrapping : true , 
                    lint : true , 
                    mode : language , 
                    theme : 'material' , 
                    lineNumbers : true
                }}
            ></ControlEditor>
        </div>
    )
}

export default Editor
