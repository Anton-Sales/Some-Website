import React from 'react'

class Form extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1 className='title has-text-centered'>Book a Flight</h1>
        <div className='columns'>
          <div className='column is-half'>
            <label className='label is-medium'>From</label>
            <div className='field'>
              <input
                className='input is-medium'
                placeholder='Airport or City'
              />
            </div>
          </div>

          <div className='column is-half'>
            <label className='label is-medium'>From</label>
            <div className='field'>
              <input
                className='input is-medium'
                placeholder='Airport or City'
              />
            </div>
          </div>
        </div>

        <div class='columns'>
          <div className='column is-one-third'>
            <label className='radio'>
              <input type='radio' name='return-trip' />
              Return Trip
            </label>
          </div>

          <div className='column'>
            <label className='radio'>
              <input type='radio' name='oneway-trip' />
              One-Way Trip
            </label>
          </div>

          <div className='column'>
            <label className='radio'>
              <input type='radio' name='oneway-trip' />
              Multi-Trip
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
