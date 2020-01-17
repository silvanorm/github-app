'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Search = ({ isDisabled, handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário no Github'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired
}

export default Search
