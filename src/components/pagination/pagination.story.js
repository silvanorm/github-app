'use strict'

import React from 'react'
import Pagination from './index'

export default {
  title: 'Pagination',
  component: Pagination
}

export const WithoutProps = () => <Pagination />

export const WithTotalAndActivePage = () =>
  <Pagination
    total={10}
    activePage={5}
  />

export const WithPageLink = () =>
  <Pagination
    total={10}
    activePage={5}
    pageLink='http://mypage.com/page/%page%'
  />

export const WithCallback = () =>
  <Pagination
    total={10}
    activePage={5}
    pageLink='http://mypage.com/page/%page%'
    onClick={page => window.alert(page)}
  />

WithTotalAndActivePage.story = {
  name: 'With total and activePage'
}
