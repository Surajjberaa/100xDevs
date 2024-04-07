import { useEffect } from "react";
import { useState } from "react";

export function useMousePointer(){
    const [mouse, setMouse] = useState({x:0, y:0})

    const handleMouseMove = (e)=>{
        setMouse({x: e.clientX, y: e.clientY})
    }

    useEffect(()=>{
        window.addEventListener("mousemove", handleMouseMove)
        return ()=>{
            window.removeEventListener("mousemove", handleMouseMove)
        }
    },[])

    return mouse
}