import { useState, useRef } from 'react'
import './App.css'
 const initialFruits = ["Apple", "Banana", "Cherry", "Date"];

function App() {
 const [fruits, setFruits] = useState(initialFruits);
 const [searchTerm, setSearchTerm] = useState("");
 const searchInputRef = useRef();
 const addInputRef = useRef();
 const handleSearch = (e) => {
  setSearchTerm(e.target.value);
 }
 const handleAdd = () => {
  const newFruit = addInputRef.current.value.trim();
  if(newFruit) {
    setFruits((prev => [...prev, newFruit]));
    addInputRef.current.value = "";
  }
 };
 const handleRemove = (fruitToRemove) => {
         setFruits((prev) => prev.filter((fruit) => fruit !== fruitToRemove));
 };
 const handleReset = () => {
  setSearchTerm("");
  searchInputRef.current.value = "";
 };
   const filteredFruits = fruits.filter((fruit) => fruit.toLowerCase().includes(searchTerm.toLowerCase()));
   
  return (
    <div className='container'>
      <h1>Grocery List Manager</h1>
     <input type="text" placeholder='Search fruits...' ref={searchInputRef} onChange={handleSearch}/>
     <button onClick={handleReset}>Reset</button>
     <ul>
      {filteredFruits.map((fruit, index) => (<li key={index}>{fruit}
        <button onClick={() => handleRemove(fruit)}>X</button>
      </li>))}
        
     </ul> 
     <div>
      <input type="text" placeholder='Add a fruit...' ref={addInputRef}/>
      <button onClick={handleAdd}>Add</button>
     </div>
    </div>
  )
}

export default App
