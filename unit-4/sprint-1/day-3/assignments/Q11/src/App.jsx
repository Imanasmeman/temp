import { useState } from 'react';

function Show() {
  const [show, setShow] = useState(false) 
  const handlebtn = () => {
    setShow(prev => !prev)
  } 
  return(
    <div style={{textAlign : 'center'}}>
      <button onClick={handlebtn} style={{width : '80px', borderRadius : '10px', backgroundColor : 'brown', color: 'white'}}>
        {show? 'Hide' : 'Show'}
      </button>
      {show && (<h1>Hello, welcome to React state management!</h1>)}
    </div>
  )
}

function App() {
  return (
    <>
      <Show />
    </>
  );
}

export default App;
