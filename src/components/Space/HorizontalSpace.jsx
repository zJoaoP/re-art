import React from 'react';
import PropTypes from 'prop-types';

export default function HorizontalSpace({ width, flexGrow }) {
  return <div style={flexGrow ? { flexGrow: 1 } : { width: `${width}` }} />;
}

HorizontalSpace.propTypes = {
  width: PropTypes.string,
  flexGrow: PropTypes.bool,
};

HorizontalSpace.defaultProps = {
  width: '0%',
  flexGrow: false,
};
