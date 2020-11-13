import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {HashRouter} from "react-router-dom";
import {ApolloProvider} from "react-apollo";
import {ApolloClient, InMemoryCache} from "@apollo/client";
import {HttpLink} from "apollo-link-http";
import {setContext} from "@apollo/client/link/context";
import {Provider} from 'react-redux'
import reducers from './reducers/index.js'
import {createBrowserHistory} from "history";
import {createStore} from "redux";
import localforage from "localforage";



const history = createBrowserHistory();

const store = createStore(reducers)

function createIsomorphLink() {
    return new HttpLink({
        uri: 'http://localhost:4000/api',
        credentials: 'same-origin',
    })
}

const authLink =  setContext((_, { headers })  => {

    async function getValue() {
        let token = await localforage.getItem('token');
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : "",
            }
        }
    };

    return getValue()
});


function createApolloClient(initialState = {}) {
    const ssrMode = typeof window === 'undefined'
    const cache = new InMemoryCache().restore(initialState)

    return new ApolloClient({
        ssrMode,
        link: authLink.concat(createIsomorphLink()),
        cache,
    })
}


ReactDOM.render(
        <ApolloProvider client={createApolloClient()}>
            <HashRouter history={history}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </HashRouter>
        </ApolloProvider>
    , document.getElementById('root')
);