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
   if(newTask.trim()!=""){
    if(editingIndex!=-1){
      const  updatedList = [...ToDoList]; //this copies the elements from toDolist array to new updatedList
      updatedList[editingIndex] = newTask; 
      setToDoList(updatedList);
      setEditingIndex(-1);  //this resets the index which is supposed to be edited

       
    
   } else{
    let newArray = [...ToDoList,newTask];
    setToDoList(newArray);
   
    setNewTask("");
}
}
}

function startEditing(index){
    setEditingIndex(index);  //this sets the editing index to task which is to be edited
   setNewTask(ToDoList[index]); // so what this does it,it updates the unput field with current value

}

function startDeleting(){

}
return(
    <div  style={{textAlign:"center"}}>
        <div className='AddTask'>

    <input type='text' value={newTask}  onChange={handleChange}/>
    <button onClick={addTask} ></button>

    </div>
    
    <div className='List'>
        <h2>TODO LIST : </h2>
        <ul>
            {ToDoList.map((task,index)=>{
                return <li key = {index}>
                    {task}
               <button className='edit-btn' onClick={()=>startEditing(index)}>Edit</button>
                <button className='delete-btn' onClick={()=>startDeleting} >Delete</button> </li>
            })}
        </ul>
  
    
     
    </div>
    </div>
);

}
export default List;
