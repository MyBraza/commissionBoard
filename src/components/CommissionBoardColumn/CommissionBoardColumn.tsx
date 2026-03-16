import css from './style.module.scss'
import {DragEventHandler, ReactNode} from "react";

type TCommissionBoardColumnProps = { onDrop: DragEventHandler, children?: ReactNode }

export default function CommissionBoardColumn({onDrop, children}: TCommissionBoardColumnProps) {
    const onDragEnter = (evt) => {
        evt.preventDefault();
        let element = evt.currentTarget;
        element.classList.add("dragged-over");
        evt.dataTransfer.dropEffect = "move";
    };
    const onDragLeave = (evt) => {
        let currentTarget = evt.currentTarget;
        let newTarget = evt.relatedTarget;
        if (newTarget?.parentNode === currentTarget || newTarget === currentTarget)
            return;
        evt.preventDefault();
        let element = evt.currentTarget;
        element.classList.remove("dragged-over");
    };
    const onDragOver = (evt) => {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "move";
    };
    return <div onDragOver={onDragOver} onDragLeave={onDragLeave} onDragEnter={onDragEnter} onDrop={onDrop}
                className={css.column}>{children}</div>
}

CommissionBoardColumn.displayName = 'CommissionBoardColumn'
