import React from 'react'
import PropTypes from 'prop-types'

import Header from './sections/Header'
import Content from './sections/Content'
import Footer from './sections/Footer'

import store from 'src/client/store'
import actions from 'src/client/actions'
import 'src/utils/Formsy'

export default class Root extends React.Component {
  static childContextTypes = {
    store: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  }

  getChildContext () {
    return {
      store,
      actions,
    }
  }

  render () {
    return (
      <div className='Root'>
        <Header inputLimits={[5, 500]} />
        <Content />
        <Footer />
      </div>
    )
  }
}
