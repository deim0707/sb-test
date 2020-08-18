import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import style from './Progress.module.scss';


interface Props {
    progress: string
}

const Progress: React.FC<Props> = ({progress}) => {

    const colorOfProgress = (type:string) => {
        if(progress === 'planning' && type === 'planning') return 'info';
        else if(progress === 'design' && type === 'design') return 'info';
        else if(progress === 'implementation' && type === 'implementation') return 'primary';
        else if(progress === 'balance' && type === 'balance') return 'success';
        else if(progress === 'closed' && type === 'closed') return 'success';
        else return 'secondary'
    };

    return (
        <ProgressBar className={style.progressBar}>
            <ProgressBar
                variant={colorOfProgress('planning')}
                now={20}
                key={1}
                label={'Планирование'}/>
            <ProgressBar
                variant={colorOfProgress('design')}
                now={20}
                key={2}
                label={'Проектирование'}/>
            <ProgressBar
                variant={colorOfProgress('implementation')}
                now={20}
                key={3}
                label={'Реализация'}/>
            <ProgressBar
                variant={colorOfProgress('balance')}
                now={20}
                key={4}
                label={'Постановка на баланс'}/>
            <ProgressBar
                variant={colorOfProgress('closed')}
                now={20}
                key={5}
                label={'Закрыт'}/>
        </ProgressBar>
    )
}

export default Progress;
