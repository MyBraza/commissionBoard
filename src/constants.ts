import {TCard} from "@customTypes/commissionBoard";
import {TStatus, TTicket} from "@customTypes/tickets";
import {TUser} from "@customTypes/users";
import {TAppState} from "@customTypes/appState";

export const STATUS: TStatus[] = ['pending', 'accepted', 'inProgress', 'forReview', 'done']

export const TICKETS: TTicket[] = [
    {
        id: 0,
        status: 'pending',
        name: 'driving in my car',
        description: 'right after a beer',
        artist: 0,
        client: 1
    },
    {
        id: 1,
        status: 'pending',
        name: 'lonely lonely',
        description: 'I feel so lonely',
        artist: 2,
        client: 1
    },
    {
        id: 2,
        status: 'pending',
        name: 'evil timmy',
        description: 'i\'m gonna motorboat it hard ',
        artist: 0,
        client: 1
    },
    {
        id: 3,
        status: 'pending',
        name: 'feet pics',
        description: 'sniffa',
        artist: 0,
        client: 2
    },
    {
        id: 4,
        status: 'pending',
        name: 'twinkissing',
        description: 'incest is wincest',
        artist: 0,
        client: 1
    },
]

export const getTicket = (id: number): TTicket | undefined => {
    return TICKETS.find((item) => item.id === id)
}

export const getCard = (item: TTicket): TCard => {
    return {
        id: item.id,
        name: item.name,
        status: item.status,
        client: item.client,
        artist: item.artist
    }
}

export const getCardByID = (id: number): TCard | undefined => {
    const item = getTicket(id)
    return item ? getCard(item) : undefined
}

export const getCards = (): TCard[] => TICKETS.map((item) => getCard(item))

export const updateStatus = (id: number, status: TStatus): void => {
    const index = TICKETS.findIndex(el => el.id === id)
    if (index >= 0) TICKETS[index] = {...TICKETS[index], status: status}
}

export const USERS: TUser[] = [
    {
        id: 0,
        name: 'Troobs',
        tickets: [0, 2, 3, 4],
        commissionsOpen: true
    },
    {
        id: 1,
        name: 'Braza',
        commissions: [0, 1, 2, 4]
    },
    {
        id: 2,
        name: 'Rayforn',
        tickets: [1],
        commissions: [3],
        commissionsOpen: true
    }
]

export const getUser = (id: number): TUser | undefined => USERS.find((item) => item.id === id)

export const getUserTickets = (id: number): TCard[] | undefined =>
    USERS.find((item) => item.id === id)?.tickets
        ?.map((val) => getCardByID(val))
        .filter((item1) => item1 !== undefined)

export const getUserCommissions = (id: number): TCard[] | undefined =>
    USERS.find((item) => item.id === id)?.commissions
        ?.map((val) => getCardByID(val))
        .filter((item1) => item1 !== undefined)

export const APP_STATE: TAppState = {
    userID: 0
}

export const getAppState = (): TAppState => APP_STATE

export const getArtistList = (): TUser[] => USERS.filter((item) => item.commissionsOpen)