import React from 'react'
import PropTypes from 'prop-types'

const cls = elem => `ErrorCard-${elem}`

export default class ErrorCard extends React.Component {
  static propTypes = {
    error: PropTypes.node,
  }

  render () {
    const {error} = this.props
    return (
      <div className='ErrorCard'>
        <div className={cls('message')}>
          {error}
        </div>
      </div>
    )
  }
}
