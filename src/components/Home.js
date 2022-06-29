import React, {useState} from 'react';

export default function Form() {
    const Changetoup = ()=>{
console.log('Hi Clicked' + text)
let newText = text.toUpperCase();
setText(newText);
    }
    const handleOnchange = (event) => {
        console.log("Uppercase was clicked");
       
        setText(event.target.value);
    }
            const [text, setText] = useState('Enter Text here2');
  return (
    <><div className="mb-3">
          <label htmlFor="textbox" className="form-label">Home</label>
          <div className="mb-1">
          <textarea className='form-Control col-md-8' value={text} onChange={handleOnchange} id='textbox' rows='10'  ></textarea></div>
          <button className="btn btn-primary mt-2" onClick={Changetoup}>Uppercase</button>
      </div>
      <div className="container my-3">
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
      </div>
      </>
  )
}
