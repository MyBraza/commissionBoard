export type TStatus = 'pending' | 'accepted' | 'inProgress' | 'forReview' | 'done'

export type TTicket = {
    id: number
    status: TStatus
    name: string
    description: string
    client: number
    artist: number
}