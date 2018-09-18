import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Tabs from './Tabs'
import Home from './Home'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='app-container'>
          <Route exact path='/home' component={Home} />
          <Route path='/' component={Header} />
          <Route path='/' component={Tabs} />
        </div>
      </Router>
    )
  }
}

export default App
