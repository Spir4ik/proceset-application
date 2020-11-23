import React from 'react'
import moment from "moment";
import iconExecutions from '../assets/icno-executions.svg'
import iconAverageTime from '../assets/icon-averageTime.svg'
import iconProcess from '../assets/icon-process.svg'
import iconAverageActiveTime from '../assets/icon-AverageActiveTime.svg'
import iconInProcess from '../assets/icon-inProcess.svg'


function CardProgress(props) {
    const {name, numberOfExecutions, averageLeadTime,
        averageActiveTime, employeesInvolvedProcess,
        numberOfScenarios, start, end, loading, id} = props;

    moment.lang('ru');

    const hoursAverageTime = moment.duration(averageLeadTime.substr(0, 3), 'hours').get('hours');
    const minutesAverageTime = moment.duration(averageLeadTime.substr(3, 6), 'minutes').get('minutes');

    const hoursAverageActiveTime = moment.duration(averageActiveTime.substr(0, 3), 'hours').get('hours');
    const minutesAverageActiveTime = moment.duration(averageActiveTime.substr(3, 6), 'minutes').get('minutes');

    let startDate = moment(start * 1000).format('LL');
    let endDate = moment(end * 1000).format('LL');
    let loadingDate = moment(loading * 1000).format('LL')

    return(
        <div className='process_list' key={id}>
            <div className="header">
                <h4>{name}</h4>
            </div>
            <div className="container-fluid">
                <div className="numberOfExecutions">
                    <img src={iconExecutions} alt=""/>
                    <span>{numberOfExecutions}</span>
                    <p>выполнено раз</p>
                </div>
                <div className="row justify-content-center info_time">
                    <div className="col-4">
                        <img src={iconAverageTime} alt=""/>
                        <span>{`${hoursAverageTime}ч ${minutesAverageTime}мин`}</span>
                        <p>среднее время выполнения</p>
                    </div>
                    <div className="col-4">
                        <img src={iconProcess} alt=""/>
                        <span>{`${employeesInvolvedProcess} сотрудников`}</span>
                        <p>участвует в процессе</p>
                    </div>
                </div>
                <div className="row justify-content-center info_time next_info">
                    <div className="col-4">
                        <img src={iconAverageActiveTime} alt=""/>
                        <span>{`${hoursAverageActiveTime}ч ${minutesAverageActiveTime}мин`}</span>
                        <p>среднее активное время</p>
                    </div>
                    <div className="col-4">
                        <img src={iconInProcess} alt=""/>
                        <span>{`${numberOfScenarios} сценариев`}</span>
                        <p>в процессе</p>
                    </div>
                </div>
                <div className="block_info_date">
                    <div className="row info_date">
                        <div className="col-auto date_text"><span>Начало</span></div>
                        <div className="col-auto date"><p>{startDate}</p></div>
                    </div>
                    <div className="row info_date">
                        <div className="col-auto date_text"><span>Окончание</span></div>
                        <div className="col-auto date"><p>{endDate}</p></div>
                    </div>
                    <div className="row info_date">
                        <div className="col-auto date_text"><span>Загрузка</span></div>
                        <div className="col-auto date"><p>{loadingDate}</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProgress