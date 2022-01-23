import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ADMIN_ROUTES } from './../routes';
import AdminLayoutRoute from './../routes/AdminLayoutRoute';

class App extends Component {
  renderAdminRoutes = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map(route => {
      return (
        <AdminLayoutRoute
          path={route.path}
          key={route.path}
          component={route.component}
          name={route.name}
          exact={route.exact}
        />
      );
    });
    return xhtml;
  };

  render() {
    return (
      <Router>
        <Switch> {this.renderAdminRoutes()}</Switch>
      </Router>
    );
  }
}
App.propTypes = {};
const mapStateToProps = state => {
  return { login: state.login };
};

const mapDispatchToProps = dispatch => {
  return {};
};
const witchConect = connect(mapStateToProps, mapDispatchToProps);
export default compose( witchConect)(App);
