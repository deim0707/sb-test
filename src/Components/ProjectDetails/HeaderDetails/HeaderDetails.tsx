import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {ProjectItemType} from "../../../Store/types";
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
        else return `/projects/${projects[projects.length-1].id}`
    }

    return (
        <nav className={style.headerDetails}>
            <ul>
                <li><Link to={'/'}>На главную</Link></li>
                <li><Link to={prewPage()}>Назад</Link></li>
                <li><Link to={nextPage()}>Вперёд</Link></li>


            </ul>
        </nav>
    )
}

export default HeaderDetails;
