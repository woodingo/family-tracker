import { RootRoute, Route } from '@tanstack/react-router';
import Root from './Root';
import dashboardRoute from '../Dashboard';
import loginRoute from '../Login';

const rootRoute = new RootRoute({
  component: Root,
});

const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '*',
  component: () => 'not found',
});

rootRoute.addChildren([dashboardRoute, loginRoute, notFoundRoute]);

export default rootRoute;
