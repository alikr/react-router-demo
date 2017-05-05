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

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './Counter'
import counter from './reducers'

const store = createStore(counter)

class Counters extends Component {
  render(){
    return (
      <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />
    )
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const red = () => render((
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><NavLink activeClassName="selected" to="/about">About</NavLink></li>
        <li><NavLink activeClassName="selected" to="/counter">counter</NavLink></li>
        <li><NavLink activeClassName="selected" to="/topics">Topics</NavLink></li>
      </ul>

      <hr/>
      <Route exact path="/" component={Home}></Route>
      <Route path="/counter" component={Counters}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Redirect from="*" to="/" />
    </div>
  </BrowserRouter>
  ),document.getElementById('app'));

red();
store.subscribe(red);