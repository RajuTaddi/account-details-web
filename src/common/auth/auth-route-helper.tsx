import React from 'react';
import { Route, RouteProps } from 'react-router';
import { withAuth, AuthProp } from './auth-hoc';
import { SigningIn } from '../../components/screens/signing-in';
import { Unauthorized } from '../../components/screens/unauthorized';

interface RouteRendererProps extends AuthProp, RouteProps {
  render?: (props: any) => any;
}

const RouteRenderer = ({
  component: Component,
  render: RenderCallback,
  auth,
  ...rest
}: RouteRendererProps) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!auth.isReady) {
          return <SigningIn />;
        }
        if (!auth.hasAccess) {
          return <Unauthorized />;
        }
        return RenderCallback(props);
      }}
    />
  );
};

const BasicAccessRoute = withAuth(RouteRenderer);
export default BasicAccessRoute;
