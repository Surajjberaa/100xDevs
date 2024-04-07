import { useState } from "react"
import { useEffect } from "react"

export function useDebounce(value, timer){

    const [debouncedValue , setDebouncedValue] = useState(value)
    useEffect(()=>{
    const int = setTimeout(()=>{
        setDebouncedValue(value)
        
    }, timer)
    return () => {
        clearTimeout(int)
    }
    }, [value, timer])
    return debouncedValue
}