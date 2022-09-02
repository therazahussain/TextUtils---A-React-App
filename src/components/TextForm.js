import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [text,setText] = useState("")

  function handletoUp(){
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase","success")
  }

  function handletoLo(){
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase","success")
  }

  function handletoCl(){
    setText("")
    props.showAlert("Cleared Box","success")
  }

  function handletobase46(){
    setText(btoa(text));
    props.showAlert("Converted to Base64 from String","success")
  }

  function handletoString(){
    setText(atob(text));
    props.showAlert("Converted to String From Base64","success")
  }

  function handleChange(event) {
    setText(event.target.value)
  }

 
  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="mybox" rows="6" value={text} onChange={handleChange} style={{color:props.mode==="dark"?"white":"black",backgroundColor:props.mode==="dark"?"#4c5258":"white"}}></textarea>
      </div>
    <button type="submit" className="btn btn-primary my-1 mx-1 " onClick={handletoUp}>Convert To Uppercase</button>
    <button type="submit" className="btn btn-primary my-1 mx-1" onClick={handletoLo}>Convert To Lowercase</button>
    <button type="submit" className="btn btn-primary my-1 mx-1" onClick={handletoCl}>Clear Text</button>
    <button type="submit" className="btn btn-primary my-1 mx-1" onClick={handletobase46}>Convert To Base64 from String</button>
    <button type="submit" className="btn btn-primary my-1 mx-1" onClick={handletoString}>Convert To String from Base64</button>
    </div>
    <div className="container my-2" style={{color:props.mode==="dark"?"white":"black"}}>
      <h2>Your text Summary</h2>
      <p>{text.split(" ").filter(word => {return(word.length !== 0)}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to Preview it here."}</p>
    </div>
    </>
  )
}

TextForm.propTypes = {heading: PropTypes.string.isRequired}