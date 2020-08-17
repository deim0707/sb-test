import React from "react";
import {Link, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {ProjectItemType} from "../../../Store/types";
import style from './HeaderDetails.module.scss'


interface Props {
    id: number
}

const HeaderDetails:React.FC<Props> = ({id}) => {

    const projectsLength = useSelector((state:ProjectItemType[]) => state.length);

    // const nextPage = () => {
    //     if(id<=projectsLength && id)
    // }


    return (
        <nav className={style.headerDetails}>
            <ul>
                <li><Link to={'/'}>На главную</Link></li>
                {/*<li><Link to>Вперёд</Link></li>*/}
                <li onClick={()=> nextProject()}>Сохранить</li>
                {/*<li>Отправить</li>*/}
                {/*<li>Выйти</li>*/}
            </ul>
        </nav>
    )
}

export default HeaderDetails;
