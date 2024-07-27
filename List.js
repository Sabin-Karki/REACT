import './List.css'
import { useState } from 'react';

function List(){
const [ToDoList,setToDoList] = useState([]);
const [newTask,setNewTask] = useState("");
const [editingIndex,setEditingIndex] = useState(-1); //since,no task is ediited initially


function handleChange(event){
setNewTask(event.target.value);
}

function addTask(){
    let newArray = [...ToDoList,newTask];
    setToDoList(newArray);
    setNewTask(" ");
}
return(
    <div  style={{textAlign:"center"}}>
        <div className='AddTask'>

    <input type='text' value={newTask}  onChange={handleChange}/>
    <button onClick={addTask} >Add Task</button>

    </div>
    
    <div className='List'>
        <h2>TODO LIST : </h2>
        <ol>
            {ToDoList.map((task,key)=>{
                return <li key = {key}>{task}</li>
            })}
        </ol>
    <button className='edit-btn'>Edit</button>
    <button className='delete-btn'>Delete</button>
     
    </div>
    </div>
);

}
export default List;