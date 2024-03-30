import { createContext } from "react";
import { useContext } from "react";

export const CountContext = createContext({
    count: 0, setCount: ()=>{}
});