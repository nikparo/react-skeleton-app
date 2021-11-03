import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../api/use-login';

interface Props {
  children: ReactNode;
  redirectOnAuth?: boolean;
  redirectTo: string;
}

export default function AuthGuard({ children, redirectOnAuth, redirectTo }: Props) {
  const location = useLocation();
  const { isLoggedIn } = useAuthContext();

  // This is done so that in case the route changes by any chance through other
  // means between the moment of request and the render we navigate to the initially
  // requested route.
  if (!!redirectOnAuth === isLoggedIn && redirectTo && location.pathname !== redirectTo) {
    return <Navigate to={redirectTo} />;
  }

  return <>{children}</>;
}
