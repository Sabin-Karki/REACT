import './Form.css'
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'  //this is for validation
export function Form(){
   
    const schema = yup.object().shape({
        fullname: yup.string().required("Full name is required"),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().required(),
        password: yup.string().min(4).max(12).required("incorrect format"),
        confirm: yup.string().oneOf([yup.ref("password"),null]).required("passwords don't match")
    });
   
    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver: yupResolver(schema)  //a resolver is where we specify how schema will look like
    });
    
    const onSubmit = (data)=>{
   console.log(data) 
   };
    return(
   
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>FORM </h1>
            <input type="text " placeholder="Enter your name" {...register("fullname")} /><br/>
            <p>{errors.fullname?.message}</p>
            <input type = "text" placeholder = "Email..." {...register("email")}/><br/>
            <p>{errors.email?.message}</p>
            <input type ="number" placeholder = "age.." {...register("age")}/><br/>
            <p>{errors.age?.message}</p>
            <input type = "password" placeholder = "password..." {...register("password")}/><br/>
            <p>{errors.password?.message}</p>
            <input type = "password" placeholder = "confirm"  {...register("confirm")}/>
            <p>{errors.confirm?.message}</p>
            <button > Submit</button>
        </form>
    );
}