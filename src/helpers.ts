import {ProjectItemType} from "./Store/types";

//убрать если не понадобится
export const findItemInState = (state: ProjectItemType[], id: number): number => {
    return state.findIndex((item: ProjectItemType) => item.id === id);
    // тут можно выкидывать ошибку, если айтем по такому айди не найден. и обрабатывать её в errorBoundary обёртке
}
