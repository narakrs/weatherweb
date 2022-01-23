import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { compose } from 'redux';
import Dashboard from './../../components/dashboard';

class AdminLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...data } = this.props;
    return (
      <Route
        {...data}
        render={routeProps => {
          return (
            <Dashboard {...data}>
              <YourComponent {...routeProps} />
            </Dashboard>
          );
        }}
      />
    );
  }
}
export default compose(AdminLayoutRoute);
