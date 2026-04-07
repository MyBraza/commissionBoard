import css from './style.module.scss'
import Image from "next/image";
import logo from '@images/evil tutel.png'
import Link from "next/link";

type THeaderProps = {
    userID: number
}

export default function Header({userID}: THeaderProps) {
    return <div className={css.header}>
        <div><Link href={`/`}><Image className={css.image} src={logo} alt=''></Image></Link></div>
        <div><Link href={`/user/${userID}`}><Image className={css.image} src={logo} alt=''></Image></Link></div>
    </div>
}

Header.displayName = 'Header'
