import {TicketInfo} from "@components/TicketInfo";
import {getTicket} from "@constants";

export default async function Page({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params
    const ticket = getTicket(parseInt(slug))
    return <main>{ticket ? <TicketInfo ticket={ticket}/> : <></>}</main>
}