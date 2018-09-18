import React from 'react'
import { Link } from 'react-router-dom'

class Tabs extends React.Component {
  render () {
    return (
      <div className='tabs is-centered'>
        <ul>
          <li className='is-active'>
            <Link to='/home'>
              <span className='icon is-small'>
                <i className='fas fa-image' aria-hidden='true' />
              </span>
              Home
            </Link>
          </li>
          <li>
            <a>
              <span className='icon is-small'>
                <i className='fas fa-music' aria-hidden='true' />
              </span>
              <Link to='/'>Browse Flights</Link>
            </a>
          </li>
          <li>
            <a>
              <span className='icon is-small'>
                <i className='fas fa-film' aria-hidden='true' />
              </span>
              <Link to='/'>Shuttles</Link>
            </a>
          </li>
          <li>
            <a>
              <span className='icon is-small'>
                <i className='far fa-file-alt' aria-hidden='true' />
              </span>
              <Link to='/'>About Us</Link>
            </a>
          </li>
          <li>
            <a>
              <span className='icon is-small'>
                <i className='far fa-file-alt' aria-hidden='true' />
              </span>
              <Link to=''>Contact Us</Link>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Tabs
