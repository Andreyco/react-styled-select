import React, { PropTypes } from 'react';
import Arrow from './arrow';

export const StyledSelect = React.createClass({
  propTypes: {
    className: PropTypes.string,
    classNamePrefix: PropTypes.string.isRequired,
    arrowOptions: PropTypes.object,
    wrapperOptions: PropTypes.object,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
  },

  getInitialState() {
    return { focused: false };
  },

  getDefaultProps() {
    return {
      classNamePrefix: 'react-styled-select',
    };
  },

  onBlur(event) {
    this.setState({ focused: false });

    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(event);
    }
  },

  onFocus(event) {
    this.setState({ focused: true });

    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus(event);
    }
  },

  render() {
    const {
      className,
      classNamePrefix,
      wrapperOptions = {},
      arrowOptions = {},
      style = {},
      ...selectProps
    } = this.props;

    const { focused } = this.state;

    selectProps.onBlur = this.onBlur;
    selectProps.onFocus = this.onFocus;

    let composedClassName = `${className || ''} ${classNamePrefix}`;

    if (this.state.focused) {
      composedClassName += ` ${classNamePrefix}-focused`;
    }

    return (
      <div className={composedClassName} {...wrapperOptions} style={style}>
        <Arrow classNamePrefix={classNamePrefix} {...arrowOptions} />
        <select {...selectProps} />
      </div>
    );
  },
});