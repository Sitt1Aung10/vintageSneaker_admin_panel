import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainRoutes from './mainRoutes.jsx';
import BrandRoutes from '../pages/Brand/brandRoutes.jsx';
import ProductRoutes from '../pages/Products/productRoutes.jsx';

export default function ThemeRoutes  ()  {
  return useRoutes([
    MainRoutes,
    BrandRoutes,
    ProductRoutes
  ]);
}

