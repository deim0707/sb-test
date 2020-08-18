import {ProjectItemType} from "./Store/types";

export const findItemInState = (state: ProjectItemType[], id: number): number => {
    return state.findIndex((item: ProjectItemType) => item.id === id);
}
