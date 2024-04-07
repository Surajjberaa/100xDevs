import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/SendMoney"
import { PaymentSuccess } from "./pages/PaymentSuccess"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/send" element={<SendMoney />}/>
          <Route path="/success" element={<PaymentSuccess />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
