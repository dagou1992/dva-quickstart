import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Main from './routes/Main';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Main>
        <Switch>
          <Route path="/" exact component={IndexPage}/>
          <Route path="/products" exact component={Products}/>
        </Switch>
      </Main>
    </Router>
  );
}

export default RouterConfig;
