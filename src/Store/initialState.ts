import {ProjectItemType} from "./types";

const initialState: ProjectItemType[] = [
    {
        id: 1,
        title: 'Офис на Восстания',
        description: 'Новое офисное здание на улице Восстания в Санкт-Петербурге',
        progress: 'planning',
        quantity: 3,
        price: 0,
        factsAboutWork: [
            {
                title: 'Купить красивые обои',
                qt: 2,
                price: 100,
                date: 1597749065097,
                status: 'planning'
            },
            {
                title: 'Отремонтировать комнат',
                qt: 21,
                price: 1000000,
                date: 1597749065097,
                status: 'design'
            },
            {
                title: 'Купить шкаф',
                qt: 2,
                price: 3000,
                date: 1597749065097,
                status: 'design'
            },
        ]
    },
    {
        id: 2,
        title: 'Проект 2',
        description: 'Здесь другое описание проекта',
        progress: 'design',
        quantity: 2,
        price: 101,
        factsAboutWork: [
            {
                title: 'Купить обои',
                qt: 2,
                price: 100,
                date: 1597749065097,
                status: 'planning'
            },
            {
                title: 'Отремонтировать комнат',
                qt: 21,
                price: 1000000,
                date: 1597749065097,
                status: 'design'
            },
            {
                title: 'Купить шкаф',
                qt: 2,
                price: 3000,
                date: 1597749065097,
                status: 'design'
            },
        ]

    },
    {
        id: 3,
        title: 'Проект 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloribus eaque esse nam natus sed ut. Cum eos et sed.',
        progress: 'implementation',
        quantity: 2,
        price: 101,
        factsAboutWork: [
            {
                title: 'Купить обои',
                qt: 2,
                price: 100,
                date: 1597749065097,
                status: 'planning'
            },
            {
                title: 'Отремонтировать комнат',
                qt: 21,
                price: 1000000,
                date: 1597749065097,
                status: 'design'
            },
            {
                title: 'Купить шкаф',
                qt: 2,
                price: 3000,
                date: 1597749065097,
                status: 'design'
            },
        ]

    },
    {
        id: 4,
        title: 'Проект 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloribus eaque esse nam natus sed ut. Cum eos et sed.',
        progress: 'balance',
        quantity: 2,
        price: 101,
        factsAboutWork: [
            {
                title: 'Купить обои',
                qt: 2,
                price: 100,
                date: 1597749065097,
                status: 'planning'
            },
            {
                title: 'Отремонтировать комнат',
                qt: 21,
                price: 1000000,
                date: 1597749065097,
                status: 'design'
            },
            {
                title: 'Купить шкаф',
                qt: 2,
                price: 3000,
                date: 1597749065097,
                status: 'design'
            },
        ]

    },
    {
        id: 5,
        title: 'Проект 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloribus eaque esse nam natus sed ut. Cum eos et sed.',
        progress: 'closed',
        quantity: 2,
        price: 101,
        factsAboutWork: [
            {
                title: 'Купить обои',
                qt: 2,
                price: 100,
                date: 1597749065097,
                status: 'planning'
            },
            {
                title: 'Отремонтировать комнат',
                qt: 21,
                price: 1000000,
                date: 1597749065097,
                status: 'design'
            },
            {
                title: 'Купить шкаф',
                qt: 2,
                price: 3000,
                date: 1597749065097,
                status: 'design'
            },
        ]

    },
]

export default initialState;
