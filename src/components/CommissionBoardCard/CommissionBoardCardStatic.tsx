import css from './style.module.scss'
import {TCard} from "@customTypes/commissionBoard";
import Link from "next/link";
import {getUser} from "@constants";

type TCommissionBoardCardStaticProps = { card: TCard, }

export default function CommissionBoardCard({card}: TCommissionBoardCardStaticProps) {
    const {id, name, status, artist: artistID, client: clientID} = card
    const client = getUser(clientID)?.name
    const artist = getUser(artistID)?.name

    return <Link href={`/ticket/${id}`}>
        <div className={css.card}>
            <div className={css.text}>{name}</div>
            <div>client: {client}</div>
            <div>artist: {artist}</div>
            <div>status: {status}</div>
        </div>
    </Link>
}

CommissionBoardCard.displayName = 'CommissionBoardCard'
