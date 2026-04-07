'use client'
import css from './style.module.scss'
import {useEffect} from "react";
import {useImmer} from "use-immer";
import {CommissionBoardColumn} from "@components/CommissionBoardColumn";
import {CommissionBoardCard} from "@components/CommissionBoardCard";
import {STATUS, updateStatus} from "@constants";
import {TCard} from "@customTypes/commissionBoard";
import {TStatus} from "@customTypes/tickets";

type TCommissionBoardProps = { cards: TCard[], title?: string }

export default function CommissionBoard({cards, title}: TCommissionBoardProps) {
    const [list, updateList] = useImmer<TCard[]>(cards)

    function handleDrop(e: any, newStatus: TStatus) {
        e.preventDefault()
        const cardID: string = e.dataTransfer?.getData("text/plain")
        updateList(arr => {
            const item = arr.find(el => el.id.toString() === cardID)
            if (item) item.status = newStatus
        })
        updateStatus(parseInt(cardID), newStatus)
    }

    useEffect(() => {
    }, [])
    return <div className={css.container}>
        {title && <div className={css.title}>{title}</div>}
        <div className={css.grid}>
            {STATUS.map((value, index) =>
                <CommissionBoardColumn key={index} onDrop={(e) => handleDrop(e, value)}>
                    {list.filter((item) => item.status === value).map((val) =>
                        <CommissionBoardCard card={val} key={val.id}/>)}
                </CommissionBoardColumn>)}
        </div>
    </div>
}