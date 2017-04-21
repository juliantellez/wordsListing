import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin'

import Box from 'src/components/helpers/Box'

const cls = elem => `Content-${elem}`

export default class Content extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
    actions: PropTypes.object,
  }

  state = {}

  shouldComponentUpdate = shouldComponentUpdate.bind(this)

  updateState = () => {
    const {lists} = this.context.store.getState()
    _.defer(() => this.setState({lists}))
  }

  componentWillMount () {
    const {store} = this.context
    this.unsubscribe = store.subscribe(this.updateState)
  }

  componentWillUnMount () {
    this.unsubscribe()
  }

  _getCardSection = (content, key) => {
    let label
    if (content > 1) {
      label = <span className={cls('card-label')}>x({content})</span>
    }
    return (
      <div className={cls('card-section')}>
        {key}{label}
      </div>
    )
  }

  _getCard = (content, key) => {
    let label = <span className={cls('card-label')}>{content.size}</span>
    return (
      <Box className={cls('card')} key={key}>
        <div className={cls('card-title')}>{key}{label}</div>
        {content.toSeq().map(this._getCardSection)}
      </Box>
    )
  }

  _getCards = () => {
    const {lists: {tabs}} = this.state
    return tabs.toSeq().map(this._getCard)
  }

  _canRender = () => {
    const {lists} = this.state
    return !_.isNil(lists)
  }

  render () {
    if (!this._canRender()) {
      return null
    }
    return (
      <div className='Content'>
        <div className={cls('wrapper')}>
        {this._getCards()}
        </div>
      </div>
    )
  }
}
