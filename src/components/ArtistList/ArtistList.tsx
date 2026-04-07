import css from './style.module.scss'
import {TUser} from "@customTypes/users";
import Link from "next/link";

type TArtistListProps = { artists: TUser[] }

export default function ArtistList({artists}: TArtistListProps) {
    return <div className={css.container}>
        <div className={css.title}>Available Artists</div>
        <div className={css.grid}>
            {artists.map((item, index) =>
                <Link href={`/user/${item.id}`} key={index}>
                    <div className={css.item}>
                        <p>{item.name}</p>
                        <p>{item.tickets?.length && `Current orders ${item.tickets?.length}`}</p>
                    </div>
                </Link>)}
        </div>
    </div>
}

ArtistList.displayName = 'ArtistList'
