import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import LoadingIcon from './../../assets/images/loading.gif';
import * as uiAction from '../../actions/uiActions';
import './../../index.css';
import styles from './styles';

class GlobalLoading extends Component {
  render() {
    const {  showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className='popup popup--secondary' style={styles}>
          <img src={LoadingIcon} className='popub__image popub__image--medium'  alt="loading icon"/>
        </div>
      );
    }
    return xhtml;
  }
}
const mapStateToProps = state => {
  return { showLoading: state.ui.showloading };
};

const mapDispatchToProps = dispatch => {
  return {
    uiAction: bindActionCreators(uiAction, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose( withConnect)(GlobalLoading);
