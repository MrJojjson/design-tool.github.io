import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './apolloClient';

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={apolloClient}>
            <Provider store={store}>
                <App />
            </Provider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
