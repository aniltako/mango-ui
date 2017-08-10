import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// require('../public/favicon.ico');

// ReactDOM.render(<App />, document.getElementById('root'));

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./store";

// Containers
import Home from './containers/Home/'
import Login from './containers/Login/'
import Register from './containers/Register/'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" name="Login" component={Login}/>
                <Route exact path="/register" name="Register" component={Register}/>
                <Route path="/" name="Home" component={Home}/>
            </Switch>
        </BrowserRouter>
  	</Provider>
), document.getElementById('root'))


registerServiceWorker();
