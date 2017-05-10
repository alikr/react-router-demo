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
  NavLink,
  Switch
} from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import Home from './home.js'
import Edit from './view.js'
import Topics from './topics.js'
import Bundle from './bundle.js'
// import NoMatch from './404.js'
import NoMatch from './bundle_404.js'
import reducers from './reducers'
import store from './store.js'
import finalCreateStore from './middleware.js'

// const stores = createStore(reducers, store)
const stores = finalCreateStore(reducers, store)

render((
  <Provider store={stores}>
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><NavLink activeClassName="selected" to="/edit">Edit</NavLink></li>
          <li><NavLink activeClassName="selected" to="/topics">Topics</NavLink></li>
          <li><NavLink activeClassName="selected" to="/404">404 / Code Spliting</NavLink></li>
        </ul>

        <hr/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/*/index.html" component={Home}/>
          <Route path="/edit" component={Edit}/>
          <Route path="/topics" component={Topics}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
),document.getElementById('app'));