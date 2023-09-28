import { RootRoute, Route } from '@tanstack/react-router';
import Root from './Root';
import dashboardRoute from '../Dashboard';
import loginRoute from '../Login';
import notFoundRoute from '../NotFound';

const rootRoute = new RootRoute({
  component: Root,
});

rootRoute.addChildren([dashboardRoute, loginRoute, notFoundRoute]);

export default rootRoute;
