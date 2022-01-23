import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';

class Content extends Component {
  render() {
    return <div>Content</div>;
  }
}

Content.propTypes = {};
const ConnectedStyle = withStyles(styles);

export default compose(ConnectedStyle)(Content);
