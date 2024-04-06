import { useState } from "react"
import axios from "axios"

export const Balance = ({ value }) => {

    const [balance, setBalance] = useState()
        axios.get("http://localhost:3000/api/v1/account/balance", {
           headers: {
               Authorization: "Bearer " + localStorage.getItem("token")
           }
       })
        .then(e => { setBalance(parseFloat(e.data.balance).toFixed(2))})

    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {balance}
        </div>
    </div>
}