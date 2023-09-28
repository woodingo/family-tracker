import { Route } from '@tanstack/react-router';
import NotFound from './NotFound';
import rootRoute from '../Root';

const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFound,
});

export default notFoundRoute;
