import express from 'express'

import React from 'react'
import ReactDomServer from 'react-dom/server'

import Html from 'src/components/markup/Html'
import Root from 'src/components/Root'

import config from 'src/config'

const port = config.get('APP_PORT')
const app = express()

app.use(express.static('build'))
const toMarkup = node => ReactDomServer.renderToStaticMarkup(node)
const toString = node => ReactDomServer.renderToString(node)
const markup = content => (
  <Html
    title='WordListing App'
    children={content}
    description={
      'Reads paragraphs of text input by the user and creates a tabular' +
      'list of all the words entered'
    }
  />
)

app.get('/', function (req, res) {
  const document = toMarkup(markup(toString(<Root />)))
  res.send(document)
})

app.listen(port, () => console.log(`App running on port: ${port}`))
