import React, { LazyExoticComponent } from 'react';

const Home = React.lazy(() =>
  import('./page/Home').then((module) => ({ default: module.Home }))
);

const ChooseInput = React.lazy(() =>
  import('./page/ChooseInput').then((module) => ({ default: module.ChooseInput }))
);

interface PageRouting {
  title: string;
  path: string;
  component: LazyExoticComponent<any>;
}

export const Routing: PageRouting[] = [
  {
    title: 'Home',
    path: '/',
    component: Home
  },
  {
    title: 'Choose Input',
    path: '/choose',
    component: ChooseInput
  }
];
