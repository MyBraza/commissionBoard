'use client'
import css from './style.module.scss'
import {useEffect} from "react";
import {useImmer} from "use-immer";
import {CommissionBoardColumn} from "@components/CommissionBoardColumn";
import {TStatus} from "@types/commissionBoard";
import {CommissionBoardCard} from "@components/CommissionBoardCard";

const STATUS: Array<TStatus> = ['pending', 'accepted', 'inProgress', 'forReview', 'done']

type TCard = {
    id: number
    status: TStatus
}

const cards: Array<TCard> = [{id: 0, status: 'pending'}, {id: 1, status: 'pending'}, {id: 2, status: 'pending'}, {
    id: 3,
    status: 'pending'
}, {id: 4, status: 'pending'}]

export default function CommissionBoard() {
    const [list, updateList] = useImmer<Array<TCard>>(cards)

    function onDragStart(evt, id) {
        let element = evt.currentTarget;
        element.classList.add("dragged");
        evt.dataTransfer.setData("text/plain", id);
        evt.dataTransfer.effectAllowed = "move";
        console.log(evt.currentTarget.id)
    }

    function handleDrop(e: any, newStatus: TStatus) {
        e.preventDefault()
        const cardID = e.dataTransfer?.getData("text/plain")
        console.log(cardID)
        updateList(arr => {
            const item = arr.find(el => el.id.toString() === cardID)
            if (item) item.status = newStatus
        })
    }

    useEffect(() => {
    }, [])
    return <div className={css.container}>
        {STATUS.map((value, index) =>
            <CommissionBoardColumn key={index} onDrop={(e) => handleDrop(e, value)}>
                {list.filter((el) => el.status === value).map((val) =>
                    <CommissionBoardCard onDragStart={(e) => onDragStart(e, val.id)} status={val.status}
                                         id={val.id} key={val.id}/>)}
            </CommissionBoardColumn>)}
    </div>
}