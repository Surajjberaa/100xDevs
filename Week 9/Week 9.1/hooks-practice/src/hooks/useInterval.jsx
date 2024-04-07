import { useEffect } from "react";

export function useInterval(fn, timer){
    useEffect(()=>{
        setInterval(()=>{
            fn()
        }, timer)
},[])
}