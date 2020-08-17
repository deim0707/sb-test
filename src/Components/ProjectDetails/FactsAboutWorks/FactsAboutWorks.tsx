import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addFactAboutWork, deleteFactAboutWork} from "../../../Store/actions";
import ListGroup from "react-bootstrap/ListGroup";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import trash from '../../../img/trash.svg'
import style from "./FactsAboutWorks.module.scss";


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
            <Form>
                <Form.Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInput" srOnly>
                            Факт о работе
                        </Form.Label>
                        <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            type="text"
                            value={newFact}
                            placeholder='Добавьте факт о работах'
                            onChange={e => setNewFact(e.target.value)}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button
                            onClick={event => addNewFact(event)}
                            className="mb-2"
                        >
                            Добавить
                        </Button>
                    </Col>
                </Form.Row>
            </Form>


            <ListGroup className={style.facts}>
                {
                    facts.map((item: string, idx: number): JSX.Element => {
                        return (
                            <ListGroup.Item key={`idProj:${id}idFact:${idx}`} className={style.listGroupItem}>
                                <span>{item}</span>
                                <img
                                    src={trash}
                                    alt="trash"
                                    onClick={() => {
                                        console.log(`удалить айтем: ${idx}`)
                                        dispatch(deleteFactAboutWork(id, idx))
                                    }}
                                />
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>


        </div>
    )
}

export default FactsAboutWorks;
