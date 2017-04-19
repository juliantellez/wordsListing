import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'

const cls = elem => `ErrorCard-${elem}`

export default class ErrorCard extends React.Component {
  static propTypes = {
    error: PropTypes.node,
  }

  render () {
    const {error} = this.props
    return (
      <ReactCSSTransitionGroup
        transitionName={cls('transition')}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <div className='ErrorCard'>
          <div className={cls('message')}>
            {error}
          </div>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}
