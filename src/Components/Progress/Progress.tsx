import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import style from './Progress.module.scss';


interface Props {
    progress: number
}

const Progress: React.FC<Props> = ({progress}) => {

    const colorOfProgress = (value: number): string => (value > progress) ? 'secondary' : 'success';

    return (
        <ProgressBar className={style.progressBar}>
            <ProgressBar
                variant={colorOfProgress(0)}
                now={20}
                key={1}
                label={'Планирование'}/>
            <ProgressBar
                variant={colorOfProgress(20)}
                now={20}
                key={2}
                label={'Проектирование'}/>
            <ProgressBar
                variant={colorOfProgress(40)}
                now={20}
                key={3}
                label={'Реализация'}/>
            <ProgressBar
                variant={colorOfProgress(60)}
                now={20}
                key={4}
                label={'Постановка на баланс'}/>
            <ProgressBar
                variant={colorOfProgress(80)}
                now={20}
                key={5}
                label={'Закрыт'}/>
        </ProgressBar>
    )
}

export default Progress;