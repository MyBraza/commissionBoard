import css from './layout.module.scss'
import './reset.scss'
import {ReactNode} from "react";

export default function RootLayout({children,}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <main className={css.wrapper}>
            <div className={css.container}>{children}</div>
        </main>
        </body>
        </html>
    )
}