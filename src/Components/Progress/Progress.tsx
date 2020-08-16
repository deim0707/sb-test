import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import style from './Progress.module.scss';


interface Props {
    // progress: number
    progress: string
}

const Progress: React.FC<Props> = ({progress}) => {

    const colorOfProgress = (type:string) => {
        // return (value > progress) ? 'secondary' : 'success'
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
                // variant={colorOfProgress(0)}
                now={20}
                key={1}
                label={'Планирование'}/>
            <ProgressBar
                variant={colorOfProgress('design')}
                // variant={colorOfProgress(20)}
                now={20}
                key={2}
                label={'Проектирование'}/>
            <ProgressBar
                variant={colorOfProgress('implementation')}
                // variant={colorOfProgress(40)}
                now={20}
                key={3}
                label={'Реализация'}/>
            <ProgressBar
                variant={colorOfProgress('balance')}
                // variant={colorOfProgress(60)}
                now={20}
                key={4}
                label={'Постановка на баланс'}/>
            <ProgressBar
                variant={colorOfProgress('closed')}
                // variant={colorOfProgress(80)}
                now={20}
                key={5}
                label={'Закрыт'}/>
        </ProgressBar>
    )
}

export default Progress;