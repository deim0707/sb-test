export interface ProjectItemType {
    id: number,
    title: string,
    description: string,
    progress: string,
    // progress: number,
    quantity: number,
    price: number,
    factsAboutWork: string[]
}

export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
interface ChangeQuantityInterface {
    type: typeof CHANGE_QUANTITY,
    id: number,
    payload: number
}

export const CHANGE_PRICE = 'CHANGE_PRICE';
interface ChangePriceInterface {
    type: typeof CHANGE_PRICE,
    id: number,
    payload: number
}

export const CHANGE_PROGRESS_STATUS = 'CHANGE_PROGRESS_STATUS';
interface ChangeProgressStatusInterface {
    type: typeof CHANGE_PROGRESS_STATUS,
    id: number,
    payload: string
}

export const ADD_FACT_ABOUT_WORK = 'ADD_FACT_ABOUT_WORK';
interface AddFactAboutWorkInterface {
    type: typeof ADD_FACT_ABOUT_WORK,
    id: number,
    payload: string
}


export type actionType = ChangeQuantityInterface | ChangePriceInterface | ChangeProgressStatusInterface | AddFactAboutWorkInterface;