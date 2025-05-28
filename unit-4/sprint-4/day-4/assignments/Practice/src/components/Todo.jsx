import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constant";

export default function Todos(){
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    async function fetchTodos() {
        const response = await axios.get(BASE_URL);
        console.log(response.data)
        setTodos(response.data)
       }

       async function addTodo() {
        if(!title){ alert("Please Enter a Valid Title")
            return
        }
       else{
        alert("Todo Added Successfully!")
       }
         await axios.post(BASE_URL, {title, completed: false});
         setTitle("");
         fetchTodos();
       }

       async function handleDelete(id){
        await axios.delete(`${BASE_URL}/${id}`);
           fetchTodos();
       }
       async function handleToggle(id, status) {
            await axios.patch(`${BASE_URL}/${id}`, {completed: !status})
            fetchTodos()
       }
       useEffect(() => {
        fetchTodos()
       }, [])
    return(
        <div>
            <h1 style={{textAlign: "center"}}>Add Todos</h1>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <input type="text" placeholder="Enter Todo" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button onClick={addTodo}>Add</button>
            </div>
            <h1 style={{textAlign: "center"}}>Todos</h1>
        <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
            {todos.map((todo) => (
                <div key={todo.id} style={{border: "1px solid white", alignItems: "center", textAlign: "center"} }>
                    <h2>{todo.title}</h2>
                    <p>{todo.completed? "completed" : "incomplete"}</p>
                    <button onClick={() => handleToggle(todo.id, todo.completed)}>{todo.completed? "Mark Incomplete" : "Mark Completed"}</button>
                    <button onClick={() => handleDelete(todo.id)} style={{backgroundColor: "teal"}}>Delete</button>
                </div>
            ))}
    </div>
    </div>
    )
}