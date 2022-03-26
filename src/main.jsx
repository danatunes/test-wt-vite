import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {BrowserRouter} from "react-router-dom";


const httpLink = createHttpLink({
    uri: "https://tsarka-frontend-test.herokuapp.com/frontend/task/graphql",
});

const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('access_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});


ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root')
)
