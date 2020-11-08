import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import {ApolloProvider} from "react-apollo";
import {ApolloClient, InMemoryCache} from "@apollo/client";
import {HttpLink} from "apollo-link-http";
import {setContext} from "@apollo/client/link/context";
import {Provider} from 'react-redux'
import reducers from './reducers/index.js'
import {createBrowserHistory} from "history";
import {createStore} from "redux";


const history = createBrowserHistory();

const store = createStore(reducers)

function createIsomorphLink() {
    return new HttpLink({
        uri: 'http://localhost:4000/api',
        credentials: 'same-origin',
    })
}

const authLink = setContext((_, { headers }) => {

    // const token = localForage.getItem('token');
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzdmVuMi5jb29sQGdtYWlsLmNvbSIsImlhdCI6MTYwNDcxMjg2OSwiZXhwIjoxNjM2MjcwNDY5fQ.6TAB-OrRnJoTH_9XbSn1RlyzOhu_S5ZJdBk9h5tTUg0'
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

console.log(authLink);

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
            <BrowserRouter history={history}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </ApolloProvider>
    , document.getElementById('root')
);