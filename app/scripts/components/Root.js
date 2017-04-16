import React from 'react'

import Header from './sections/Header'
import Content from './sections/Content'
import Footer from './sections/Footer'

export default class Root extends React.Component {
  static childContextTypes = {
    store: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired,
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
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}