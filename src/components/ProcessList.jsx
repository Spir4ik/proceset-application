import React from 'react'
import {withApollo, useQuery} from "react-apollo";
import { useSelector, useDispatch } from 'react-redux';
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
    const {client} = props;
    const dispatch = useDispatch();
    const {loading, error, data} = useQuery(TEST);
    const test = useSelector(state => state.processList);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;


    return (
        <div className="bg_common_data">
            <Sidebar />
            <CardProgress data={data.processList.slice(0,3)}/>
        </div>
    );
}


export default withApollo(ProcessList)

