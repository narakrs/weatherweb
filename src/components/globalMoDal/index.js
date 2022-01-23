import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as modalAction from './../../actions/ModalAction';
class GlobalModal extends Component {
  handleClose = () => {
    const { onHandleClose } = this.props;
    const { closeModal } = onHandleClose;
    closeModal();
  };
  render() {
    const {  open } = this.props;
    return (<></>
    );
  }
}
const mapStateToProps = state => {
  const { openModal } = state.modal;
  return { open: openModal };
};

const mapDispatchToProps = dispatch => {
  return {
    onHandleClose: bindActionCreators(modalAction, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(GlobalModal);
