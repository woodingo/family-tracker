import { Route } from '@tanstack/react-router';
import Login from './Login';
import rootRoute from '../Root';

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'login',
  component: Login,
});

export default loginRoute;
