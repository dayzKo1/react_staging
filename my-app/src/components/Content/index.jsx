import React, { Component } from 'react'
import { Switch, Route, Redirect, } from "react-router-dom";
import Popular from '../../pages/Popular';
import Battle from '../../pages/Battle';
import BattleResult from '../../pages/BattleResult';
//内容部分
export default class Content extends Component {
  render() {
    return (
      <div>
        {/* 注册路由 */}
        <Switch>
          <Route path="/Popular" component={Popular} />
          <Route path="/Battle" component={Battle} />
          <Route path="/BattleResult" component={BattleResult} />
          <Route exact path="/">
          <Redirect from="/" to="/Popular" />
          </Route>
        </Switch>
      </div>
    );
  }
}
