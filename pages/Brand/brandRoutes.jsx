import React, { Children } from 'react'
import Brand from './view/Brand.jsx'
import Layout from '../../src/components/layout.jsx'

const BrandRoutes =  {
  path : '/',
  element : <Layout />,
  children : [
    {
    path : '/brand',
    element : <Brand />
    }
  ]

}

export default BrandRoutes