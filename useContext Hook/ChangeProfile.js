import { createContext, useState } from "react";
import { useContext } from "react";
import { Mycontext } from "../App";
export  function ChangeProfile() {
  const [newUsername,setNewname] = useState("");
  const {setusername} =useContext(Mycontext); 
  return(
    <div>
      <input onChange={(event)=>{
        setNewname(event.target.value)
      }}
      />
      <button onClick={()=>{
     setusername(newUsername)
      }}>change username</button>
    </div>
  );
}
