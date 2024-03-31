import { RecoilRoot, useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificaionSelector } from "./atoms"


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

  const network = useRecoilValue(networkAtom)
  const Jobs = useRecoilValue(jobsAtom)
  const messaging = useRecoilValue(messagingAtom)
  const notification = useRecoilValue(notificationAtom)
  const NotificaionSelector = useRecoilValue(totalNotificaionSelector)

  return(
    <div>
      <button>Home</button>

      <button>My Network ({network >= 100 ? "99+" : network})</button>
      <button>Jobs ({Jobs  >= 100 ? "99+" : Jobs})</button>
      <button>Messaging ({messaging  >= 100 ? "99+" : messaging})</button>
      <button>Notifications ({notification  >= 100 ? "99+" : notification})</button>

      <button>Me({NotificaionSelector})</button>
    </div>
  )
}

export default App
