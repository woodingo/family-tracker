import { RootRoute, Navigate, Route } from '@tanstack/react-router';
import Root from './Root';
import dashboardRoute from '@/pages/Dashboard';
import loginRoute from '@/pages/Login';
import notFoundRoute from '@/pages/NotFound';

const rootRoute = new RootRoute({
  component: Root,
});

console.log(rootRoute);

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  component: () => <Navigate to={dashboardRoute.to} />,
  path: '/',
});

rootRoute.addChildren([indexRoute, dashboardRoute, loginRoute, notFoundRoute]);

export default rootRoute;
