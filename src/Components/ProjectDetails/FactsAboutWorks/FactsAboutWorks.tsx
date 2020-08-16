import React, {useState} from "react";
import style from "./FactsAboutWorks.module.scss";
import {useDispatch} from "react-redux";
import {addFactAboutWork} from "../../../Store/actions";

interface Props {
    facts: string[],
    id: number
}

const FactsAboutWorks: React.FC<Props> = ({facts, id}) => {

    const dispatch = useDispatch();
    const [newFact, setNewFact] = useState('');

    const addNewFact = (event: any) => {
        event.preventDefault();
        dispatch(
            addFactAboutWork(id, (newFact).toString())
        )
        setNewFact('')
    }

    return (
        <div className={style.works}>
            <div>
                <input
                    type="text"
                    value={newFact}
                    placeholder='Добавьте факт о работах'
                    onChange={e => setNewFact(e.target.value)}
                />
                <button onClick={event => addNewFact(event)}>Добавить</button>
            </div>
            <ul>
                {
                    facts.map((item: string, idx: number): JSX.Element => {
                        return (
                            <li key={`idProj:${id}idFact:${idx}`}>
                                {item}
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default FactsAboutWorks;