import React, { Component } from 'react';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import Alignment, { alignmentPropTypes } from '../../style/alignment';

var styles = {
  toolbar: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    cursor: 'default',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

@Alignment()
@Dimension({ width: '100%' })
class Toolbar extends Component {
  static propTypes = {
    ...alignmentPropTypes,
    ...dimensionPropTypes
  };

  render() {
    const { style, ...props } = this.props;

    return (
      <div style={{ ...styles.toolbar, ...style }} {...props}>
        {this.props.children}
      </div>
    );
  }
}

export default Toolbar;
