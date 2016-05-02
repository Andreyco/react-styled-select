import React, { PropTypes } from 'react';

const Arrow = ({ className, classNamePrefix, ...props}) => (
  <div className={`${classNamePrefix}-arrow ${className || ''}`} {...props} />
);

Arrow.propTypes = {
  className: PropTypes.string,
  classNamePrefix: PropTypes.string,
};

export default Arrow;
