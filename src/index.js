import React, { Suspense } from 'react';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavigationRouter from './Containers/NavigationRouter'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import Store from './Stores/ConfigureStore';

ReactDOM.render(
    <Suspense fallback={null}> 
        <Provider store ={Store}><NavigationRouter /></Provider>
    </Suspense>, document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
