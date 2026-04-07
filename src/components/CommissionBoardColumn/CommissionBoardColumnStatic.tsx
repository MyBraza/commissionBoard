import css from './style.module.scss'
import {ReactNode} from "react";

type TCommissionBoardColumnStaticProps = { children?: ReactNode }

export default function CommissionBoardColumnStatic({children}: TCommissionBoardColumnStaticProps) {
    return <div className={css.column}>{children}</div>
}

CommissionBoardColumnStatic.displayName = 'CommissionBoardColumn'
