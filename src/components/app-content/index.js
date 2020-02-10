'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import Search from 'components/search'
import UserInfo from 'components/user-info'
import Actions from 'components/actions'
import Repos from 'components/repos'

import './style.css'

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  handlePagination,
  getRepos,
  getStarred
}) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    <div className='repos-container'>
      {!!repos.repos.length &&
        <Repos
          className='repos'
          title='Repositórios'
          repos={repos}
          handlePagination={clicked => handlePagination('repos', clicked)}
        />}

      {!!starred.repos.length &&
        <Repos
          className='starred'
          title='Favoritos'
          repos={starred}
          handlePagination={clicked => handlePagination('starred', clicked)}
        />}
    </div>
  </div>
)

const reposPropTypesShape = {
  repos: PropTypes.array.isRequired,
  pagination: PropTypes.object
}

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.shape(reposPropTypesShape).isRequired,
  starred: PropTypes.shape(reposPropTypesShape).isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handlePagination: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent
