import { lazy, Suspense, useEffect } from 'react';
import { Link, Navigate, RouteObject } from 'react-router-dom';

import { MainLayout } from './layouts/MainLayout';
import AuthGuard from './components/AuthGuard';
import { useAuthContext } from './api/use-login';

const Login = lazy(() => import('./pages/Login'));
const Authors = lazy(() => import('./pages/Authors'));

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function Logout() {
  const { setUserDetails } = useAuthContext();
  useEffect(() => {
    setUserDetails({ name: '', email: '' });
  }, [setUserDetails]);

  return <Navigate to="/login" />;
}

export const routes: RouteObject[] = [
  {
    path: 'login',
    element: (
      <AuthGuard redirectOnAuth redirectTo="/">
        <Suspense fallback={<>Loading login screen</>}>
          <Login />
        </Suspense>
      </AuthGuard>
    ),
  },
  {
    path: '/',
    element: (
      <AuthGuard redirectTo="/login">
        <MainLayout />
      </AuthGuard>
    ),
    children: [
      // Seems React Router v6 does not support multiple paths per route, at least not directly
      {
        index: true,
        element: (
          <Suspense fallback={<>Loading posts</>}>
            <Authors />
          </Suspense>
        ),
      },
      {
        path: 'authors/:authorId',
        element: (
          <Suspense fallback={<>Loading posts</>}>
            <Authors />
          </Suspense>
        ),
      },
      {
        path: 'logout',
        element: <Logout />,
      },
      {
        path: '*',
        element: <NoMatch />,
      },
    ],
  },
];
