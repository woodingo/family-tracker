import { Router } from '@tanstack/react-router';
import rootRoute from '@/pages/Root';

const routeTree = rootRoute;

// Create the router using your route tree
const router = new Router({ routeTree });

// Register router for maximum type safety
declare module '@tanstack/react-router' {
  interface RegisterRouter {
    // interface Register { // TODO разобраться, почему не генерируется нормальная типизация
    router: typeof router;
  }
}

export default router;
