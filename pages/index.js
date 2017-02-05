import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h1>
          Welcome
        </h1>
        <p>TODO</p>
        <h2>TODO</h2>
        <h3>TODO</h3>
        <ul>
          <li>
            <Link to={prefixLink('/about/')}>About</Link>
          </li>
        </ul>
      </div>
    )
  }
}
