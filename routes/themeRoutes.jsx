import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainRoutes from './mainRoutes.jsx';
import BrandRoutes from '../pages/Brand/brandRoutes.jsx';

export default function ThemeRoutes  ()  {
  return useRoutes([
    MainRoutes,
    BrandRoutes
  ]);
}

