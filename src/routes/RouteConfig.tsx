/*
 * @Author:
 * @Date: 2021-07-16 18:40:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-21 12:39:51
 * @Description:
 */
/*
 * @Author: adam.cong
 * @Date: 2020-08-13 14:17:37
 * @Description:
 * @LastUpdate:
 * @LastEditTime: 2021-07-21 12:36:21
 */
import * as React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Home } from '@/page';

interface IRoute {
  path: string;
  Component: React.FC;
}
const routes: IRoute[] = [
  {
    path: '/',
    Component: Home,
  },
];

const MainRoute = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.pathname}
      timeout={300}
      unmountOnExit
      classNames="fade"
      appear
    >
      <Switch location={location}>
        {routes.map((route, index: number) => (
          <Route
            key={index}
            path={route.path}
            exact
            render={(props: any) => <route.Component {...props} />}
          />
        ))}
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

const RouteConfig = () => (
  <Router>
    <MainRoute />
  </Router>
);
export default RouteConfig;
