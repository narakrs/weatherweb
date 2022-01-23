import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { Layout } from 'antd';

const {  Footer } = Layout;


class FooterComponent extends Component {
  render() {
    return(<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>)
  }
}
export default compose(FooterComponent);
