import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Tabs from './Tabs'
import Flights from './Flights'
import Form from './Form'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='app-container'>
          <Route path='/' component={Header} />
          <Route exact path='/flights' component={Flights} />
          <Route path='/' component={Form} />
        </div>
      </Router>
    )
  }
}

export default App
