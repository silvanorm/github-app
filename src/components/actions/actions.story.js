'use strict'

import React from 'react'
import { action } from '@storybook/addon-actions'
import Actions from './index'

export default {
  title: 'Actions',
  component: Actions
}

export const ActionsComponent = () =>
  <Actions
    getRepos={action('Get Repos')}
    getStarred={action('Get Starred')}
  />

export const SecondStory = () => <Actions />
