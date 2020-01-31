'use strict'

import React from 'react'
import Repos from './index'

export default {
  title: 'Repos',
  component: Repos
}

export const WithTitleProp = () =>
  <Repos title='Favoritos' repos={[]} />
