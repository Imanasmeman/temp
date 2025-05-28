function DynamicList(){
  const items = ["React", "Javascript", "CSS"]

  return(
    <div>
      <h1>Technology List</h1>
      <ul>{
          items.map((item) =>
            <li>{item}</li>
             )
        }
      </ul>
    </div>
  )
}

function App(){
   return(
    <div>
       <DynamicList />
    </div>
   );
}

export default App;