import {ProjectItemType} from "./types";

const initialState: ProjectItemType[] = [
    {
        id: 1,
        title: 'Офис на Восстания',
        description: 'Новое офисное здание на улице Восстания в Санкт-Петербурге',
        progress: 'planning',
        quantity: 3,
        price: 0,
        factsAboutWork: ['Согласовать с Московским офисом стиль', 'Покрасить стены', 'ещё один интересный факт о работах']
    },
    {
        id: 2,
        title: 'Проект 2',
        description: 'Здесь другое описание проекта',
        progress: 'design',
        quantity: 2,
        price: 101,
        factsAboutWork: ['факт 1', 'факт2', 'ещё один интересный факт о работах']

    },
    {
        id: 3,
        title: 'Проект 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloribus eaque esse nam natus sed ut. Cum eos et sed.',
        progress: 'implementation',
        quantity: 2,
        price: 101,
        factsAboutWork: ['факт 1', 'факт2', 'ещё один интересный факт о работах']

    },
    {
        id: 4,
        title: 'Проект 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloribus eaque esse nam natus sed ut. Cum eos et sed.',
        progress: 'balance',
        quantity: 2,
        price: 101,
        factsAboutWork: ['факт 1', 'факт2', 'ещё один интересный факт о работах']

    },
    {
        id: 5,
        title: 'Проект 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloribus eaque esse nam natus sed ut. Cum eos et sed.',
        progress: 'closed',
        quantity: 2,
        price: 101,
        factsAboutWork: ['факт 1', 'факт2', 'ещё один интересный факт о работах']

    },
]

export default initialState;
