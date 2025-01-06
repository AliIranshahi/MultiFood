import { useContext } from "react";
import { ThemContext } from "../context/ThemContex";
export const useThem = () =>{
    const context = useContext(ThemContext);
    if(context===undefined){
        throw new Error("context is not defind")
    }
    return context; 
}