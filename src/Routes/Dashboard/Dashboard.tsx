import { Link } from '@tanstack/react-router';
import React, { FunctionComponent } from 'react';
import loginRoute from '../Login';

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  return (
    <div>
      Dashboard
      <Link to={loginRoute.to}>to login</Link>
    </div>
  );
};

export default Dashboard;
