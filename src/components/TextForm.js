import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase!","success");
  }
 
  const handleLowClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!","success");
  }
  
  const handleClearClick = () =>{
    let newText = text.toLowerCase();
    setText("")
    props.showAlert("Text cleared!","success");
  }

  const handleCopy = ()=>{
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied!","success");
    }

  const handleSpaces = ()=>{
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!","success");
  }


  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className='container' >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style = {{backgroundColor:props.mode==='dark'?'grey':'light'}} value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick = {handleLowClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick = {handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mx-2' onClick = {handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick = {handleSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-4" style = {{color:props.mode==='dark'?'white':'#053377'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>You can read this text in {0.008 * text.split(" ").length} minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
    </div>
    </>
  )
} 