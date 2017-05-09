import React, { Component } from 'react'
import { render } from 'react-dom';
import {
  BrowserRouter,
  HashRouter,
  IndexRoute,
  Redirect,
  Router,
  Route,
  Link,
  IndexLink,
  NavLink
} from 'react-router-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Home from './home.js'
import Edit from './view.js'
import Topics from './topics.js'
import reducers from './reducers'
import store from './store.js'

function thunkMiddleware ({ dispatch, getState }) {
    // console.log('Enter thunkMiddleware');
    return function(next) {
        // console.log('Function "next" provided:', next);
        return function (action) {
            console.log('Handling action:', action);
            return typeof action === 'function' ?
                action(dispatch, getState) :
                next(action)
        }
    }
}
function logMiddleware ({ dispatch, getState }) {
    return function(next) {
        return function (action) {
            console.log('logMiddleware action:', action)
            return next(action)
        }
    }
}
const finalCreateStore = applyMiddleware(thunkMiddleware, logMiddleware)(createStore)

// const stores = createStore(reducers, store)
const stores = createStore(reducers, store, applyMiddleware(thunkMiddleware, logMiddleware))
// const stores = finalCreateStore(reducers, store)

render((
  <Provider store={stores}>
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><NavLink activeClassName="selected" to="/edit">Edit</NavLink></li>
          <li><NavLink activeClassName="selected" to="/topics">Topics</NavLink></li>
        </ul>

        <hr/>
        <Route exact path="/" component={Home}></Route>
        <Route path="/edit" component={Edit}/>
        <Route path="/topics" component={Topics}/>
        <Redirect form="*" to="" />
      </div>
    </BrowserRouter>
  </Provider>
),document.getElementById('app'));