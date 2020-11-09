import React, {useState} from 'react'
import {withApollo} from 'react-apollo';
import {Switch, Route} from 'react-router'
import ProcessList from "./components/ProcessList.jsx";
import Authorization from "./components/Authorization.jsx";
import EditAccount from "./components/EditAccount.jsx";
import AccountRegistration from "./components/AccountRegistration.jsx";


import './styles/index.scss'



function App(props) {
    const {client} = props;
    return(
            <Switch>
                <Route exact path='/' component={Authorization} />
                <Route path='/registration' component={AccountRegistration} />
                <Route path='/process' component={ProcessList} />
                <Route path='/editing' component={EditAccount} />
            </Switch>
    )
}

export default withApollo(App)