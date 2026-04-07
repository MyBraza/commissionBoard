import {getAppState, getUser, getUserCommissions, getUserTickets} from "@constants";
import {CommissionBoard, CommissionBoardStatic} from "@components/CommissionBoard";
import {UserInfo} from "@components/UserInfo";

export default async function Page({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params
    const ID = parseInt(slug)
    const {userID} = getAppState()
    const ownProfile = ID === userID
    const user = getUser(ID)
    const tickets = getUserTickets(ID)
    const commissions = getUserCommissions(ID)
    return <div>
        {user && <UserInfo user={user}/>}
        {tickets ?
            (ownProfile
                ? <CommissionBoard cards={tickets} title={'Tickets'}/>
                : <CommissionBoardStatic cards={tickets} title={'Tickets'}/>)
            : <></>}
        {commissions ?
            <CommissionBoardStatic cards={commissions} title={'Commissions'}/>
            : <></>}
    </div>
}