import {atom, selector} from "recoil"

 export const networkAtom = atom({
    key: "networkAtom",
    default: 112
 })

 export const jobsAtom = atom({
    key: "jobsAtom",
    default: 2
 })

 export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
 })

 export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
 })

 export const totalNotificaionSelector = selector({
    key: "totalNotificaionSelector",
    get: ({get}) => {
        const networkAtomCount = get(networkAtom)
        const jobsAtomCount = get(jobsAtom)
        const messagingAtomCount = get(messagingAtom)
        const notificationAtomCount = get(notificationAtom)

        return networkAtomCount + jobsAtomCount + messagingAtomCount + notificationAtomCount
    }

 })