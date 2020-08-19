import {ProjectItemType, factAboutWork, actionType} from './types'
import {findItemInState} from "../helpers";
import initialState from "./initialState";


const changeOneItem = (state: ProjectItemType[], id: number, changes: any): ProjectItemType[] => {
    return state.map((item: ProjectItemType) => {
        if (item.id === id) return {...item, ...changes}
        else return item
    })
}

const arrayWithFacts = (state: ProjectItemType[], id: number): factAboutWork[] => state[findItemInState(state, id)].factsAboutWork


const reducerProjects = (state = initialState, action: actionType): ProjectItemType[] => {
    switch (action.type) {

        case 'CHANGE_PROGRESS_STATUS':
            return changeOneItem(state, action.id, {progress: action.payload});

        case 'ADD_FACT_ABOUT_WORK':
            return changeOneItem(state, action.id,
                {factsAboutWork: arrayWithFacts(state, action.id).push(action.payload)}
            );

        case 'DELETE_FACT_ABOUT_WORK':
            return changeOneItem(state, action.idProject,
                {
                    factsAboutWork: arrayWithFacts(state, action.idProject).filter((item, idx) => idx !== action.idItem)
                }
            );

        default:
            return state;
    }
}

export default reducerProjects;
