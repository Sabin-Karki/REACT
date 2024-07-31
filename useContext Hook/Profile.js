import { ChangeProfile } from "./ChangeProfile"
import {  useContext } from "react"
import { Mycontext } from "../App"
export function Profile(){
    const{username}=useContext(Mycontext)
    return(
        
        <div>
        
           Profile,user is {username}
           <ChangeProfile/>
         </div> 
        
    );
}