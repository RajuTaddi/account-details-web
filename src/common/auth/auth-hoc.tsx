import React from 'react';
import { AuthContext } from './auth-context';

export interface AuthProp {
  auth: Auth;
}

type AuthAwareComponent<P extends AuthProp> =
  | React.ComponentClass<P>
  | React.StatelessComponent<P>;

export function withAuth<P extends AuthProp, R = Omit<P, 'auth'>>(
  Component: AuthAwareComponent<P>,
): React.SFC<R> {
  return function ComponentBoundWithAuthContext(props: R) {
    return (
      <AuthContext.Consumer>
        {auth => <Component {...((props as unknown) as P)} auth={auth} />}
      </AuthContext.Consumer>
    );
  };
}
