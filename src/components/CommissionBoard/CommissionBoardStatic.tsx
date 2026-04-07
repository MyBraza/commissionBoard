import css from './style.module.scss'
import {CommissionBoardColumnStatic} from "@components/CommissionBoardColumn";
import {CommissionBoardCardStatic} from "@components/CommissionBoardCard";
import {STATUS} from "@constants";
import {TCard} from "@customTypes/commissionBoard";

type TCommissionBoardStaticProps = { cards: TCard[], title?: string }

export default function CommissionBoardStatic({cards, title}: TCommissionBoardStaticProps) {

    return <div className={css.container}>
        {title && <div className={css.title}>{title}</div>}
        <div className={css.grid}>
            {STATUS.map((value, index) =>
                <CommissionBoardColumnStatic key={index}>
                    {cards.filter((item) => item.status === value).map((val) =>
                        <CommissionBoardCardStatic card={val} key={val.id}/>)}
                </CommissionBoardColumnStatic>)}
        </div>
    </div>
}

CommissionBoardStatic.displayName = 'CommissionBoardStatic'