import React from 'react';
import { Switch, RouteComponentProps, withRouter } from 'react-router';
import { routes } from '../../utils/route-utils';
import BasicAccessRoute from '../../common/auth/auth-route-helper';

interface AppRouterProps extends RouteComponentProps {}

const AppRouter: React.FC<AppRouterProps> = props => {
  const { location } = props;
  return (
    <Switch location={location}>
      {routes.map(route => (
        <BasicAccessRoute
          exact
          key={route.key}
          path={route.path}
          render={componentProps => <route.component {...componentProps} />}
        />
      ))}
    </Switch>
  );
};

export default withRouter(AppRouter);
