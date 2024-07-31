import { useContext } from "react";
import { Mycontext } from "../App";

export const Contact = ()=> {
    const{username} = useContext(Mycontext)
    return <h1>this is literally the contact page: {username} </h1>
};