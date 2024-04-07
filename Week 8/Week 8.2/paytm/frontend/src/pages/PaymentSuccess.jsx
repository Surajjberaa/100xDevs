import { useNavigate } from "react-router-dom"

export const PaymentSuccess = () => {
    const navigate = useNavigate()
    return <div>
    <div className="bg-slate-300 flex h-screen justify-center ">
        <div  className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-2">
            Payment Successfull <br />
            Redirecting to Dashboard.....
            </div>
        </div>
    </div>
    {setTimeout(() => {
        navigate("/dashboard")
    }, 3000)}
    </div>
}