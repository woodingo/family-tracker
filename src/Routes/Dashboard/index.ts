import { Route } from '@tanstack/react-router';
import Dashboard from './Dashboard';
import rootRoute from '../Root';

const dashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'dashboard',
  component: Dashboard,
});

export default dashboardRoute;
