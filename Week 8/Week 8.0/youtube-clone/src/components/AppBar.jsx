import { SearchBar } from "./SearchBar"
import { Signin } from "./Signin"
 
export const AppBar = () => {
  return (
    <div className="flex justify-between align-middle p-3 " >  
        <div >
        <div className="text-md inline-flex items-center pb-2 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list w-7 h-7 z-10" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
            <img src="\youtubeLogo.jpg" alt="" className="w-35 h-20 absolute pl-8 "/>
        </div>
        </div>
        <div><SearchBar/></div>
        <div className="text-md inline-flex items-center pb-2 ">
            <Signin/>
        </div>
    </div>
  )
}

