import { ProjectItemType, factAboutWork, actionType } from './types'
import { findItemInState } from "../helpers";
import initialState from "./initialState";


const changeOneItem = (state: ProjectItemType[], id: number, changes: any): ProjectItemType[] =>
    state.map((item: ProjectItemType) => {
        if (item.id === id) return { ...item, ...changes }
        else return item
    })


const arrayWithFacts = (state: ProjectItemType[], id: number): factAboutWork[] => state[findItemInState(state, id)].factsAboutWork


const reducerProjects = (state = initialState, action: actionType): ProjectItemType[] => {
    switch (action.type) {
        case 'CHANGE_QUANTITY':
            return changeOneItem(state, action.id, { quantity: action.payload });

        case 'CHANGE_PRICE':
            return changeOneItem(state, action.id, { price: action.payload });

        // РЕАЛИЗОВАТЬ:
        case 'CHANGE_PROGRESS_STATUS':
            console.log(action.payload)
            return changeOneItem(state, action.id, { progress: action.payload });

        case 'ADD_FACT_ABOUT_WORK':
            return changeOneItem(state, action.id,
                { factsAboutWork: arrayWithFacts(state, action.id).push(action.payload) }
            );

        // РЕАЛИЗОВАТЬ:
        case 'DELETE_FACT_ABOUT_WORK':
            return changeOneItem(state, action.idProject,
                {
                    factsAboutWork: arrayWithFacts(state, action.idProject).filter((item, idx) => {
                        if (idx !== action.idItem) return item;
                    })
                }
            );

        default:
            return state;
    }
}

export default reducerProjects;
