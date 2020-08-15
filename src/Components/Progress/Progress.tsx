import React from 'react';
import style from './Progress.module.scss';
import ProgressBar from 'react-bootstrap/ProgressBar';


interface Props {
    progress: number
}

const Progress: React.FC<Props> = ({progress}) => {

    const colorOfProgress = (value: number): string => progress >= value ? 'success' : 'secondary';

    return (
        <ProgressBar className={style.progressBar}>
            <ProgressBar
                striped
                variant={colorOfProgress(0)} now={20} key={1}
                label={'Планирование'}/>
            <ProgressBar
                striped
                variant={colorOfProgress(20)} now={20} key={2}
                label={'Проектирование'}/>
            <ProgressBar
                striped
                variant={colorOfProgress(40)} now={20} key={3}
                label={'Реализация'}/>
            <ProgressBar
                striped
                variant={colorOfProgress(60)} now={20} key={4}
                label={'Постановка на баланс'}/>
            <ProgressBar
                striped
                variant={colorOfProgress(80)} now={20} key={5}
                label={'Закрыт'}/>
        </ProgressBar>
    )
}

export default Progress;