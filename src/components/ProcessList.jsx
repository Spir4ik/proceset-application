import React, {useEffect} from 'react'
import {withApollo, useQuery} from "react-apollo";
import {gql} from "@apollo/client";
import CardProgress from "./CardProgress.jsx";
import Sidebar from "./Sidebar.jsx";


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

function ProcessList(props) {

    const {client, history} = props;
    useEffect(() => {
        console.log(history)
    });

    const {loading, error, data} = useQuery(TEST);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const myFucTest = () => {
        addEventListener("popstate",function(e){
            window.location.reload()
        });
    };

    myFucTest();

    return (
        <div className="bg_common_data">
            <Sidebar />
            {data.processList.map(({name, numberOfExecutions, averageLeadTime,
                averageActiveTime, employeesInvolvedProcess,
                numberOfScenarios, start, end, loading, id}) => {
                return(
                    <CardProgress name={name} numberOfExecutions={numberOfExecutions}
                                  averageLeadTime={averageLeadTime}
                                  averageActiveTime={averageActiveTime}
                                  employeesInvolvedProcess={employeesInvolvedProcess}
                                  numberOfScenarios={numberOfScenarios}
                                  start={start} end={end} loading={loading}
                                  key={id}
                    />
                )
            })}
        </div>
    );
}


export default withApollo(ProcessList)

