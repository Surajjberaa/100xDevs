import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import {  notifications, totalNotificaionSelector } from "./atoms"
import { useEffect } from "react"
import  axios  from "axios"


function App() {

  return (
    <>
      <RecoilRoot>
        <MainAPP/>
      </RecoilRoot>
    </>
  )
}

function MainAPP(){
  console.log("mainapp");

  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  console.log(networkCount);
  const NotificaionSelector = useRecoilValue(totalNotificaionSelector)


  return(
    <div>
      <button>Home</button>

      <button>My Network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs ({networkCount.jobs  >= 100 ? "99+" : networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging  >= 100 ? "99+" : networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications  >= 100 ? "99+" : networkCount.notifications})</button>

      <button>Me({NotificaionSelector})</button>
    </div>
  )
}

export default App
