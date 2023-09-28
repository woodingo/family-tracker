import React from 'react';
import { RouterProvider } from '@tanstack/react-router';
import router from './Routes/router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
