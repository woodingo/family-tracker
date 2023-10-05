import { Outlet } from '@tanstack/react-router';
import React, { FunctionComponent } from 'react';
import RootLayout from '@/shared/ui/RootLayout';

interface RootProps {}

const Root: FunctionComponent<RootProps> = () => {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
};

export default Root;
