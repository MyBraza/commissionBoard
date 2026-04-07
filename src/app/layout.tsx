import css from './layout.module.scss'
import '@styles/reset.scss'
import {ReactNode} from "react";
import {Header} from "@components/Header";
import {getAppState} from "@constants";
import {Roboto} from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin']
})

export default function RootLayout({children,}: {
    children: ReactNode
}) {
    const appState = getAppState()
    return (
        <html lang="en" className={roboto.className}>
        <body>
        <Header userID={appState.userID}/>
        <main className={css.wrapper}>
            <div className={css.container}>{children}</div>
        </main>
        </body>
        </html>
    )
}