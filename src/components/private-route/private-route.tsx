import { Authorization, AuthStatus } from '../../constants/constants';
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

type PrivateRouteProps = {
  restrictedFor: AuthStatus;
  redirectedTo: string;
  children: ReactNode;
};

export default function PrivateRoute({
  restrictedFor,
  redirectedTo,
  children,
}: PrivateRouteProps) {
  const auth = Authorization.NoAuth;

  return auth === restrictedFor ? <Navigate to={redirectedTo} /> : children;
}
