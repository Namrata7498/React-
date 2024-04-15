import React, {useState} from "react";
export default function Textform(props){
    const handlClick=()=>{
let newText= text.toLowerCase();
setText(newText);
    }
  const handlUpClick=()=>{
    // console.log("uppercase clicked" + text)
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
   
}
const ClearTClick=()=>{
    console.log("uppercase clicked" + text)
    let newText='';
    setText(newText);
    props.showAlert("text box cleared", "secondary")
}
const handleOnchange=(e)=>{
    setText(e.target.value);
}
const [text, setText]= useState('');

const handleCopy=()=>{
    var text= document.getElementById('mybox');
   text.select();
   navigator.clipboard.writeText(text.value);
   props.showAlert("copied to clipboard", "primary")


   }
   const handleExtraSpaces=()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "))
   }
    return(

        <><div class="container" style={{backgroundColor:props.mode==='dark'?'#38304b':'white' , color:props.mode==='dark'?'white':'black'}}>
            <div className="mb-3">
            <h1>{props.heading}</h1>
                <textarea className="form-control" id="mybox" value={text} style={{backgroundColor:props.mode==='dark'?'#38304b':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnchange}  rows="8"></textarea>
                <button className="btn btn-primary my-3" onClick={handlUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handlClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={ClearTClick}>Clear Text</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="conyainer">
                <h1>your text summary</h1>
                <p>your text have {text.split(" ").length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} minutes to read.</p>
                
                <h1>Preview</h1>
                <p>{text.length>0?text:"enter some text in above textbox to preview here"}</p>
                </div></div>
                
                </>
    )
}
