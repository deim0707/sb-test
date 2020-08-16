import {ProjectItemType} from './types'

const initialState:ProjectItemType[] = [
    {
        id: 0,
        title: 'Проект 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloribus eaque esse nam natus sed ut. Cum eos et sed.',
        progress: 'planning',
        // progress: 20,
        quantity: 2,
        price: 101,
        factsAboutWork: 'some facts1'
    },
    {
        id: 1,
        title: 'Проект 2',
        description: 'Здесь другое описание проекта',
        progress: 'design',
        // progress: 60,
        quantity: 2,
        price: 101,
        factsAboutWork: 'some facts2'
    },
    {
        id: 2,
        title: 'Проект 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloribus eaque esse nam natus sed ut. Cum eos et sed.',
        progress: 'implementation',
        // progress: 20,
        quantity: 2,
        price: 101,
        factsAboutWork: 'some facts2'
    },
    {
        id: 3,
        title: 'Проект 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloribus eaque esse nam natus sed ut. Cum eos et sed.',
        progress: 'balance',
        // progress: 20,
        quantity: 2,
        price: 101,
        factsAboutWork: 'some facts2'
    },
    {
        id: 4,
        title: 'Проект 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloribus eaque esse nam natus sed ut. Cum eos et sed.',
        progress: 'closed',
        // progress: 20,
        quantity: 2,
        price: 101,
        factsAboutWork: 'some facts2'
    },

]



// ProjectItem[]


const reducerProjects = (state = initialState, action: any): ProjectItemType[] => {
    switch (action.type) {
        case 'AAA':
            return state;

        default:
            return state;
    }
}

export default reducerProjects;