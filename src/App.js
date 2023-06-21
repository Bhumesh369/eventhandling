import React, { useState } from "react";

const App = ()=>{
  const purple = "#8e44ad";
  const [bg,setBg] = useState(purple);
  const [name, newName ] = useState('Click Me');
  const NewPage = ()=>{
    let newColor = "pink"
    setBg(newColor);
    newName('Ouch !!🫣')

  }
  return(
    <>
    <div style={{backgroundColor: bg }}>
    <button onClick={NewPage}> {name} </button>
    <button onDoubleClick={NewPage}>{name}</button>
    <button onMouseOver={NewPage} onMouseLeave={NewPage}>{name}</button>
    </div>
    </>
  );
}

export default App;
