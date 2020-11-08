import React, {useState} from 'react'
import { useMutation, withApollo} from 'react-apollo';
import {Switch, Route} from 'react-router'
import AccountEditing from "./components/AccountEditing.jsx";
import Authorization from "./components/Authorization.jsx";
import {BrowserRouter as Router} from "react-router-dom";


import './styles/index.scss'



function App(props) {
    const {client} = props;
    return(
            <Switch>
                <Route exact path='/' component={Authorization} />
                <Route path='/editing' component={AccountEditing}/>
            </Switch>
    )
}

export default withApollo(App)