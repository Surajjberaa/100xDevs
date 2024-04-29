import React from "react";

export default function({children}: {children: React.ReactNode}){
    return (
        <div>
        <div>Sign in now to get a 10% bonus</div>
        {children}
        </div>
    )
}