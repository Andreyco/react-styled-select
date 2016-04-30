import React, { PropTypes } from "react";

export const StyledSelect = React.createClass({
  propTypes: {
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
  },

  getInitialState() {
    return { focused: false };
  },

  onBlur(event) {
    this.setState({ focused: false });

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  },

  onFocus(event) {
    this.setState({ focused: true });

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  },

  render() {
    const {
      classNamePrefix = 'react-styled-select',
      wrapperProps = {},
      arrowProps = {},
      ...selectProps
    } = this.props;
    selectProps.onBlur = this.onBlur;
    selectProps.onFocus = this.onFocus;

    let className = classNamePrefix;
    if (this.state.focused) {
      className += ` ${classNamePrefix}-focused`;
    }

    return (
      <div className={className} {...wrapperProps}>
        <div className={`${classNamePrefix}-arrow`} {...arrowProps} />
        <select {...selectProps} />
      </div>
    );
  },
});
