import React from 'react'
import classnames from 'classnames'

export default class Box extends React.Component {
  render () {
    const className = classnames('Box', this.props.className)
    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}
