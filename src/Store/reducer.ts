import {ProjectItemType, actionType} from './types'

import initialState from "./initialState";


const changeOneItem = (state: ProjectItemType[], id: number, changes?: any): ProjectItemType[] => {
    return state.map((item: ProjectItemType) => {
        if (item.id === id) return {...item, ...changes}
        else return item
    })
}


const arrayWithFacts = (state: ProjectItemType[], id: number):string[] => {
    const idxArray = state.findIndex((item: ProjectItemType) => item.id === id);
    return state[idxArray].factsAboutWork
}

const reducerProjects = (state = initialState, action: actionType): ProjectItemType[] => {
    switch (action.type) {
        case 'CHANGE_QUANTITY':
            return changeOneItem(state, action.id, {quantity: action.payload});

        case 'CHANGE_PRICE':
            return changeOneItem(state, action.id, {price: action.payload});

        case 'CHANGE_PROGRESS_STATUS':
            return changeOneItem(state, action.id, {progress: action.payload});

        case 'ADD_FACT_ABOUT_WORK':
            return changeOneItem(state, action.id,
                {factsAboutWork: [...arrayWithFacts(state,action.id), action.payload]}
                );

        default:
            return state;
    }
}

export default reducerProjects;