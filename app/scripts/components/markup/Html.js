/* eslint-disable max-len */
import React from 'react'

export default class Html extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    keywords: React.PropTypes.string,
  }

  render () {
    const {title, description, keywords} = this.props
    return (
      <html>
        <head>
          <title>{title}</title>
          <link rel='icon' type='image/x-icon' href='/images/fav.ico' />
          <link rel='stylesheet' type='text/css' href='static/styles.css' />
          <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1' />
          <meta name='description' content={description} />
          <meta name='keywords' content={keywords} />
        </head>
        <body>
          <div id='main' dangerouslySetInnerHTML={{__html: this.props.children}} />
          <script src='static/client.js'/>
        </body>
      </html>
    )
  }
}
