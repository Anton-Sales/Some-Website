import React from 'react'

import { Link } from 'react-router-dom'
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showBurger: true
    }
    this.toggleBurger = this.toggleBurger.bind(this)
  }
  toggleBurger() {
    this.setState({showBurger: !this.state.showBurger})
  }
  render () {
    const {showBurger} = this.state
    return (
      <div>
        <nav className='navbar is-transparent'>
          <div className='navbar-brand'>
            <a className='navbar-item' href='https://bulma.io'>
              <h1 className='title'>Blue Flights</h1>
            </a>
            <div
              onClick={this.toggleBurger}
              className={`navbar-burger burger ${showBurger ? 'is-active' : ""}`}
              data-target='navbarExampleTransparentExample'
            > 
              <span />
              <span />
              <span />
            </div>
          </div>

          <div id='navbarExampleTransparentExample' className={`navbar-menu ${showBurger ? "is-active" : ""}`}>
            <div className='navbar-start'>
              <a className='navbar-item'>
                <Link to='/flights'>
                  Flights
                </Link>
              </a>

              <a className='navbar-item'>
                Shuttle
              </a>

              <a className='navbar-item'>
                Cruise
              </a>

            </div>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <a className='bd-tw-button button'>
                    <span>
                      Log In
                    </span>
                  </a>
                </p>
                <p className='control'>
                  <a className='button is-primary'>
                    <span>Log Out</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </nav>

        
      </div>
    )
  }
}

export default Header
