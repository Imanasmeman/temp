import { useState } from 'react'

function App() {
  const [title, setTitle] = useState('DOM Title');
  const [UpdateCount, setUpdateCount] = useState(0);

  const handleUpdate = () => {
    const newCount = UpdateCount + 1;
    setUpdateCount(newCount);
    setTitle(`Title Updated ${newCount}`);
  };

  const headingStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: 'red',
    backgroundColor: 'black',
    padding: '20px',
    textAlign: 'center',
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: 'green',
    textAlign: 'center',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: 'antiquewhite',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'block',
    margin: '20px auto',
  };

  return (
    <>
      <h1 style={headingStyle}>{title}</h1>
      <p style={paragraphStyle}>Updated Title: {UpdateCount}</p>
      <button style={buttonStyle} onClick={handleUpdate}>Update Title</button>
    </>
  );
}

export default App;
