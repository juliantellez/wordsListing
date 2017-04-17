import _ from 'lodash'
import React from 'react'
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin'

import ErrorCard from 'src/components/helpers/ErrorCard'

export default class Footer extends React.Component {
  static contextTypes = {
    store: React.PropTypes.object,
    actions: React.PropTypes.object,
  }

  state = {}

  shouldComponentUpdate = shouldComponentUpdate.bind(this)

  updateState = () => {
    const {error} = this.context.store.getState()
    this.setState({error})
  }

  componentWillMount () {
    const {store} = this.context
    this.unsubscribe = store.subscribe(this.updateState)
  }

  componentWillUnMount () {
    this.unsubscribe()
  }

  _getError () {
    const {error} = this.state
    console.log(error, _.isEmpty(error))
    if (_.isEmpty(error)) {
      return null
    }
    return <ErrorCard error={error.content} />
  }

  render () {
    return (
      <div className='Footer'>
        {this._getError()}
      </div>
    )
  }
}
