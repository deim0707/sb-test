import {
    actionType,
    CHANGE_QUANTITY,
    CHANGE_PRICE,
    CHANGE_PROGRESS_STATUS,
} from "./types";

export const changeQuantityAction = (id:number, value: number): actionType => {
    return {
        type: CHANGE_QUANTITY,
        id: id,
        payload: value
    }
}

export const changePriceAction = (id:number, value: number): actionType => {
    return {
        type: CHANGE_PRICE,
        id: id,
        payload: value
    }
}

export const changeProgressStatus = (id:number, value: string): actionType => {
    return {
        type: CHANGE_PROGRESS_STATUS,
        id: id,
        payload: value
    }
}

// export const addFactAboutWork = (id:number, value: string): actionType => {
//     return {
//         type: ADD_FACT_ABOUT_WORK,
//         id: id,
//         payload: value
//     }
// }
//
// export const deleteFactAboutWork = (idProject:number, idxFact: number): actionType => {
//     return {
//         type: DELETE_FACT_ABOUT_WORK,
//         id: idProject,
//         payload: idxFact
//     }
// }
