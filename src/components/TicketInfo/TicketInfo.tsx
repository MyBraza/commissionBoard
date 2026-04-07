import css from './style.module.scss'
import {TTicket} from "@customTypes/tickets";
import {getUser} from "@constants";
import Link from "next/link";

type TTicketInfoProps = { ticket: TTicket }

export default function TicketInfo({ticket}: TTicketInfoProps) {
    const {name, description, status, artist: artistID, client: clientID} = ticket
    const client = getUser(clientID)?.name
    const artist = getUser(artistID)?.name
    return <div className={css.container}>
        <h1>{name}</h1>
        <p>status: {status}</p>
        <p>{description}</p>
        <p><Link href={`/user/${clientID}`}>client: {client}</Link></p>
        <p><Link href={`/user/${artistID}`}>artist: {artist}</Link></p>
    </div>
}

TicketInfo.displayName = 'TicketInfo'
