import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Box from './Box'

const cls = elem => `InputCard-${elem}`

export default class InputCard extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,
  }

  _getPreHeader () {
    const {label} = this.props
    return (
      <div className={cls('preheader')}>
        <div className={cls('label')}>
          {label}
        </div>
      </div>
    )
  }

  _getHeader () {
    const {title} = this.props
    return (
      <div className={cls('header')}>
        <div className={cls('title')}>
          {title}
        </div>
      </div>
    )
  }

  render () {
    const className = classnames('InputCard', this.props.className)
    return (
      <Box className={className}>
        {this._getPreHeader()}
        {this._getHeader()}
        {this.props.children}
      </Box>
    )
  }
}
