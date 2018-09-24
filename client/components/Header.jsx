import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <nav className='navbar is-transparent'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='https://bulma.io'>
            <h1 className='title'>Flights</h1>
          </a>
          <div
            className='navbar-burger burger'
            data-target='navbarExampleTransparentExample'
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id='navbarExampleTransparentExample' className='navbar-menu'>
          <div className='navbar-start'>
            <a className='navbar-item'>
              Flights
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
    )
  }
}

export default Header

{
  /* <section className='hero is-dark'>
        <div className='hero-body'>
          <div className='container'>
            <div className='content'>
              <span className='button has-addons is-right'>Log In</span>
              <span className='button has-addons is-right'>Log Out</span>
              <h1 className='title'>
                Lucky Travel
              </h1>
              <h2 className='subtitle'>
                Where magic happens
              </h2>
            </div>
          </div>
        </div>
      </section> */
}
