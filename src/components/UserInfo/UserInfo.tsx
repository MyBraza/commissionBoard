import css from './style.module.scss'
import {TUser} from "@customTypes/users";

type TUserInfoProps = { user: TUser }

export default function UserInfo({user}: TUserInfoProps) {
    const {name, contactInfo} = user
    return <div className={css.container}>
        <h1>{name}</h1>
        {contactInfo && <p>{contactInfo}</p>}
    </div>
}

UserInfo.displayName = 'UserInfo'
