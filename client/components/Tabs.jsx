import React from 'react'
import { Link } from 'react-router-dom'

class Tabs extends React.Component {
  render () {
    return (
      <div class='tabs is-centered'>
        <ul>
          <li class='is-active'>
            <a>
              <span class='icon is-small'>
                <i class='fas fa-image' aria-hidden='true' />
              </span>
              <Link to='/home'>Home</Link>
            </a>
          </li>
          <li>
            <a>
              <span class='icon is-small'>
                <i class='fas fa-music' aria-hidden='true' />
              </span>
              <Link to='/'>Browse Flights</Link>
            </a>
          </li>
          <li>
            <a>
              <span class='icon is-small'>
                <i class='fas fa-film' aria-hidden='true' />
              </span>
              <Link to='/'>Shuttles</Link>
            </a>
          </li>
          <li>
            <a>
              <span class='icon is-small'>
                <i class='far fa-file-alt' aria-hidden='true' />
              </span>
              <Link to='/'>About Us</Link>
            </a>
          </li>
          <li>
            <a>
              <span class='icon is-small'>
                <i class='far fa-file-alt' aria-hidden='true' />
              </span>
              <Link to='/'>Contact Us</Link>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Tabs
