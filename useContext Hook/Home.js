import { useContext } from "react";
import { Mycontext } from "../App";
export const Home = ()=> {
    const{username}=useContext(Mycontext);
    return <h1>this is literally the home page and name iz : {username}</h1>
};