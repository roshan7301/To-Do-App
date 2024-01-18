import { useState } from "react";
import Input from "./Input";
import List from "./List";

function App() {
  let [todos, setTodos] = useState([]);
  let [editData, setEditData] = useState({
    index : '' , 
    data : ''
  })
  
  const addTodos = (value) =>{

    // todos.push(value)
    // setTodos([...todos])

   setTodos ([...todos, value])
    
  }
const deleteTodos = (value) =>{
  // todos.splice(index, 1)
  // setTodos([...todos]);

  let filteredTodos = todos.filter((val)=> val !== value)
  setTodos(filteredTodos);
  }


const editTodos = (index, data) => {
  setEditData({
    index,
    data
  })
}


const updateTodos = (index, data) =>{
  

  todos.splice(index, 1, data)
setTodos([...todos])

setEditData({
  index : '' , 
  data : ''
})

}

  
  return (
    <div className="container mt-4">
   <Input addTodos = {addTodos} editData = {editData} updateTodos = {updateTodos}></Input>
   <List todos = {todos} deleteTodos = {deleteTodos}  editTodos = {editTodos}></List>

    </div>
  );
}

export default App;
