import {TStatus} from "@customTypes/tickets";

export type TCard = {
    id: number
    status: TStatus
    name: string
    client: number
    artist: number
}