import React, {useState} from 'react'
import {withApollo, useQuery} from "react-apollo";
import { useSelector, useDispatch } from 'react-redux';
import {gql} from "@apollo/client";
import cn from 'classnames'
import moment from "moment";
import axios from 'axios'
import {getProcessList} from '../actions/index.js'
import CardProgress from "./CardProgress.jsx";

const TEST = gql`
    query {
        processList {
            id
            name
            numberOfExecutions
            averageLeadTime
            averageActiveTime
            employeesInvolvedProcess
            numberOfScenarios
            start
            end
            loading
    }
}
`;

function AccountEditing(props) {
    const {client} = props;
    const dispatch = useDispatch();
    const [showFullBar, setShowBar] = useState(false);
    const {loading, error, data} = useQuery(TEST);
    const test = useSelector(state => state.processList);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const classes = cn({
        'default_aside': !showFullBar,
        'full_aside': showFullBar
    });

    // const day = parseInt(data.processList[0].averageLeadTime)

    // let day = moment(data.processList[0].averageLeadTime, "Hmm").format("HH:mm");
    // let days = moment.unix(day);
    // dispatch(getProcessList({processList: data.processList.slice(0,3)}));

    // console.log(data.processList.slice(0,3).map(({start}) => start));

    // console.log(moment.duration(139, 'minutes').get('minutes'));
    return (
        <div className="bg_common_data">
            <aside>
                <div className="content_in_aside">
                    <svg width="16"
                         height="16"
                         viewBox="0 0 16 16"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         className={classes}
                         onClick={() => setShowBar(!showFullBar)}
                    >
                        <path fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 0H4V4H0V0ZM6 6H10V10H6V6ZM10 0H6V4H10V0ZM12 0H16V4H12V0ZM4 6H0V10H4V6ZM12
                              6H16V10H12V6ZM4 12H0V16H4V12ZM6 12H10V16H6V12ZM16 12H12V16H16V12Z"
                        />
                    </svg>
                    {!showFullBar && <p>Меню</p>}
                    {showFullBar && <p className="show_proceset">proceset</p>}
                    {showFullBar && <div className="show_full_aside">
                        <div className="abs">

                        </div>
                        <ul>
                            <li style={{marginBottom: '18px'}}>hello</li>
                            <li>world</li>
                        </ul>
                    </div>}
                    {showFullBar && <div className="transparent_aside"> </div>}
                </div>
            </aside>
            <CardProgress data={data.processList.slice(0,3)}/>
        </div>
    );
}


export default withApollo(AccountEditing)

