import { Link } from '@tanstack/react-router';
import React, { FunctionComponent } from 'react';
import loginRoute from '@/pages/Login';

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  return (
    <div>
      Dashboard
      <div>
        <Link to={loginRoute.to}>to login</Link>
      </div>
    </div>
  );
};

export default Dashboard;
