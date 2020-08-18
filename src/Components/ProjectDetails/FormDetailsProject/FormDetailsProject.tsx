import React, { useEffect, useState, FC, SyntheticEvent } from "react";
import { factAboutWork } from "../../../Store/types";
import { addFactAboutWork } from "../../../Store/actions";
import { useDispatch } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Input from "../Input/Input";
import SelectInput from "../SelectInput/SelectInput";
import s from './FormDetailsProject.module.scss'

interface Props {
  id: number
}

const FormDetailsProject: FC<Props> = ({ id }) => {

  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [finishDate, setFinishDate] = useState('');
  const [status, setStatus] = useState('planning');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      title !== '' &&
      quantity !== '' &&
      price !== '' &&
      finishDate !== ''
    ) setIsButtonDisabled(false)
  }, [title, quantity, price, finishDate])


  const sendDataToStore = (e: SyntheticEvent) => {
    e.preventDefault()
    const data: factAboutWork = {
      title: title,
      qt: Number(quantity),
      price: Number(price),
      date: Number(new Date(finishDate)),
      status: status
    }
    dispatch(addFactAboutWork(id, data));

    setTitle('')
    setQuantity('')
    setPrice('')
    setFinishDate('')
    setStatus('planning')
    setIsButtonDisabled(true)
  }

  return (
    <div className={s.details}>
      <Row>
        <Col>
          <Input
            type='string'
            label='Факт работы:'
            className={s.longLabel}
            value={title}
            onChange={setTitle}
            placeholder='Введите название работы' />
        </Col>
      </Row>

      <Row>
        <Col>
          <Input
            type='number'
            label='Колличество:'
            value={quantity}
            onChange={setQuantity}
            placeholder='Введите колличество' />
        </Col>
        <Col>
          <Input
            type='number'
            label='Цена:'
            value={price}
            onChange={setPrice}
            placeholder={'Введите цену'} />
        </Col>
      </Row>

      <Row>
        <Col>
          <Input
            className={s.longLabel}
            type='date'
            label='Крайний срок:'
            value={finishDate}
            onChange={setFinishDate} />

        </Col>
        <Col>
          <SelectInput
            label='Статус:'
            valueProgress={status}
            onChange={setStatus} />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button
            disabled={isButtonDisabled}
            onClick={sendDataToStore}
          >
            Добавить
          </Button>

        </Col>
      </Row>
    </div>
  )
}


export default FormDetailsProject;
