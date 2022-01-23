import React, { Component } from 'react';

class FilterData extends Component {
  render() {
    const { classes, onHandleChange } = this.props;
    return (
      <form  noValidate autoComplete="off">
        <TextField
          label="Search"
          variant="outlined"
          onChange={onHandleChange}
        />
      </form>
    );
  }
}

export default FilterData;
