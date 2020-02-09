'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Pagination from 'components/pagination'

import './style.css'

const Repos = ({ className, title, repos }) => (
  <div className={`repos-list-container ${className}`}>
    <h2>{title}</h2>
    <ul className='repos-list'>
      {repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>

    <Pagination total={10} />
  </div>
)

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
