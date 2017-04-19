import _ from 'lodash'
import React from 'react'
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin'

import ErrorCard from 'src/components/helpers/ErrorCard'
import Box from 'src/components/helpers/Box'

const cls = elem => `Aside-${elem}`

export default class Aside extends React.Component {
  static contextTypes = {
    store: React.PropTypes.object,
    actions: React.PropTypes.object,
  }

  state = {}

  shouldComponentUpdate = shouldComponentUpdate.bind(this)

  updateState = () => {
    const {tally, error} = this.context.store.getState()
    this.setState({tally, error})
  }

  componentWillMount () {
    const {store} = this.context
    this.unsubscribe = store.subscribe(this.updateState)
  }

  componentWillUnMount () {
    this.unsubscribe()
  }

  _getBox (label, content) {
    return (
      <Box className={cls('box')} inline>
        <span className={cls('box-label')}>{label}</span>
        <span className={cls('box-content')}>{content}</span>
      </Box>
    )
  }

  _getWordsTally () {
    const {tally} = this.state
    if (_.isNil(tally)) {
      return null
    }
    return (
      <div className={cls('content')}>
        {this._getBox('Words:', tally.words)}
        {this._getBox('Commas:', tally.commas)}
        {this._getBox('Full Stops:', tally.fullStops)}
      </div>
    )
  }

  _getContent () {
    const {error} = this.state
    if (!_.isEmpty(error)) {
      return <ErrorCard error={error.content} />
    }
    return this._getWordsTally()
  }

  render () {
    return (
      <div className='Aside'>
        {this._getContent()}
      </div>
    )
  }
}
