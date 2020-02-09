'use strict'

import React, { Component } from 'react'

import ajax from '@fdaciuk/ajax'

import AppContent from 'components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }

    this.perPage = 3
  }

  getGithubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}?per_page=${this.perPage}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({ isFetching: true })

      ajax().get(this.getGithubApiUrl(value))
        .then(result => {
          this.setState({
            userinfo: {
              username: result.name,
              login: result.login,
              photo: result.avatar_url,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          })
        })
        .always(() => this.setState({ isFetching: false }))
    }
  }

  getRepos (type) {
    return () => {
      const username = this.state.userinfo.login
      ajax().get(this.getGithubApiUrl(username, type))
        .then(result => {
          this.setState({
            [type]: result.map(repo => ({
              name: repo.name,
              link: repo.html_url
            }))
          })
        })
    }
  }

  render () {
    return (
      <AppContent
        {...this.state}
        handleSearch={e => this.handleSearch(e)}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    )
  }
}

export default App
