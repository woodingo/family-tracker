import { RootRoute } from '@tanstack/react-router';
import Root from './Root';
import dashboardRoute from '@routes/Dashboard';
import loginRoute from '@routes/Login';
import notFoundRoute from '@routes/NotFound';

const rootRoute = new RootRoute({
  component: Root,
});

rootRoute.addChildren([dashboardRoute, loginRoute, notFoundRoute]);

export default rootRoute;
