import {ProjectItemType} from "./Store/types";

export const findItemInState = (state: ProjectItemType[], id: number): number => {
    return Number(state.findIndex((item: ProjectItemType) => item.id === Number(id)));
}
