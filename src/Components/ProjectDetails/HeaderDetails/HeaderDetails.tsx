import React, {useEffect} from "react";
import {Link, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {ProjectItemType} from "../../../Store/types";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import style from './HeaderDetails.module.scss'


interface Props {
    id: number
}

const HeaderDetails: React.FC<Props> = ({id}) => {

    const projects = useSelector((state: ProjectItemType[]) => state);

    const nextPage = (): string => {
        if (id < projects.length) return `/projects/${id + 1}`
        else return `/projects/${projects[0].id}`
    }

    const prewPage = (): string => {
        if (id > 1) return `/projects/${id - 1}`
        else return `/projects/${projects[projects.length - 1].id}`
    }


    const history = useHistory();
    const changeProjectOnKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') history.push(nextPage())
        if (e.key === 'ArrowLeft') history.push(prewPage())
        if (e.key === 'ArrowUp') history.push('/')

    }
    useEffect(() => {
        document.addEventListener('keydown', changeProjectOnKeyDown)
        return () => {
            document.removeEventListener('keydown', changeProjectOnKeyDown)
        }
    })

    return (
        <ButtonGroup aria-label="Basic example" className={style.headerDetails}>
            <Link to={'/'} className={'btn btn-outline-primary'}>На главную</Link>
            <Link to={prewPage()} className={'btn btn-outline-primary'}>Назад</Link>
            <Link to={nextPage()} className={'btn btn-outline-primary'}>Вперёд</Link>
        </ButtonGroup>

    )
}

export default HeaderDetails;
