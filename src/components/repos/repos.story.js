'use strict'

import React from 'react'
import Repos from './index'

export default {
  title: 'Repos',
  component: Repos
}

export const WithTitleProp = () =>
  <Repos title='Favoritos' repos={[]} />

export const WithRepos = () =>
  <Repos
    title='Favoritos'
    repos={[{
      link: 'http://blog.da2k.com.br',
      name: 'Blog Da2k'
    }]}
  />
