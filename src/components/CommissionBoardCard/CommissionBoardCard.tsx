import css from './style.module.scss'
import {TStatus} from "@types/commissionBoard";
import {DragEventHandler} from "react";

type TCommissionBoardCardProps = { status: TStatus, onDragStart: DragEventHandler, id: number }

export default function CommissionBoardCard({status, onDragStart, id}: TCommissionBoardCardProps) {
    function onDragEnd(evt) {
        evt.currentTarget.classList.remove("dragged");
        console.log('dragEnd')
    }

    return <div draggable={true} onDragStart={onDragStart} onDragEnd={onDragEnd} className={css.card}>
        <div className={css.text}>{status} {id}</div>
    </div>
}

CommissionBoardCard.displayName = 'CommissionBoardCard'
