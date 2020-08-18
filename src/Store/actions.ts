import {
    actionType,
    factAboutWork,
    CHANGE_PROGRESS_STATUS,
    ADD_FACT_ABOUT_WORK,
    DELETE_FACT_ABOUT_WORK
} from "./types";


export const changeProgressStatus = (id: number, value: string): actionType => {
    return {
        type: CHANGE_PROGRESS_STATUS,
        id: id,
        payload: value
    }
}

export const addFactAboutWork = (id: number, value: factAboutWork): actionType => {
    return {
        type: ADD_FACT_ABOUT_WORK,
        id: id,
        payload: value
    }
}

export const deleteFactAboutWork = (idProject: number, idItem: number): actionType => {
    return {
        type: DELETE_FACT_ABOUT_WORK,
        idProject: idProject,
        idItem: idItem
    }
}
