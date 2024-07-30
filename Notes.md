# This is basically a note because i dont want to create a new file everytime or overflow same file

import './App.css';

function App() {
  // //conditional rendering without ternary
  // let boyAge=21;
  // if(boyAge>=21){
  //   return <h7>he can drink</h7>
  // }else{
  //   return <h7>he cannot drink</h7>
  // }
 return( <div className="App">
<GetUser name="Ramesh" age={18} salary={20000} department="Manager"/>
<GetUser name="Sabin" age={19} salary={4000} department="Assistant"/>
<GetUser/>
<New/>
<Condition/>


<button>this is a button</button>
</div>
 );
}



const GetUser =(props) => {


return( <div>
  <h1>{props.name}</h1>
  <h2>{props.age}</h2>
  <h3>{props.department}</h3>
  <p className="className">This is a example</p>


</div>
);
};

# ABOVE IS EARLY STAGE

  # how to import component from next file
  export function GetUser()-1st file
  import {GetUser} from './GetUser'


  # importing css

import './App.css>



# Adding CSS in react

function New(){
  let message=<p>laughing all the way</p>

  return (<div className="try">
    <h6>i am tired</h6>
    
    {message}
    
 </div>
  );
}


# Conditional Rendering
//using ternary operator -> condition?yes:no

This functional component contains example of conditional operator

 function Condition(){
  const age=20;
  const isGreen=true;

return
  <div>
  { age > 18?<p> he can vote</p>:<p>he cannot vote </p>}
  <p style={{color: isGreen ? "orange":"darkgreen"}}>This is just a simple text</p>
  </div>

//extra {} is used for styling jsx inside component in react






## List

function App() {
   const Names=["harry","ram","jk","denji"];
  return(
  <div className='App'>
   {Names.map((name,key)=>{
    return <h1 key={key}>{name}</h1> //.map creates a new array which contains ,use callback function,it create new array name by looping through every original array ,whenever inside jsx,always use {} to decleare js
   })}
  </div>

 );
}

## Objects inside Array

# first exampel
  const Users=[
    {name:"Sabin" , age:13},
    {name :"Makima" , age:4000}


  ]

  return(
    <div className='App'>
     {Users.map((user,key)=>{
      return <h1><User name={user.name} age={user.age}/></h1>
     })}

    </div>
  )


const User = (props)=>{
  return(
       <div>
       {props.name} {props.age}
       </div>
  );
}

# 2nd example
  const Planet=[
    {name:"Earth" ,  isGasPlanet:"false"},
    {name:"Mars",   isGasPlanet:"false"},
    {name:"Jupiter", isGasPlanet:"true"}       
  ]
return(
    <div className='App'>
      {Planet.map((planet,key)=>{
        return <h1 key={key}><Planets name={planet.name}  isGasPlanet={planet.isGasPlanet} /></h1>
      })}
    </div>
);


function Planets(props){
  return(
     <div>
      {props.name} {props.isGasPlanet}
     </div>
  );
}

# STATES IN REACT

import {useState} from "react"




function App(){
  let [age ,exAge] = useState(0); // any variable in first,in 2nd function  to update the variable ,and in useState(put initial value)


  function increaseAge(){
  exAge(++age);
  console.log(age);
  }
  return(
    <h1 className='App' onClick={increaseAge}>
      {age}<button>Increase Age</button>
    </h1>
  );
}

# event.target.value

  const [inputValue,setInput]=useState("");

function inputMethod(event){
  console.log(event.target.value);//when u wanna grab something from input,what user has written do this!!!
  setInput(event.target.value);
  

  
}
 
  
  return(
     <div className='App'  >
      <input type='text' onChange={inputMethod} />
      {inputValue}
     </div>
  );

  # Using useState hook for various purpose
  const [showText,setShowText]=useState("red");
  const[showColor,setColor]=useState("orange");



  

 
  
  return(
    
    // anonymous function
 
    <div className='App'>
   <button onClick={()=>{
   setShowText("blue");
    }} >show/hide</button>

  {/* {showText==true &&<h1>My name is sabin karki</h1>}    */}
   {/* logical conditional rendering */}
   

<h1 style={{color:showText}}>my name is lelouch singh jeet</h1>

<button onClick={()=>{
  setColor("black");
}}>Hello Jeet putra</button>
<h2 style={{color:showColor}}>my name is baljeet singh jeet</h2>
   </div>

   
  );
}
## stateHook for counter
const [count,setCount]=useState(0);

function handleIncrement(){
  setCount(prevCount=>prevCount+1);
}
function handleDecrement(){
  setCount(prevCount => prevCount-1);

}
function setToZero(){
  setCount(0);
}

  return (
<div className='App' 

>
  <button onClick={handleIncrement}>
increase
  </button>
  <button onClick={handleDecrement}>
decrease
  </button>
  <button onClick={setToZero}>
set to zero
  </button>
  {count}
</div>
  );
}

# USE EFFECT HOOK
THIS IS USE TO CHANGE DEPENDING ON COMPONENT LIFECYCLE
const [text,setText] =  useState("");
      useEffect(()=>{
        console.log("compound mounted")
      })
  return(
    <div className='App'>
      
<input onChange={(event)=>{
  setText(event.target.value)
   

}}
/>
<h1>{text}</h1>
<button onClick={()=>{}}>
  show text
</button>

    </div>


# FETCHING API USING useEffect

import Axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';

function Cat(){
 const [catFact,setCatFact] =  useState("");

 function fetchCatFact(){
    Axios.get("https://catfact.ninja/fact").then((res)=>{
        setCatFact(res.data.fact);
 });
}


 useEffect(()=>{
 
   fetchCatFact();

},[]);

    return(
        <div className='Cat' >
        <button  onClick={fetchCatFact}>DISPLAY CAT FACT</button>
        <p>{catFact}</p>
        </div>
    )
}

# router dom

import './App.css';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
function App() {
  return 
    <div className="App">
    <Router>
      <Routes>
     <Route path="/" element = {<Home/>} />
 
     <Route path="/menu" element = {<Menu/>} />
    
     <Route path="/contact" element = {<Contact/>} />
     
      </Routes>
    </Router>
    
  </div>


 export default App;

