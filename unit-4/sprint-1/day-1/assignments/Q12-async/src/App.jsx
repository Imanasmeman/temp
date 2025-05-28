function Technology(){
  const items = ["React", "Javascript", "CSS"]
    return(
      <div>
      <h1>Technologies List</h1>
      <ul>
        {
          items.map((item) => <li>{item}</li>)
        }
      </ul>
      </div>
    )
  

}

function App() {
 

  return (
    <>
     <Technology/>
    </>
  )
}

export default App
