import { RootRoute, Navigate, Route } from '@tanstack/react-router';
import Root from './Root';
import dashboardRoute from '@routes/Dashboard';
import loginRoute from '@routes/Login';
import notFoundRoute from '@routes/NotFound';

const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  component: () => <Navigate to={dashboardRoute.to} />,
  path: '/',
});

rootRoute.addChildren([indexRoute, dashboardRoute, loginRoute, notFoundRoute]);

export default rootRoute;
