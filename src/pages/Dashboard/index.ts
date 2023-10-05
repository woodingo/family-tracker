import { Route } from '@tanstack/react-router';
import Dashboard from './Dashboard';
import rootRoute from '../Root';

export const dashboardRouteInfo = {
  title: {
    ru_RU: 'Дашборд',
    en_US: 'Dashboard',
  },
  menu: ['main'],
};

const dashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'dashboard',
  component: Dashboard,
  // @ts-ignore
  customInfo: dashboardRouteInfo,
});

export default dashboardRoute;
