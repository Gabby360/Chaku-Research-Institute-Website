import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-heading text-7xl font-extrabold text-primary-950">404</h1>
      <p className="mt-4 text-xl font-semibold text-foreground-800">Page Not Found</p>
      <p className="mt-2 text-sm text-foreground-600">The page you are looking for does not exist or has been moved.</p>
      <Link
        to="/"
        className="mt-6 rounded-lg bg-accent-500 px-6 py-3 text-sm font-bold text-foreground-950 hover:bg-accent-400"
      >
        Return to Home
      </Link>
    </div>
  );
};
export default NotFound;
