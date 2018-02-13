import React, { Component } from 'react';

// const primaryColor = '#FFC107';
const primaryColor = 'rgb(64,128,255)';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { hasFocus: false, value: props.value };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFocus() {
    this.setState({ hasFocus: true });
  }

  onBlur() {
    this.setState({ hasFocus: false });
  }

  onChange(event) {
    const value = event.target.value;
    this.setState({ value });
    this.props.loft(value);
  }

  render() {
    return (
      <div className="formInput">
        <label
          htmlFor={this.props.name}
          style={this.state.hasFocus ? { color: primaryColor } : {}}
          className="font_small"
        >
          {this.props.label}
        </label>
        <input
          type="text"
          id={this.props.name}
          name={this.props.name}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          value={this.state.value}
        />
        <span>{this.props.errors}</span>
      </div>
    );
  }
}

export default Input;

Input.propTypes = {
  label: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  loft: React.PropTypes.func,
  errors: React.PropTypes.string,
};

Input.defaultProps = {
  loft: x => x,
  value: '',
  label: '',
  errors: '',
};
