import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <section className='hero is-dark'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>
              Lucky Travel
            </h1>
            <h2 className='subtitle'>
              Where magic happens
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Header