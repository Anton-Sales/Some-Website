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
                <label class='radio'>
                  <input type='radio' name='trip' />
                  Return trip
                </label>
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
      </div>
    )
  }
}

export default Form
